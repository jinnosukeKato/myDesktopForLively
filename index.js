function livelyCurrentTrack(data) {
  const livelyJSON = JSON.parse(data);
  let title = "None"
  if(livelyJSON.Title != null) {
    if(livelyJSON.Title.length >= 10)
      title = livelyJSON.Title.substring(0, 10) + "...";
    else
      title = livelyJSON.Title;
  }
  document.getElementById("indicator_title").textContent = title;
  document.getElementById("indicator_artist").textContent = (livelyJSON != null) ? livelyJSON.Artist : "None";
  if (livelyJSON.Thumbnail != null) {
    document.getElementById("thumbnail").src = "data:image/png;base64," + livelyJSON.Thumbnail;
  }
}

function livelyPropertyListener(name, val) {
  switch(name) {
    case "borderColor": {
      const border_elm = document.querySelectorAll(".bordercolor");
      border_elm.forEach(elem => {
        elem.style.borderColor = val;
      });
      break;
    };
    case "iconPanelWidth": {
      const icon_panel = document.getElementById("container");
      icon_panel.style.gridTemplateColumns = `${val}vw 1fr`;
      break;
    }
  }
}

const weekDay = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday"
};

function clock_update() {
  const time_elm = document.getElementById("clock_time");
  const date_elm = document.getElementById("clock_date");

  const data = new Date();
  time_elm.textContent = `${data.getHours().toString().padStart(2, "0")}:${data.getMinutes().toString().padStart(2, "0")}:${data.getSeconds().toString().padStart(2, "0")}`;
  date_elm.textContent = `${weekDay[data.getDay()]} ${(data.getMonth() + 1).toString().padStart(2, "0")} / ${data.getDate().toString().padStart(2, "0")}`
}

function main() {
  clock_update();
}

setInterval(main, 10);
