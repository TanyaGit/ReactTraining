//Passing Object to teh State
const redux = require("redux")
//Store
const createstore = redux.createStore; // Function

let mathReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            //return { count: state.count + 1 };
            let p = {count:state.count+1};
            return p;

            break;
        case "ADD":
            return { count: (state.count + action.payload) };
            break;
        default:
            return state;
    }
}

let store = createstore(mathReducer)
store.subscribe(() => {
    console.log("state Changed details", store.getState());
})

function increment() {

    return { type: "INCREMENT" }
}

function add(num) {

    return { type: "ADD", payload: num }
}
//spatch the Action
store.dispatch(increment())
store.dispatch(add(500))