const paymentsList = document.getElementById("payments");
const addPaymentForm = document.getElementById("addPaymentForm");

// Add event listener to form submit button
addPaymentForm.addEventListener("submit", (event) => {
	event.preventDefault();

	// Get form values
	const name = document.getElementById("paymentName").value;
	const amount = document.getElementById("paymentAmount").value;
	const date = document.getElementById("paymentDate").value;

	// Add payment item to list
	const paymentItem = document.createElement("li");
	paymentItem.innerHTML = `${name}: $${amount} due on ${date}`;
	paymentsList.appendChild(paymentItem);

	// Clear form inputs
	addPaymentForm.reset();
});
