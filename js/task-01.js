const categoryList = document.querySelector("#categories");
// console.log(categoryList);
const categoryItems = categoryList.querySelectorAll("li.item");
// console.log(categoryItems);
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2");
  const categoryElem = categoryItem.querySelectorAll("ul li");

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryElem.length}`);
});
