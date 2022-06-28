const shopItems = ['Uova', 'Pane', 'Latte', 'Biscotti', 'Pasta', 'Affettati', 'Formaggio', 'Verdura', 'Frutta'];

let listItems = '';

const shop = document.getElementById('lista');

for (let i = 0; i < shopItems.length; i++) {
    listItems += `<li>${shopItems[i]}</li>`;
}

shop.innerHTML = listItems;