// TODO
collH2=document.querySelectorAll("h2")
collH2.forEach((elm)=>{
    elm.addEventListener("click",(evt)=>{
        evt.target.simple.color="red";
    });
});