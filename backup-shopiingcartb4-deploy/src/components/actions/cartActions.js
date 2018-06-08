
export function removeFromCart(cartItem) {
    return ({type: "REMOVE_TO_CART", payload: cartItem});
}