import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Provider} from "react-redux";
/*
index.js is the startup file so we can ignore defining it the way below and just give the folder name
import combineReducers from "./reducers/index";
*/
import combineReducers from "./reducers";
import {createStore} from "redux";

let appStore = createStore(combineReducers);

console.log("Initial State: ",appStore.getState());

ReactDOM.render(<Provider store={appStore}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>                 ,document.getElementById("root"));