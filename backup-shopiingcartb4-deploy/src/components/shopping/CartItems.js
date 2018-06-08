import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {removeFromCart} from "../actions/cartActions";

class CartItems extends Component {

    createTable = (cartDetails) => {
        let output = null;
        console.log("createTable:cartDetails: ", cartDetails)
        if(cartDetails.length > 0){
            output = cartDetails.map((cartDetails) => {
                return (<tr key={cartDetails.id}>
                    <td>{cartDetails.name}</td>
                    <td>{cartDetails.price}</td>
                    <td>{cartDetails.quantity}</td>
                    <td>{cartDetails.price * cartDetails.quantity}</td>
                    <td>
                        <button onClick={ () => this.props.removeFromCart(cartDetails) } className="btn btn-danger btn-xs">X</button>
                    </td>
                </tr>);
            });
        }else {
            output = <tr><td colSpan="5">No Cart Items found</td></tr>
        }
        console.log("createTable:output: "+output)
        return output;
    }

    findTotalAmount = (cartDetails) => {
        let totalAmount = 0;

        if(cartDetails.length > 0){
            cartDetails.map((cartDetail) => {
                console.log("findTotalAmount: ",cartDetail.quantity * cartDetail.price);
                console.log("findTotalAmount:totalAmount: ",totalAmount);
                totalAmount += cartDetail.quantity * cartDetail.price;
                return 0;
            });
        }

        return totalAmount;
    }

    render(){
        return(
            /*
            <div id="cartitems">
                <li  className="CartItems">Cart Item 1</li>
                <li  className="CartItems">Cart Item 1</li>
            </div>
            */
           <div>
               <h3>Cart Items are <span className="label label-primary">
               {this.props.cartDetails.length}
               </span></h3>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Cancel</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.createTable(this.props.cartDetails)}
                        <tr>
                            <th colSpan="3">Total Amount</th>
                            <td>{this.findTotalAmount(this.props.cartDetails    )}</td>
                        </tr>
                    </tbody>
                </table>
             </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removeFromCart}, dispatch);
}

/*
Following single function is divided into above two functions and bindActionCreators would be used with it
function mapDispatchToProps(dispatch){
    return {
        /
        removeFromCart: (cartItem) => {
                let cancelledItem = {
                    id:cartItem.id, name:cartItem.name, price: cartItem.price
                }
                dispatch({type: "REMOVE_TO_CART", payload: cancelledItem})
                /
        removeFromCart: (cartItem) => {
            dispatch({type: "REMOVE_TO_CART", payload: cartItem})
        }
    }
}
*/

function mapStateToProps(state){
    console.log("mapStateToProps:state: ",  state)
    return {
        cartDetails: state.cartReducer
    }
}

//This will return CartItems
export default connect(mapStateToProps,mapDispatchToProps)(CartItems);