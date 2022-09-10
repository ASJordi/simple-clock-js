const AVAILABLE_LENGHT = 400;

// Grab time objects and divs
const hourTime = document.querySelector(".hour-time");
const minuteTime = document.querySelector(".minute-time");
const secondTime = document.querySelector(".second-time");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

// Drawing the actual div of the hand
function drawHours(hour){
    let unit = (AVAILABLE_LENGHT /12).toFixed(2);
    //Convert 24h to 12h
    let hourBase12 = hour > 12 ? hour - 12 : hour;
    let handLength = unit * hourBase12;
    hourHand.style.width = `${handLength}px`;
}

function drawMinutes(minute){
    let unit = (AVAILABLE_LENGHT /60).toFixed(2);
    let handLength = unit * minute;
    minuteHand.style.width = `${handLength}px`;
}

function drawSeconds(seconds){
    let unit = (AVAILABLE_LENGHT /60).toFixed(2);
    let handLength = unit * seconds;
    secondHand.style.width = `${handLength}px`;
}

//Set the time in the div
function setHours(hour){
    drawHours(hour);
    hour = addZero(hour);
    hourTime.textContent = hour;
}

function setMinutes(minute){
    drawMinutes(minute);
    minute = addZero(minute);
    minuteTime.textContent = minute;
}

function setSeconds(second){
    drawSeconds(second);
    second = addZero(second);
    secondTime.textContent = second;
}

//Main function
function setTime(){
    const NOW = new Date();
    let hour = NOW.getHours();
    let minute = NOW.getMinutes();
    let second = NOW.getSeconds();

    setHours(hour);
    setMinutes(minute);
    setSeconds(second);
}

function addZero(number){
    return number < 10 ? "0" + number : number;
}

setTime();
setInterval(setTime, 1000);