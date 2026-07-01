function createStar(){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.animationDuration=(2+Math.random()*3)+"s";

    star.style.opacity=Math.random();

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },5000);

}

setInterval(createStar,120);
