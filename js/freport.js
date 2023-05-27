const form = document.querySelector('form');
const output = document.querySelector('#output');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const earnings = parseInt(form.elements['earnings'].value);
  const rent = parseInt(form.elements['rent'].value);
  const utilities = parseInt(form.elements['utilities'].value);
  const groceries = parseInt(form.elements['groceries'].value);
  const expenses = rent + utilities + groceries;

  const debt = parseInt(form.elements['debt'].value);
  const interest = parseInt(form.elements['interest'].value) / 100;
  const debtAfterInterest = debt * (1 + interest);

  const savings = earnings - expenses - debtAfterInterest;

  output.innerHTML = `
    <h2>Report</h2>
    <p>Earnings: $${earnings.toFixed(2)}</p>
    <p>Expenses: $${expenses.toFixed(2)}</p>
    <p>Debt: $${debt.toFixed(2)}</p>
    <p>Interest rate: ${(interest * 100).toFixed(2)}%</p>
    <p>Debt after interest: $${debtAfterInterest.toFixed(2)}</p>
    <p>Savings: $${savings.toFixed(2)}</p>
  `;
});
