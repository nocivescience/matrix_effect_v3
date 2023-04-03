const matrixEl=document.getElementById('matrix');
const ctx=matrixEl.getContext('2d');
matrixEl.width=window.innerWidth;
matrixEl.height=window.innerHeight;
const widthScreen=26;
const heightScreen=2;
columns=Math.floor(matrixEl.width/widthScreen);
rows=Math.floor(matrixEl.height/heightScreen);
const latin='CICLOTRON';
const rainDrop=[];
const windDrops=[];
for( let x=0;x<columns;x++){
    rainDrop[x]=1;
}
const colors=['#0f0','#0ff','#f0f','#ff0','#f00','#00f'];
for( let y=0;y<rows;y++){
    windDrops[y]=1
}
function draw(){
    ctx.fillStyle='rgba(0,0,0,0.5)';
    ctx.fillRect(0,0,matrixEl.width,matrixEl.height)
    ctx.fillStyle=colors[Math.floor(Math.random()*colors.length)];
    ctx.font=`${Math.round(30*Math.random())}px Georgia`;
    for(let i=0;i<rainDrop.length;i++){
        let random=Math.floor(Math.random()*rainDrop.length)
        ctx.fillText(latin[Math.floor(Math.random()*latin.length)],i*widthScreen,heightScreen*rainDrop[i]*30+random*4);
        rainDrop[i]+=.4;
        if(rainDrop[i]*widthScreen*2>matrixEl.height){
            rainDrop[i]=1;
            random=undefined;
        }
    }
}
setInterval(draw,100)