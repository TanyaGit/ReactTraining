let cartData= [];

export let cartReducer = (state=cartData, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            console.log("Cart Reducer ADD_TO_CART");
            let cp = [...state, action.payload]
            return cp;
            case "REMOVE_TO_CART":
                let st = state.filter((e) => e.id !== action.payload.id)
                return st;
        default: 
            return state;
    }
}
