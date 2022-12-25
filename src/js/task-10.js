function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("[type='number']");

const boxesEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const setOfElements = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.height = `${30 + 10 * i}px`;
    boxEl.style.width = `${30 + 10 * i}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    setOfElements.push(boxEl);
  }

  return setOfElements;
};

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  let boxesToAdd = createBoxes(Number(inputEl.value));
  boxesEl.append(...boxesToAdd);
  console.log(boxesEl);
});

function destroyBoxes() {
  boxesEl.innerHTML = "";
  console.log(boxesEl);
}

destroyBtn.addEventListener("click", destroyBoxes);
