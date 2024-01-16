function livelyCurrentTrack(data) {
  const obj = JSON.parse(data);
  //when no track is playing its null
  document.getElementById("title").textContent = (obj != null) ? obj.Title : "None";
  document.getElementById("artist").textContent = (obj != null) ? obj.Artist : "None";
  if (obj.Thumbnail != null) {
    document.getElementById("thumbnail").src = "data:image/png;base64," + obj.Thumbnail;
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
