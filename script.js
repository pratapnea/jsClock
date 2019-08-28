const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
/*console.log(date);*/

//calling methods of date to pull out the needed value of hr, min, sec
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
/*console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);*/

/* Mathematical Calculation
   secPosition:
    secondHand rounds the 60 steps to complete the round
    i.e 360/60 and multiple on how many segments to move(sec)
   minPosition:
    minHand also rounds the 60 steps to complete the round
    i.e 36/60 and multiple on how many segments to move(min) but
    additionally we also need to move the minHand as per sec so additionl (sec*(360/60)/60)
   hrPostion:
    hrHand rounds the 12 steps to complete the round
    i.e 360/12 and multiple on segmets to move(hr)
    additionally we also need to move the hrHand as per the min as additionl (min*(360/60)/12)
*/
let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {

    /*  to move the clock hand in the clock we must calculate 
        the degre to move diff hands acc to actual time
    */
    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);
