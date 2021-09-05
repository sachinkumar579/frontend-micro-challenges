const bar = document.getElementById("bar");
const button = document.getElementById("button");
const barWidth = bar.clientWidth;
const timeDiv = document.getElementById("time");
const interval = 5;
let stop = false;
let stoppedWidth = 0;
let time = 0;
let stoppedTime = 0;

function updateProgressBar(event, updateBar) {
  stop = false;
  if (bar.clientWidth < barWidth) {
    stoppedWidth = bar.clientWidth;
  }
  for (let i = stoppedWidth; i <= barWidth; i += interval) {
    function repaint() {
      stoppedTime = timeDiv.textContent;
      if (!stop && (i / barWidth) * 5 - stoppedTime <= 0.03125) {
        bar.style = "width:" + i + "px; background-color: red";
        timeDiv.textContent = (i / barWidth) * 5;
        if (i + interval > barWidth) {
          reset();
        }
      }
    }

    setTimeout(repaint, splitTime(i));
  }
}

function splitTime(i) {
  if (stoppedWidth == 0) {
    time = (i / barWidth) * 5000;
  } else {
    time =
      ((i - stoppedWidth) / (barWidth - stoppedWidth)) *
      (5000 - (5000 * stoppedWidth) / barWidth);
  }
  return time;
}

function reset() {
  bar.style.backgroundColor = "#eee";
  button.textContent = "Run";
  timeDiv.textContent = "0";
  stop = false;
  stoppedWidth = 0;
  time = 0;
}

function stopBar() {
  stop = true;
}
