

function countdown() {
    const wedding = "25 June 2022";
    const weddingDate = new Date(wedding);
    const currentDate = new Date(wedding);

    const remSeconds = (weddingDate - currentDate);
    const days = Math.floor(remSeconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remSeconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remSeconds % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    if(remSeconds <= 0){
        clearInterval(countdown);
        const finalMessage = document.getElementById('finalMessage');
        let message = document.createElement('h1');
        message.innerHTML = "Time to get Married!";
        finalMessage.appendChild(message);

    }
    
}

countdown();

setInterval(countdown, 1000);