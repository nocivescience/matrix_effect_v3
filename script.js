const matrixEl=document.getElementById('matrix');
const ctx=matrixEl.getContext('2d');
matrixEl.width=window.innerWidth;
matrixEl.height=window.innerHeight;
const widthScreen=26;
const heightScreen=12;
columns=Math.floor(matrixEl.width/widthScreen);
rows=Math.floor(matrixEl.height/heightScreen);
const latin='TEAMOCLAUDIA';
const rainDrop=[];
const windDrops=[];
for( let x=0;x<columns;x++){
    rainDrop[x]=1;
}
for( let y=0;y<columns;y++){
    windDrops[y]=1
}
function draw(){
    ctx.fillStyle='rgba(0,0,0,0.5)';
    ctx.fillRect(0,0,matrixEl.width,matrixEl.height)
    ctx.fillStyle='white';
    ctx.font=`${13}px Georgia`;
    for(let i=0;i<rainDrop.length;i++){
        let random=Math.floor(Math.random()*rainDrop.length)
        ctx.fillText(latin[Math.floor(Math.random()*latin.length)],i*widthScreen,widthScreen*rainDrop[i]*2+random*4);
        rainDrop[i]++;
        if(rainDrop[i]*widthScreen*2>matrixEl.height){
            rainDrop[i]=1;
            random=undefined;
        }
    }
}
function horizontal(){
    ctx.fillStyle='rgba(0,0,0,.05)';
    
}
setInterval(()=>{draw()},100)