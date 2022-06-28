const shopItems = ['Uova', 'Pane', 'Latte', 'Biscotti', 'Pasta', 'Affettati', 'Formaggio', 'Verdura', 'Frutta'];

let listItems = '';

const shop = document.getElementById('lista');

let i = 0; 

while (i < shopItems.length) {
    listItems += `<li>${shopItems[i]}</li>`;
    i++;
}

shop.innerHTML = listItems;