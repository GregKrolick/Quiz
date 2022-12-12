var startButtonEl = document.querySelector("#start");
var timerEl = document.querySelector("#timer");

startButtonEl.addEventListener("click", startTimer)

var countDownTimer;
var timerInterval;

// timer starts from 60
function startTimer(event) {
  startButtonEl.disabled = true;
  countdown = 60;
  timerInterval = setInterval(function(){
      timerEl.textContent = countdown;
      countdown--;
    }, 1000)
}
