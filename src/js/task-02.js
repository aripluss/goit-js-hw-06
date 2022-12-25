const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const addIngredient = (ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");

  return liEl;
};

const ingridientsList = ingredients.map((el) => addIngredient(el));

listEl.append(...ingridientsList);
console.log(listEl);
