function stopwatch() {
    let seconds;
    let interval;
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');
    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);

    function start() {
        seconds = 0;
        increment();
        startButton.disabled = true;
        stopButton.disabled = false;                   
        interval = setInterval(increment, 1000);     
    }

    function stop() {        
        clearInterval(interval);
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    function increment() {        
        let currentSeconds = seconds % 60;        
        let currentMinutes = Math.floor(seconds / 60);

        if (currentSeconds < 10) {
            currentSeconds = '0' + currentSeconds;
        }

        if (currentMinutes < 10) {
            currentMinutes = '0' + currentMinutes;
        }

        document.getElementById('time').textContent = currentMinutes + ':' + currentSeconds;
        seconds++;        
    }
}