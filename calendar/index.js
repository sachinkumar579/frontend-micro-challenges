let cardsArr = [
  {
    startTime: "00:00",
    endTime: "01:00",
    color: "#f6be23",
    title: "#TeamDevKode",
  },
  {
    startTime: "03:00",
    endTime: "04:00",
    color: "#f6501e",
    title: "#TeamDevKode",
  },
  {
    startTime: "05:00",
    endTime: "06:00",
    color: "#029be5",
    title: "#TeamDevKode",
  },
  {
    startTime: "07:00",
    endTime: "08:00",
    color: "#029be5",
    title: "#TeamDevKode",
  },
  {
    startTime: "08:00",
    endTime: "09:00",
    color: "#f6be23",
    title: "#TeamDevKode",
  },
  {
    startTime: "13:00",
    endTime: "14:00",
    color: "#f6be23",
    title: "#TeamDevKode",
  },
  {
    startTime: "16:00",
    endTime: "17:00",
    color: "#dee23",
    title: "#TeamDevKode",
  },
  {
    startTime: "17:00",
    endTime: "18:00",
    color: "#f6be23",
    title: "#TeamDevKode",
  },
];

let meetingCards = document.getElementById("containerMeetingsCards");
let fragment = document.createDocumentFragment();

for (let i = 0; i < 24; i++) {
  let isMeetingPresent = false;
  let colour = null;
  let startTime = null;
  let endTime = null;
  let startTimeMins = null;
  let endTimeMins = null;
  let title = null;
  let displayContent = null;

  let meetingBox = document.createElement("div");
  meetingBox.className = "meeting-box";

  let meetingTime = document.createElement("div");
  meetingTime.className = "display-time";
  if (i < 13) meetingTime.textContent = i + ":00 AM";
  else meetingTime.textContent = i - 12 + ":00 PM";

  let meetingData = document.createElement("div");

  cardsArr.forEach((data) => {
    if (i == data.startTime.split(":")[0]) {
      startTime = data.startTime.split(":")[0];
      startTimeMins = data.startTime.split(":")[1];
      endTime = data.endTime.split(":")[0];
      endTimeMins = data.endTime.split(":")[1];
      isMeetingPresent = true;
      colour = data.color;
      title = data.title;
    }
  });

  if (isMeetingPresent) {
    if (i > 12) {
      displayContent =
        title +
        "<br>" +
        (startTime - 12) +
        ":" +
        startTimeMins +
        " pm - " +
        (endTime - 12) +
        ":" +
        endTimeMins +
        " pm";
    } else {
      displayContent =
        title +
        "<br>" +
        startTime +
        ":" +
        startTimeMins +
        " am - " +
        endTime +
        ":" +
        endTimeMins +
        " am";
    }

    meetingData.innerHTML = displayContent;
    meetingData.className = "meeting";
    meetingData.style.backgroundColor = colour;
    meetingData.style.color = "white";
  } else {
    meetingData.className = "no-meeting";
  }

  meetingBox.append(meetingTime);
  meetingBox.append(meetingData);

  fragment.append(meetingBox);
}
meetingCards.append(fragment);
