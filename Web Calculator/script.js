const loan = document.getElementById('amount');
const rate = document.getElementById('rate');
const years = document.getElementById('years');
const button = document.getElementById('btn');
const result = document.getElementById('result');

button.addEventListener('click', function(){
  const loanVal = Number(loan.value);
  const rateVal = Number(rate.value);
  const year = Number(years.value)
  const month = year * 12;
  const monthlyPay = ((loanVal + ((rateVal / 100) * loanVal)) * year) / month;
  return result.innerText = monthlyPay;
})