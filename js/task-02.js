const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList.add("item");
  fragment.append(liElement);
});

list.appendChild(fragment);
