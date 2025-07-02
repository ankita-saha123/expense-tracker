const form = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');

let total = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevents the form from reloading the page

  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (!description || !amount || amount <= 0) {
    alert('Please enter a valid description and amount!');
    return;
  }

  // Create new list item
  const li = document.createElement('li');
  li.textContent = `${description}: ₹${amount}`;
  expenseList.appendChild(li);

  // Update total
  total += amount;
  totalDisplay.textContent = total.toFixed(2);

  // Clear input fields
  descriptionInput.value = '';
  amountInput.value = '';
});
