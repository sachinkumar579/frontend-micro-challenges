let click = 0;
const totalTime = 3000;
const bar = document.getElementById("bar");
const button = document.getElementById("button");
let barWidth = bar.clientWidth;

function updateProgressBar(event, updateBar) {
  if (updateBar == undefined) {
    click += 1;
  } else if (updateBar == true) {
    click -= 1;
  }
  button.textContent = "Run " + click;
  if (click == 1 || updateBar) {
    for (let i = 0; i <= totalTime; i++) {
      function repaint() {
        bar.style =
          "width:" + (i / totalTime) * barWidth + "px; background-color: blue";
        if (i >= totalTime) {
          click > 1 ? updateProgressBar(null, true) : reset();
        }
      }
      setTimeout(repaint, i);
    }
  }
}

function reset() {
  bar.style.backgroundColor = "gray";
  button.textContent = "Run";
  click = 0;
}
