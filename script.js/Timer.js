var timer;
var timeLeft = 120; 
var isPaused = false;
var pauseButton = document.getElementById("pause-btn");

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("timer-text").textContent = Math.floor(timeLeft / 60) + ":" + (timeLeft % 60 < 10 ? "0" : "") + (timeLeft % 60);
    } else {
        clearInterval(timer);
        timer = null;
        alert("Time's up! Take a break.");
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 120; 
    document.getElementById("timer-text").textContent = "2:00";
    pauseButton.textContent = "Pause";
    isPaused = false;
}

function pauseTimer() {
    if (isPaused) {
        timer = setInterval(updateTimer, 1000);
        pauseButton.textContent = "Pause";
    } else {
        clearInterval(timer);
        timer = null;
        pauseButton.textContent = "Resume";
    }
    isPaused = !isPaused;
}

