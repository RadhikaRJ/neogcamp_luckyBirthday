
var outputref = document.querySelector("#output");
var btnref = document.querySelector("#result");
var luckynum = Number(document.querySelector("luckynum"));

btnref.addEventListener("click",clickEventHandler);
function clickEventHandler(){
    var dateip=document.getElementById("dateip").value;
    outputref.innerText=dateip;
}
