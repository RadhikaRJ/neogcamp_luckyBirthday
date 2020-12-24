btnref = document.querySelector("#result");
outputref = document.querySelector("#output");
var luckyNumref = document.querySelector("#luckynum");
opimageref = document.querySelector("#op-image");
var clickcount=0;
btnref.addEventListener("click", clickHandler);
var img= document.createElement("IMG");

function clickHandler() {
   
    var inputDate = document.getElementById("dateip").value;
    var checkLuckyNum = isNaN(luckyNumref.value);
    if (checkLuckyNum == true||luckyNumref.value.length==0) {
        alert("You must enter a valid digit as your lucky number.");
    } else {
        var luckyNum = luckyNumref.value;

        var [year, month, day] = inputDate.toString().split('-');

        year = Number(year);
        month = Number(month);
        day = Number(day);

        var sum = sumOfDigits(year) + sumOfDigits(month) + sumOfDigits(day);
        var rem = Math.floor(sum % luckyNum);
        
        var thisImg='';

        if (rem == 0) {
            outputref.innerText = "Yes Buddy, Your birthdate is lucky!\nMay Lady Luck be with you!";
            thisImg='/images/success.svg';
           setImage(thisImg,img);
        } else {
            if(rem==1){
                outputref.innerText = "Oops! You missed being lucky by just " + rem + " day!";
                thisImg='/images/fail.svg';
                setImage(thisImg,img);
               
                
                
               

            }
            else{
            outputref.innerText = "Oops! You missed being lucky by " + rem + " days. May the lady bug be with you!";
                thisImg='/images/fail.svg';
                setImage(thisImg,img);
            
            }
        }
    }

}

function sumOfDigits(num) {
    var sum = 0;

    while (num != 0) {
        var rem = num % 10;
        sum = sum + rem;
        num = Math.floor(num / 10);
    }
    return sum;

}

function setImage(imagename,img){
  
    img.src=imagename;
    document.getElementById('op-image').appendChild(img);
}
