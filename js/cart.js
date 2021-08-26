/* global Cart */
'use strict';


const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}


function clearCart() {
  var cartTBodyLs = document.getElementById('cart').getElementsByTagName('tbody');
  for (var tbodyL of cartTBodyLs ) {
    while (tbodyL.firstchild) {
      tbodyL.removeChild(tBodyL.firstChild);
    }
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var cartTBodyLs = document.getElementById('cart').getElementsByTagName('tbody');
  for (var i = 0; i < 1; i++) {
    var cartTBodyL = cartTBodyLs[i]
    for (var j = 0; j < cart.items.length; j ++) {
      var newRowL = document.createElement('tr');
      var deleteTDL = document.createElement('td');
      deleteTDL.setAttribute('id', cart.items[j].product);
      var anchorL = document.createElement('a');
      anchorL.setAttribute('href', '#delete-link');
      anchorL.setAttribute('id', cart.items[j].product);
      anchorL.addEventListener('click', removeItemFromCart);
      anchorL.innerText = 'X';
      deleteTDL.appendChild(anchorL);
      newRowL.appendChild(deleteTDL);
      var qtyTDL = document.createElement('td');
      qtyTDL.innerText = cart.items[j].quantity;  
      newRowL.appendChild(qtyTDL);
      var itemTDL = document.createElement('td');
      itemTDL.innerText = cart.items[j].product;
      newRowL.appendchild('itemTDL');
      cartTBodyL.appendChild(newRowL);
    }
  }
  // TODO: Find the table body
  /// ------------------ querySelector ---------------------------///

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  var itemToRemove = event.target.id;
  for (var i = 0;i < cart.items.length; i++) {
  if (cart.items[i].product === itemToRemove) {
      cart.removeItems(cart.items[i]);
    }
  }
  cart.saveToLocalStorage();

  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
