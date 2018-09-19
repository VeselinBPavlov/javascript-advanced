function countdown(startTime) {
    let box = document.getElementById('time');
    let intervalID = setInterval(decrement, 1000);

    function decrement() {
        startTime--;
        box.value = Math.trunc(startTime / 60) + ':' + ('0' + (startTime % 60)).slice (-2);
    }
}