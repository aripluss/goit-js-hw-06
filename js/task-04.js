let counterValue = document.querySelector("#value");
let value = counterValue.textContent;
value = 0;

const decrementBtn = document.querySelector("#counter").firstElementChild;
const incrementBtn = document.querySelector("#counter").lastElementChild;

decrementBtn.addEventListener("click", () => {
  value -= 1;
  counterValue.innerText = value;
});

incrementBtn.addEventListener("click", () => {
  value += 1;
  counterValue.innerText = value;
});
