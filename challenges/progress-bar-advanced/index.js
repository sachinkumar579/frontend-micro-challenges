const bar = document.getElementById("bar");
const button = document.getElementById("button");
const barWidth = bar.clientWidth;
const timeDiv = document.getElementById("time");
const interval = 5;
let stop = false;
let stoppedWidth = 0;
let time = 0;
let stoppedTime = 0;

// Has all the logic to increment the loading bar width while applying red background color and reset when it has finished loading 
// The enclosing container "containerBar" background colour will always be gray 
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

// Time interval for which setTimeOut method should be called 
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

// This is reset when it has finished loading for 5 secs 
function reset() {
  bar.style.backgroundColor = "#eee";
  button.textContent = "Run";
  timeDiv.textContent = "0";
  stop = false;
  stoppedWidth = 0;
  time = 0;
}

// This is to stop the loading . This indicator will be used in setTimeOut calls to check if the loading should be stopped 
function stopBar() {
  stop = true;
}

// I don't even know how it works at this point 
