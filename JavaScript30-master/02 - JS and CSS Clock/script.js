const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();


    let seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    const mins = now.getMinutes();
    let minsDegrees = ((mins /60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    let hoursDegrees = ((hours /12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}


setInterval(setDate, 1000);