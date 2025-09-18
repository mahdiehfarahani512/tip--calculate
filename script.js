const billEl = document.getElementById("billamount");
const tipEl = document.getElementById("tip");
const calEl = document.getElementById("calculate");
const totalEl = document.getElementById("total");

calEl.addEventListener("click", () => {
  const sum = Number(billEl.value) + Number(tipEl.value);
  totalEl.innerText = sum;
});

// console.log(billEl, tipEl, calEl, totalEl);
console.log(calEl);
