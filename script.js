var bill = 0;
var tip = 0;
var people = 0;
var total = 0;

var billInput = document.getElementById("bill-input");
var tipInput = document.getElementById("tip-input");
var peopleInput = document.getElementById("people-input");

var amoutOutput = document.getElementById("tip-amount-output");
var totalOutput = document.getElementById("total-output");
var zeroalert = document.getElementById("zeroalert");

var resetButton = document.getElementById("reset-btn");
var allSelectTipButtons = document.getElementsByClassName("selecttip-btn");

for (let index = 0; index < allSelectTipButtons.length; index++) {
  allSelectTipButtons[index].addEventListener("click", function () {
    tip = Number(allSelectTipButtons[index].id);
    clearButtons();
    allSelectTipButtons[index].classList.add("selecttip-btn-active");
    tipInput.value = null;
    calc();
  });
}

billInput.addEventListener("input", function (e) {
  bill = e.target.value;
  calc();
});

tipInput.addEventListener("input", function (e) {
  tip = e.target.value;
  clearButtons();
  calc();
});

peopleInput.addEventListener("input", function (e) {
  if (e.target.value == 0) {
    peopleInput.style.outlineColor = "#C35332";
    zeroalert.style.display = "block";
  } else {
    peopleInput.style.outlineColor = "var(--strongCyan)";
    zeroalert.style.display = "none";
  }
  people = e.target.value;
  calc();
});

function clearButtons() {
  for (let index = 0; index < allSelectTipButtons.length; index++) {
    if (allSelectTipButtons[index].classList.contains("selecttip-btn-active")) {
      allSelectTipButtons[index].classList.remove("selecttip-btn-active");
    }
  }
}

function calc() {
  if (people != 0) {
    let tipCalc = tip / 100;
    let tipAmount = (bill * tipCalc) / people;
    let totalBill = (Number(bill) + tipAmount * people) / people;

    tipAmount = tipAmount.toFixed(2);
    totalBill = totalBill.toFixed(2);

    amoutOutput.innerHTML = "$" + tipAmount;
    totalOutput.innerHTML = "$" + totalBill;
    return;
  }
  console.log("not able");
}


function reset() {
    location.reload();
  }

  resetButton.addEventListener("click", reset);
