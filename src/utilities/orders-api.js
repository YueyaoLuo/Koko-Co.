import sendRequest from "./send-request";
const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/shoppingbag`);
}

// Add an item to the shoppingbag
export function addItemToCart(itemId) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/shoppingbag/items/${itemId}`, 'POST');
}

// Update the item's qty in the shoppingbag
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/shoppingbag/qty`, 'PUT', { itemId, newQty });
}

// Updates the order's (shoppingbag's) isPaid property to true
export function payment(amount, id) {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/shoppingbag/payment`, 'POST', {amount, id});
}

//remove an item to the shoppingbag
export function removeItemFromCart(itemId) {
  return sendRequest(`${BASE_URL}/shoppingbag/items/remove/${itemId}`, 'DELETE');
}