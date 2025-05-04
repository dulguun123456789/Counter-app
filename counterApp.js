
document.body.style.backgroundColor = "#b3e5fc";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.paddingTop = "100px";

const h1 = document.querySelector("h1");
h1.style.fontSize = "50px";
h1.style.color = "#111";

const counter = document.getElementById("counter");
counter.style.fontSize = "100px";
counter.style.margin = "30px 0";
counter.style.color = "#222";

const buttonsDiv = document.querySelector(".buttons");
buttonsDiv.style.display = "flex";
buttonsDiv.style.justifyContent = "center";
buttonsDiv.style.gap = "20px";

const styleButton = (btn, color) => {
  btn.style.padding = "15px 30px";
  btn.style.fontSize = "20px";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.cursor = "pointer";
  btn.style.color = "white";
  btn.style.backgroundColor = color;
  btn.onmouseenter = () => btn.style.opacity = "0.8";
  btn.onmouseleave = () => btn.style.opacity = "1";
};


const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const incrementBtn = document.getElementById("increment");

styleButton(decrementBtn, "#4CAF50");
styleButton(resetBtn, "#f44336");
styleButton(incrementBtn, "#2196F3");


let count = 0;
function updateDisplay() {
  counter.innerText = count;
}

decrementBtn.onclick = () => {
  count--;
  updateDisplay();
};

incrementBtn.onclick = () => {
  count++;
  updateDisplay();
};

resetBtn.onclick = () => {
  count = 0;
  updateDisplay();
};
