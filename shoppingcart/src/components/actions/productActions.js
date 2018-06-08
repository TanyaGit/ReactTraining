
export function addToCart(product) {
    let orderedItem = {
        id:product.id, name:product.name, price:product.price, quantity:2
    }
    return ({type: "ADD_TO_CART", payload: orderedItem});
}
