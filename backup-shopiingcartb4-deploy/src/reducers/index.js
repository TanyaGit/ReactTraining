import {combineReducers} from "redux";
import {cartReducer} from "./cartReducer";
import {productRedcucer} from "./productReducer";

export default combineReducers({productRedcucer,cartReducer});