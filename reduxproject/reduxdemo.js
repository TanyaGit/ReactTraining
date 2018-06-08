const redux = require("redux")
console.log("From Redux file Demo - Added Require");
const createstore = redux.createStore; // Function
console.log("From Redux file Demo - crete Store - step");
console.log("step-1 define Reducer");
//Define Reducer
let mathReducer = (state = 0, action) => {
    //Initialize State Inside the function - Takes State & Action object
    //returns teh State
    //Updates the State by the Ction called Increment
    switch (action.type) {

        case "INCREMENT":
            return state + 1;
            
            case "ADD":
            return state + action.payload;

            default:
            return state;
    }
    
}
//Create a Storre object & Pass teh reducer as store holds the Reducer
let mystore = createstore(mathReducer);
console.log("Initial State of the Strore object --> " + mystore.getState());
//getState Method on the Store
//STep-2
//Subscribe to Observe the state changes
mystore.subscribe(() => {
    console.log("statechanged " + mystore.getState());
})

/*mystore.dispatch({ type: "INCREMENT"})
mystore.dispatch({ type: "INCREMENT"})
//payload is a property 
//that we have defeined - our ouwn data "payload " to teh action
mystore.dispatch({ type: "ADD",payload:13})
console.log("State Validated");
mystore.dispatch({ type: "INCREMENT"})
mystore.dispatch({ type: "ADD",payload:30})*/

//Define Action Creators
function increment() {

    return { type: "INCREMENT" }
}

function add(num) {

    return { type: "ADD", payload: num }
}
//spatch the Action
mystore.dispatch(increment())
mystore.dispatch(add(20))

//Example of Array and Spread

let myarray = [10, 20, 30, 40, 50]
//add 30 to array
arr2 = [...myarray, 30]
console.log(arr2)
arr3 = [...arr2.slice(0, 1), ...arr2.slice(2)]
console.log(" after Sliceing" + arr3)

