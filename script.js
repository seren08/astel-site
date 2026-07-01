const video = document.getElementById("bgvideo");

if(video){
    video.play().catch(()=>{
        document.addEventListener("touchstart",()=>{
            video.play();
        },{once:true});
    });
}

setInterval(()=>{
    const star=document.createElement("div");
    star.className="star";
    star.style.left=Math.random()*window.innerWidth+"px";
    star.style.animationDuration=(2+Math.random()*2)+"s";
    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },4500);

},250);
