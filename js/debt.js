// DOM elements
const owedAmount = document.getElementById("owed-amount");
const collectedAmount = document.getElementById("collected-amount");
const form = document.querySelector("form");
const debtorName = document.getElementById("debtor-name");
const debtAmount = document.getElementById("debt-amount");
const debtType = document.getElementById("debt-type");
const tableBody = document.getElementById("debt-table-body");

// Debt data
let debts = [];

// Function to render the debt table
function renderDebts() {
  tableBody.innerHTML = "";
  debts.forEach((debt, index) => {
    const row = document.createElement("tr");
    const debtorNameCell = document.createElement("td");
    const debtAmountCell = document.createElement("td");
    const debtTypeCell = document.createElement("td");
    const deleteButtonCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    debtorNameCell.textContent = debt.debtorName;
    debtAmountCell.textContent = `$${debt.debtAmount.toFixed(2)}`;
    debtTypeCell.textContent = debt.debtType;
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      debts.splice(index, 1);
      renderDebts();
      updateSummary();
    });

    deleteButtonCell.appendChild(deleteButton);
    row.appendChild(debtorNameCell);
    row.appendChild(debtAmountCell);
    row.appendChild(debtTypeCell);
    row.appendChild(deleteButtonCell);
    tableBody.appendChild(row);
  });
}

// Function to update the summary section
function updateSummary() {
  let owed = 0;
  let collected = 0;

  debts.forEach((debt) => {
    if (debt.debtType === "Owed") {
      owed += debt.debtAmount;
    } else {
      collected += debt.debtAmount;
    }
  });

  owedAmount.textContent = `$${owed.toFixed(2)}`;
  collectedAmount.textContent = `$${collected.toFixed(2)}`;
}

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!debtorName.value || !debtAmount.value || !debtType.value) {
    alert("Please fill in all fields.");
    return;
  }

  const newDebt = {
    debtorName: debtorName.value,
    debtAmount: parseFloat(debtAmount.value),
    debtType: debtType.value
  };

  debts.push(newDebt);
  renderDebts();
  updateSummary();

  debtorName.value = "";
  debtAmount.value = "";
  debtType.value = "";
});
