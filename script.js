function showMessage(){

document.getElementById("hiddenMessage").style.display="block";

for(let i=0;i<80;i++){

let heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.animation=`fall ${3+Math.random()*2}s linear`;

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

}

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

to{

transform:translateY(110vh) rotate(720deg);

}

}

`;

document.head.appendChild(style);
