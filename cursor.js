const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

function updateCursorEvents() {
    document.querySelectorAll("[data-cursor]").forEach((item) => {
      item.addEventListener("mouseover", (e) => {
        if (item.dataset.cursor === "pointer") {
          cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
          cursorBorder.style.setProperty("--size", "30px");
        }
        if (item.dataset.cursor === "pointer2") {
          cursorBorder.style.backgroundColor = "white";
          cursorBorder.style.mixBlendMode = "difference";
          cursorBorder.style.setProperty("--size", "80px");
        }
        if (item.dataset.cursor === "pointer3") {
          cursorBorder.style.backgroundColor = "white";
          cursorBorder.style.mixBlendMode = "difference";
          cursorBorder.style.setProperty("--size", "100px");
        }
        if (item.dataset.cursor === "pointer4") {
          cursorBorder.style.backgroundColor = "white";
          cursorBorder.style.mixBlendMode = "difference";
          cursorBorder.style.setProperty("--size", "100px");
          
        }
      });
      item.addEventListener("mouseout", (e) => {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.mixBlendMode = "unset";
        cursorBorder.style.setProperty("--size", "50px");
      });
    });

    document.querySelectorAll(".target").forEach((item) => 
    
      item.addEventListener("mouseover", () => {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
      cursorBorder.style.mixBlendMode = "unset";
      let rect = document.querySelector(".targetChild").getBoundingClientRect();
      // let x = rect.left + rect.width / 2;
      // let y = rect.top + rect.height / 2;
      let childx = rect.left + rect.width / 2;
      let childy = rect.top + rect.height / 2;

      // get coordinates of cursor 
      let x = cursorPos.x;
      let y = cursorPos.y;

      // get vector from cursor to center of target
      let vectorx = childx - x;
      let vectory = childy - y;

      vectorx/= -5
      vectory/= -5

      document.querySelector(".targetChild").style.transform = `translate(${vectorx}px, ${vectory}px)`;

      item.addEventListener("mouseout", () => {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.setProperty("--size", "50px");
        document.querySelector(".targetChild").style.transform = `translate(0px, 0px)`;
      });
    }));
}







updateCursorEvents();

export default updateCursorEvents;