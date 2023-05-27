const totalInput = document.getElementById("total");
const namesInput = document.getElementById("names");
const splitBtn = document.getElementById("splitBtn");
const resultsDiv = document.getElementById("results");

splitBtn.addEventListener("click", () => {
  const total = Number(totalInput.value);
  const names = namesInput.value.split(",").map((name) => name.trim());
  const numPeople = names.length;

  if (!total || isNaN(total)) {
    alert("Please enter a valid total amount");
    return;
  }

  if (names.some((name) => name.length === 0)) {
    alert("Please enter valid names");
    return;
  }

  const amountPerPerson = total / numPeople;

  let resultsHtml = "";

  names.forEach((name) => {
    resultsHtml += `<p>${name}: $${amountPerPerson.toFixed(2)}</p>`;
  });

  resultsDiv.innerHTML = resultsHtml;
});
