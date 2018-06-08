let productsData = [
    {"id":1, "name":"LG", "price":30000},
    {"id":2, "name":"Daikin", "price":40000},
    {"id":3, "name":"OGeneral", "price":45000},
];

export let productRedcucer = (state = productsData, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            return [...state, action.payload]

        case "DELETE_PRODUCT":
            
            let idx = state.findIndex((e) => e.id === action.payload)
            return [...state.slice(0,idx), ...state.slice(idx+1)]

        case "UPDATE_PRODUCT":
            console.log("In product Reducer - UPDATE")
            let idx2 = state.findIndex((e) => e.id === Number(action.payload.id))
            //state[idx2]=action.payload;
            return [...state.slice(0,idx2), action.payload, ...state.slice(idx2+1)]
            //console.log("In product Reducer - UPDATE" ,state[idx2])
            //return state;

        case "ADD_TO_CART":
            console.log("Product Reducer ADD_TO_CART");
            let ap = state.filter((e) => e.id !== action.payload.id)
            return ap;

        case "REMOVE_TO_CART":
            let st = [...state, action.payload]
            return st;
        default: 
            return state;
    }
}