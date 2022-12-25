function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const bgr = document.body;
const spanEl = document.querySelector(".color");

changeBtn.addEventListener("click", () => {
  bgr.style.backgroundColor = getRandomHexColor();
  spanEl.innerHTML = bgr.style.backgroundColor;
});
