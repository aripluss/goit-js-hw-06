const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  if (inputEl.value === "") {
    spanEl.textContent = "Anonymous";
    return;
  }

  spanEl.textContent = inputEl.value;
});
