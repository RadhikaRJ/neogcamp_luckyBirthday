btnref=document.querySelector("#result");
outputref=document.querySelector("#output");
var luckyNumref =document.querySelector("#luckynum");

btnref.addEventListener("click",clickHandler);


function clickHandler(){
    var inputDate = document.getElementById("dateip").value;
    var luckyNum=luckyNumref.value;
    var [year,month,day]=inputDate.toString().split('-');
    year=Number(year);
    month=Number(month);
    day=Number(day);
    console.log("inputDate: "+inputDate+"\nluckyNum: "+luckyNum+"\nyear: "+year+" month: "+month+" day: "+day);
    var sum=sumOfDigits(year)+sumOfDigits(month)+sumOfDigits(day);
    console.log("sum: "+sum);

}

function sumOfDigits(num){
   var sum=0;
    
    while(num!= 0){
        var rem=num%10;
        sum=sum+rem;
        num=Math.floor(num/10);
    }
    return sum;

}