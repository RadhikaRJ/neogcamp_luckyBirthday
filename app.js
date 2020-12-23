btnref = document.querySelector("#result");
outputref = document.querySelector("#output");
var luckyNumref = document.querySelector("#luckynum");

btnref.addEventListener("click", clickHandler);


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
        if (rem == 0) {
            outputref.innerText = "Yes Buddy, Your birthday is lucky!\nMay Lady Luck be with you!";
        } else {
            outputref.innerText = "Oops! You missed being lucky by " + rem + " days!";
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