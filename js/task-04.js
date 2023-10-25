const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");
let counterValue = 0;

decrement.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});
increment.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});
function updateCounterValue() {
  valueSpan.textContent = counterValue;
}
updateCounterValue();
