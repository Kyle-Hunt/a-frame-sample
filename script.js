const cam = document.querySelector('#camera')
let x = 1
window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    var pos = cam.getAttribute("position")
    pos.y += 2;
    cam.setAttribute("position", pos);
  }
})

function refreshData() {
  var pos = cam.getAttribute("position")
  pos.y += -1;
  cam.setAttribute("position", pos);
  if (pos.x > 100) {
    pos.x = 100;
    cam.setAttribute("position", pos);
  }
  else if (pos.x < -100) {
    pos.x = -100;
    cam.setAttribute("position", pos);
  }
  if (pos.z > 100) {
    pos.z = 100;
    cam.setAttribute("position", pos);
  }
  else if (pos.z < -100) {
    pos.z = -100;
    cam.setAttribute("position", pos);
  }
  if (pos.y > 100) {
    pos.y = 100;
    cam.setAttribute("position", pos);
  }
  else if (pos.y < 10) {
    pos.y = 10;
    cam.setAttribute("position", pos);
  }
  console.log(pos.x+pos.y+pos.z)
  setTimeout(refreshData, x * 1000);
}

refreshData();
