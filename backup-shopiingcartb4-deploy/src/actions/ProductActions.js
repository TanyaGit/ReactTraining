//Action Creators
export function addProduct(newproduct){
    
   
    return({type: "ADD_PRODUCT", payload: newproduct})

}
export function updateProduct(newproduct){
    console.log(newproduct);   
    return({type: "UPDATE_PRODUCT", payload: newproduct})

}
export function addToCart(product){
    
    let orderedItem = {
        id:product.id, name:product.name, price:product.price, quantity:2
    }
    return({type: "ADD_TO_CART", payload: orderedItem})

}

export function deleteProduct(id){
    return({type: "DELETE_PRODUCT", payload: id})
}

export function getProducts(data){
    return ({type: "GET_PRODUCTS",payload:data})
}
