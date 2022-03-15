updateSeconds();
updateMinutes();
updateHours();

setInterval(() => {
  updateSeconds();
  updateMinutes();
  updateHours();
}, 1000);

function updateSeconds() {
  const secs = new Date().getSeconds();

  if (document.getElementById("seconds-cont"))
    document.getElementById("seconds-cont").remove();

  const secondsCont = document.createElement("div");
  secondsCont.id = "seconds-cont";
  const secondsSecond = document.createElement("div");
  const secondsFirst = document.createElement("div");

  secondsFirst.id = "seconds-prev";
  if (secs == 0) secondsFirst.textContent = 59;
  else secondsFirst.textContent = secs <= 10 ? "0" + (secs - 1) : secs - 1;
  secondsFirst.className = "move-prev";

  secondsSecond.id = "seconds-next";
  secondsSecond.textContent = secs < 10 ? "0" + secs : secs;
  secondsSecond.className = "move-next";

  secondsCont.appendChild(secondsFirst);
  secondsCont.appendChild(secondsSecond);
  document.getElementById("seconds").appendChild(secondsCont);
}

function updateMinutes() {
  const date = new Date();
  const mins = date.getMinutes();

  if (date.getSeconds() == 0) {
    if (document.getElementById("minutes-fixed"))
      document.getElementById("minutes-fixed").remove();
    const minutesFirst = document.createElement("div");
    const minutesSecond = document.createElement("div");

    minutesFirst.id = "minutes-prev";
    if (mins == 0) minutesFirst.textContent = 59;
    else minutesFirst.textContent = mins <= 10 ? "0" + (mins - 1) : mins - 1;
    minutesFirst.className = "move-prev";

    minutesSecond.id = "minutes-next";
    minutesSecond.textContent = mins < 10 ? "0" + mins : mins;
    minutesSecond.className = "move-next";

    document.getElementById("minutes").appendChild(minutesFirst);
    document.getElementById("minutes").appendChild(minutesSecond);
  } else {
    if (
      document.getElementById("minutes-prev") &&
      document.getElementById("minutes-next")
    ) {
      document.getElementById("minutes-prev").remove();
      document.getElementById("minutes-next").remove();
    }
    if (document.getElementById("minutes-fixed"))
      document.getElementById("minutes-fixed").remove();
    const minutesFixed = document.createElement("div");
    minutesFixed.id = "minutes-fixed";
    minutesFixed.textContent = mins < 10 ? "0" + mins : mins;
    minutesFixed.className = "minutes-fixed";
    document.getElementById("minutes").appendChild(minutesFixed);
  }
}

function updateHours() {
  const date = new Date();
  const hours = date.getHours();

  if (date.getSeconds() == 0 && date.getMinutes() == 0) {
    if (document.getElementById("hours-fixed"))
      document.getElementById("hours-fixed").remove();
    const hoursFirst = document.createElement("div");
    const hoursSecond = document.createElement("div");

    hoursFirst.id = "hours-prev";
    if (hours == 0) hoursFirst.textContent = 23;
    else hoursFirst.textContent = hours <= 10 ? "0" + (hours - 1) : hours - 1;
    hoursFirst.className = "move-prev";

    hoursSecond.id = "hours-next";
    hoursSecond.textContent = hours < 10 ? "0" + hours : hours;
    hoursSecond.className = "move-next";

    document.getElementById("hours").appendChild(hoursFirst);
    document.getElementById("hours").appendChild(hoursSecond);
  } else {
    if (document.getElementById("hours-fixed")) {
      document.getElementById("hours-fixed").remove();
    } else if (
      document.getElementById("hours-prev") &&
      document.getElementById("hours-next")
    ) {
      document.getElementById("hours-prev").remove();
      document.getElementById("hours-next").remove();
    }
    const hoursFixed = document.createElement("div");
    hoursFixed.id = "hours-fixed";
    hoursFixed.textContent = hours < 10 ? "0" + hours : hours;
    hoursFixed.className = "hours-fixed";
    document.getElementById("hours").appendChild(hoursFixed);
  }
}
