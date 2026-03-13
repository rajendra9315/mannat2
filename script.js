/* STAR → PHOTO FADE */

setTimeout(()=>{

document.getElementById("stars").style.opacity="0";
document.getElementById("pfp").style.opacity="1";

},1500);


/* PARTICLES */

function createParticle(){

const p=document.createElement("div");

p.classList.add("neon-particle");

p.style.left=Math.random()*100+"vw";

p.style.top="100vh";

p.style.animationDuration=(4+Math.random()*6)+"s";

document.body.appendChild(p);

setTimeout(()=>p.remove(),9000);

}

setInterval(createParticle,400);
