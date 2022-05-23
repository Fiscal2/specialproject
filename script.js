function countdown() {
    const weddingDate = new Date("25 June 2022");
    const currentDate = new Date(weddingDate);

    const remSeconds = (weddingDate - currentDate);
    // const days = 
    const hours = Math.floor((remSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remSeconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remSeconds % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    daysEl.innerHTML = Math.floor(remSeconds / (1000 * 60 * 60 * 24));
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    if (remSeconds == 0) {
        document.body.classList.toggle('final-background');
        clearInterval(countdown);
        const finalMessage = document.getElementById('finalMessage');
        let message = document.createElement('h1');
        message.innerHTML = "Time to get Married!";
        finalMessage.appendChild(message);
        remSeconds = -1
    }

}

countdown();

setInterval(countdown, 1000);