/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
/// ----------------------------- cart is and instance of a CART -------------------////
/// ------------------- use cmd/ctl f to look for words in your code ------------------///

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product

  const selectElement = document.getElementById('items');
  for (let i = 0; i < Product.allProducts.length; i++) {
    var oneProduct = Product.allProducts[i];
    var nOptionL = document.createElement('option');
    nOptionL.setAttribute('value', oneProduct.name);
    nOptionL.innerText = oneProduct.name;
    selectElement.appendChild(nOptionL);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // TODO: Prevent the page from reloading
  /// --------------- at this point you know which item was picked from the list, how many ----------- ///
  // Do all the things ...
  addSelectedItemToCart(event); 

  // you can theoretically add parameters/arguments to a function being called
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  var itemSelected = event.target[1].value;
  var qtyEntered = parseInt(event.target[2].value);
  cart.addItem(itemSelected, qtyEntered);
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  document.getElementById('itemCount').innerText = ` ${cart.items.length} item${cart.items.length > 1 ? 's' : ''}`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var itemSelected = event.target[1].value;
  var qtyEntered = parseInt(event.target[2].value);
  var cartContentsL = document.getElementById('cartContents');
  var newCartItemL = document.createElement('p');
  newCartItemL.innerText = `${itemSelected}: Qty ${qtyEntered}`;
  cartContentsL.appendChild(newCartItemL);

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
