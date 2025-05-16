const loan = document.getElementById('amount');
const rate = document.getElementById('rate');
const years = document.getElementById('years');
const button = document.getElementById('btn');
const result = document.getElementById('result');

button.addEventListener('click', function(){
  const loanVal = Number(loan.value);
  const rateVal = Number(rate.value) / 12 / 100;
  const year = Number(years.value)
  const month = year * 12;
  const monthlyPay = loanVal * rateVal * Math.pow((1 + rateVal), month) / (Math.pow((1 + rateVal), month) - 1)
  check = isFinite(monthlyPay)
  console.log(check)
  return result.innerText = isFinite(monthlyPay)
  ? `Monthly Payment = $${monthlyPay.toFixed(2)}`
  : `Please fill all the input field with a valid number.`
})
