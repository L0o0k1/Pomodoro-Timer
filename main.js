const buttons = document.querySelectorAll(".btn");
const focusBtn = document.getElementById("focus");
const ShortBreakBtn = document.getElementById("shortbreak");
const LongBreakBtn = document.getElementById("longbreak");
const startBtn = document.getElementById("btn-start");
const reSetBtn = document.getElementById("btn-reset");
const pauseBtn = document.getElementById("btn-pause");
const tim = document.getElementById("time");
//-----------------------------------------------------------
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
tim.textContent = `${minCount + 1}:00`;

const Zer0 = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};
reSetBtn.addEventListener("click", () => {
  pauseTimer();
  switch (active) {
    case "long":
      minCount = 14;
      break;
    case "short":
      minCount = 5;
      break;
    default:
      minCount = 24;
      break;
  }
  count = 59;
  tim.textContent = `${minCount + 1}:00`;
});

const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("btn-focus");
  });
};

focusBtn.addEventListener("click", () => {
  removeFocus();
  focusBtn.classList.add("btn-focus");
  pauseTimer();
  minCount = 24;
  count = 59;
  tim.textContent = `${minCount + 1} :00`;
});

ShortBreakBtn.addEventListener("click", () => {
  removeFocus();
  ShortBreakBtn.classList.add("btn-focus");
  pauseTimer();
  minCount = 4;
  count = 59;
  tim.textContent = `0${minCount + 1} :00`;
});

LongBreakBtn.addEventListener("click", () => {
  removeFocus();
  LongBreakBtn.classList.add("btn-focus");
  pauseTimer();
  minCount = 14;
  count = 59;
  tim.textContent = `${minCount + 1}:00`;
});

pauseBtn.addEventListener(
  "click",
  (pauseTimer = () => {
    paused = true;
    clearInterval(set);
    startBtn.classList.remove("hide");
    pauseBtn.classList.remove("show");
    reSetBtn.classList.remove("show");
  })
);

startBtn.addEventListener("click", () => {
  reSetBtn.classList.add("show");
  pauseBtn.classList.add("show");
  startBtn.classList.add("hide");
  startBtn.classList.remove("show");
  if (paused) {
    paused = false;
    tim.textContent = `${Zer0(minCount)}:${Zer0(count)}`;
    set = setInterval(() => {
      count--;
      tim.textContent = `${Zer0(minCount)}:${Zer0(count)}`;
      if (count === 0) {
        if (minCount != 0) {
          minCount--;
          count = 60;
        } else {
          clearInterval(Set);
        }
      }
    }, 1000);
  }
});
