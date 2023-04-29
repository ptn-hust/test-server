const button = document.getElementById('get-customers');
const customerList = document.getElementById('customer-list');

button.addEventListener('click', () => {
  getAllCustomers();
  console.log('button clicked');
});

function getAllCustomers() {
  fetch('http://localhost:8080/customers')
    .then((response) => response.json())
    .then((data) => displayCustomers(data));
}

function displayCustomers(customers) {
  customers.forEach((customer) => {
    const row = document.createElement('tr');
    row.innerHTML =
      '<td>' + customer.id + '</td><td>' + customer.name + '</td>';
    customerList.appendChild(row);
  });
}
