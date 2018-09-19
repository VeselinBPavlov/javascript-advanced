function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let time = null;

    startBtn.on('click', startTime);
    stopBtn.on('click', pauseTime);

    function startTime() {
        if (time) {
            clearInterval(time);
        }
        time = setInterval(increment, 1000);
    }

    function pauseTime() {
        clearInterval(time);
    }

    function increment() {        
        let sec = seconds.text();
        let mins = minutes.text();
        let hrs = hours.text();

        seconds.text(`0${+sec + 1}`.slice(-2));

        if (sec >= 59) {
            seconds.text('00');
            minutes.text(`0${+mins + 1}`.slice(-2));
            if (mins >= 59) {
                minutes.text('00');
                hours.text(`0${+hrs + 1}`.slice(-2));
            }
        }
    }
}
