const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

function defaultFontSize() {
  textEl.style.fontSize = fontSizeControlEl.value + "px";
}

fontSizeControlEl.addEventListener("input", () => {
  textEl.style.fontSize = fontSizeControlEl.value + "px";
});

defaultFontSize();
