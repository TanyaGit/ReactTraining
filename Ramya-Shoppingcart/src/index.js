//Steps for Component Based on Class

import App from './components/App';
import ReactDOM from "react-dom"
import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
//import BrowserRouter from 'react-router-dom/BrowserRouter';
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";

let productsData = [
    { "id" :1 , "name" : "Bravia", "price": 75000},
    { "id" :2 , "name" : "Galaxy", "price": 50000},
    { "id" :3 , "name" : "Bose", "price": 40000}]


let productsReducer= (state=productsData, action) => {
    switch(action.type){
        case "ADD_TO_CART":
        //let cp = [ ...state, action.payload]
        let ap = state.filter((e) => e.id!==action.payload.id)
        console.log("In Cart Addition" + productsData);
        return ap;
        case "REMOVE_FROM_CART":
        console.log("In Cart removed");
        let st = [...state, action.payload]
        return st;
        default:
        return state;
    }
}
let cartData =[]
let cartReducer =(state=cartData, action) => {
    switch(action.type){
        case "ADD_TO_CART":
        console.log("Added to cars" + cartData);
        let ap = [...state, action.payload]
        return ap;
        case "REMOVE_FROM_CART":
        console.log("In Cart removed");
        let st = state.filter((e) => e.id!==action.payload.id)
        console.log("In Cart Addition" + productsData);
        return st;
        default:
        return state;
    }
}

//let appStore=createStore(productsReducer)
let appStore= createStore(combineReducers({productsReducer,cartReducer}));
//console.log("From Index Js ")
//console.log(appStore.getState())
ReactDOM.render(
    <Provider store ={appStore}>
                    <BrowserRouter> 
                    <App/>
                    </BrowserRouter>
                    </Provider>,document.getElementById("root"))