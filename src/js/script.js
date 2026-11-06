// TODO
collH2=document.querySelectorAll("h2")
collH2.forEach((elm)=>{
    elm.addEventListener("click",(evt)=>{
        evt.target.simple.color="red";
    });
});
aMettreEnRouge=document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color="red"
enRougeSuiteAClick=document.querySelector("#en-rouge-suite-a-click")
enRougeSuiteAClick.addEventListener("click",(evt)=>{
enRougeSuiteAClick.style.color="red"
});