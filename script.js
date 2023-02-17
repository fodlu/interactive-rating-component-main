const start = document.querySelector(".start");
const end = document.querySelector(".end");
const rate = document.querySelectorAll(".rate");
const rating = document.querySelector(".rating");
const submit = document.querySelector(".submit");
const result = document.querySelector(".result");

let rateValue;

rating.addEventListener("click", (e) => {
  if (e.target.classList.contains("rate")) {
    rateValue = e.target.textContent;
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();

  start.classList.toggle("hidden");
  end.classList.toggle("hidden");

  if (!rateValue) {
    result.textContent = `You haven't made a selection`;
  } else {
    result.textContent = `You selected ${rateValue} out of 5`;
  }
});
