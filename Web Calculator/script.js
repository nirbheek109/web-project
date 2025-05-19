const loan = document.getElementById("amount");
const rate = document.getElementById("rate");
const years = document.getElementById("years");
const cBtn = document.getElementById("calculate");
const rBtn = document.getElementById("reset");
const result = document.getElementById("monthlyPayment");
const result2 = document.getElementById("totalPayment");
const result3 = document.getElementById("totalInterest");
const form = document.getElementById(`resetForm`);
const mother = document.querySelector(`.mother`);

function calculateLoan() {
  mother.style.display = "block";
  const loanVal = Number(loan.value);
  const rateVal = Number(rate.value) / 12 / 100;
  const year = Number(years.value);
  const month = year * 12;
  rBtn.style.display = "inline-block";
  const monthlyPay =
    (loanVal * rateVal * Math.pow(1 + rateVal, month)) /
    (Math.pow(1 + rateVal, month) - 1);
  result.innerText = isFinite(monthlyPay)
    ? `Monthly Payment: $${monthlyPay.toFixed(2)}`
    : `Please fill all the input field with a valid number.`;
  const paymentCount = Number(monthlyPay) * month;
  result2.innerText = `Total Payment: $${(monthlyPay * month).toFixed(2)}`;
  const interestCount = `Total Interest: $${(paymentCount - loanVal).toFixed(
    2
  )}`;
  result3.innerText = interestCount;
  return;
}

resetForm = () => {
  form.reset();
  mother.style.display = "none";
};
