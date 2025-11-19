const cartState = {
    items: []
};

function findCartBody() {
    const table = document.getElementById('tab');
    if (!table) {
        return null;
    }

    if (!table.tBodies.length) {
        table.appendChild(document.createElement('tbody'));
    }

    return table.tBodies[0];
}

function formatPrice(value) {
    return `$${Number(value).toFixed(2).replace(/\.00$/, '')}`;
}

function updateCartTotals() {
    const quantityEl = document.getElementById('quantity');
    const totalEl = document.getElementById('total');

    if (quantityEl) {
        quantityEl.textContent = cartState.items.length;
    }

    if (totalEl) {
        const sum = cartState.items.reduce((acc, item) => acc + item.price, 0);
        totalEl.textContent = Number(sum).toFixed(2).replace(/\.00$/, '');
    }
}

function myfunction(productName, price) {
    const formattedPrice = Number(price);
    const body = findCartBody();

    if (!body) {
        return;
    }

    cartState.items.push({ name: productName, price: formattedPrice });

    const row = body.insertRow();
    row.insertCell(0).textContent = productName;
    row.insertCell(1).textContent = formatPrice(formattedPrice);

    updateCartTotals();
    hide();
}

function hide() {
    const cart = document.getElementById('shopping-cart');
    if (cart) {
        cart.hidden = false;
        cart.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function delet() {
    const body = findCartBody();
    if (!body || !body.rows.length) {
        return;
    }

    body.deleteRow(body.rows.length - 1);
    cartState.items.pop();
    updateCartTotals();

    if (!cartState.items.length) {
        const cart = document.getElementById('shopping-cart');
        if (cart) {
            cart.hidden = true;
        }
    }
}

window.myfunction = myfunction;
window.hide = hide;
window.delet = delet;