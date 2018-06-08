import React, { Component } from "react";
import CartItems from "./shopping/CartItems";
import ProductsList from "./shopping/ProductsList";

export class Home extends Component {
    render(){
        return(
            <div>
                <div className="col-sm-6">
                    <h3>List Of Products</h3>
                </div>
                <div className="col-sm-6">
                    <h3>Cart Items</h3>
                </div>

                <div className="col-sm-6">
                    <ProductsList />
                </div>
                <div className="col-sm-6">
                    <CartItems />
                </div>
        {/*
                <ul id="ul1">
                    <ProductsList />
                    <CartItems />
                </ul>
        */}
            </div>
        );
    }
/*
Un comment this code and the one in CartItems, ProductLists to see the float left property
    componentDidMount(){
        document.getElementById("ul1").style.listStyleType = 'none';
        document.getElementById("products").style.cssFloat ="left";
        document.getElementById("cartitems").style.cssFloat ="left";
    }
*/
}