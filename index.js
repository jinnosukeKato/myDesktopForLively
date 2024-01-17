function livelyCurrentTrack(data) {
  const livelyJSON = JSON.parse(data);
  document.getElementById("title").textContent = (livelyJSON != null) ? livelyJSON.Title : "None";
  document.getElementById("artist").textContent = (livelyJSON != null) ? livelyJSON.Artist : "None";
  if (livelyJSON.Thumbnail != null) {
    document.getElementById("thumbnail").src = "data:image/png;base64," + livelyJSON.Thumbnail;
  }
}

function clock() {
  const data = new Date();
  const clock_elm = document.getElementById("clock_data");
  clock_elm.textContent = `${data.getHours().toString().padStart(2, "0")}:${data.getMinutes().toString().padStart(2, "0")}:${data.getSeconds().toString().padStart(2, "0")}`;
}

function main() {
  clock();
}

setInterval(main, 500);
