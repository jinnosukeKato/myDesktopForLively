function livelyCurrentTrack(data) {
  const livelyJSON = JSON.parse(data);
  document.getElementById("title").textContent = (livelyJSON != null) ? livelyJSON.Title : "None";
  document.getElementById("artist").textContent = (livelyJSON != null) ? livelyJSON.Artist : "None";
  if (livelyJSON.Thumbnail != null) {
    document.getElementById("thumbnail").src = "data:image/png;base64," + livelyJSON.Thumbnail;
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

setInterval(main, 1);
