
var outputref = document.querySelector("#output");
var btnref = document.querySelector("#result");
var luckyref = document.querySelector("#luckynum");

btnref.addEventListener("click",clickEventHandler);

function clickEventHandler(){
    var dateip=document.getElementById("dateip").value;
    var luckynum = luckyref.value;
    var luckyresult = isLucky(dateip,luckynum);
    if(luckyresult==true){
        outputref.innerText="Yes, Your Birthdate is Lucky!!";
    }
    else{
        outputref.innerText="Oops!, Your Birthdate is not lucky!!";
    }
    
}

function isLucky(date, num){
    var[year, month,day]=date.toString().split('-');
    
    var sumofdigits=calculateSumOfDigits(year) + calculateSumOfDigits(month) + calculateSumOfDigits(day);
    console.log("Sum of all digits is: "+sumofdigits);
    if(sumofdigits % Number(num)==0){
        return true;
    }
    else return false;
}

function calculateSumOfDigits(num){
    var sum=0;
    var n1=Number(num);
    while(n1>0){
        var digit=num % 10;
        num=num/10;
        sum=sum+digit;
    }
    return sum;
    
}