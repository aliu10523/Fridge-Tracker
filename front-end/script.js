const itemInput = document.getElementById('item-name');
const expirationInput = document.getElementById('category-name');
const tableBody = document.querySelector('#fridge-table tbody');
const addItemBtn = document.getElementById('add-item-btn');

let fridgeItems = [];

addItemBtn.addEventListener('click', function() {
    const item = itemInput.value;
    const expirationDate = expirationInput.value;
    if (item === '' || expirationDate === '') {
        alert('Please enter both item name and expiration date.');
        return;
    }
    fridgeItems.push({ item, expirationDate });
    displayItems();
    clearInputs();
});

function displayItems() {
    tableBody.innerHTML = '';
    for (let i = 0; i < fridgeItems.length; i++) {
        const row = document.createElement('tr');
        const itemName = document.createElement('td');
        itemName.textContent = fridgeItems[i].item;
        itemName.style.padding = "8px 8px";
        row.appendChild(itemName);
        const expirationDate = document.createElement('td');
        expirationDate.textContent = fridgeItems[i].expirationDate;
        expirationDate.style.padding = "8px 8px";
        row.appendChild(expirationDate);
        tableBody.appendChild(row);
    }
}

function clearInputs() {
    itemInput.value = '';
    expirationInput.value = '';
}
