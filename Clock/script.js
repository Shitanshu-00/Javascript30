const setDate=()=>{
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const minDegrees = ((minutes/60)*360)+90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hourDegrees = ((hours/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

};
setInterval(setDate, 1000);