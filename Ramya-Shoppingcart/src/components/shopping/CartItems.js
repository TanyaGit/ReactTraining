import React, { Component } from "react";
import { connect } from "react-redux";

 class CartItems extends Component {

    getTotalAmount = () => {
        let totalAmount = 0;

        this.props.cartItems.map((cartItem)=>{
            totalAmount += cartItem.price * cartItem.qty;
            return totalAmount;
        })

        return totalAmount;
    }

    render() {

        let output=null;
        if(this.props.cartItems.length >0){
            output = this.props.cartItems.map((item) => {

                return <tr key={item.id}>
                <td ><button onClick={() => this.props.removeFromCart(item)} className="btn btn-danger">X</button>{item.name}</td>
                <td >{item.price}</td>
                <td >{item.qty}</td>
                <td >{item.price*item.qty}</td>
                </tr>
            })
        }
        else{
            output = <tr><td colSpan="3"> No Items Found </td></tr>
        }

        return (<div >

            <h3>CartItems Listed Here</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>

                    </tr>
                </thead>
                <tbody>
                    {output}
                    <tr>
                        <th colSpan="3">Total Amount</th>
                        <td>{this.getTotalAmount()}</td>
                    </tr>

                </tbody>
            </table>

        </div>)
    }

}

function mapDispatchToProps(dispatch) {
    console.log("MAP STATE TO PROPS");
    return {
    removeFromCart : (cartItems) => {

        dispatch({type:"REMOVE_FROM_CART", payload: cartItems})
    }
}
}
function mapStateToProps(state) {
    console.log("MAP STATE TO PROPS");
    return { cartItems: state.cartReducer }
    //property - Products
    //vvalue - state
}

export default connect(mapStateToProps,mapDispatchToProps)(CartItems)