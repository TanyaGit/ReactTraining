import React, { Component } from "react";
import ProductList from "./shopping/ProductList";
import CartItems from "./shopping/CartItems";

export  class Home extends Component {

    render() {

        return <div><div className="col-sm-6">
            <ProductList />
        </div>
            <div className="col-sm-6">
                <CartItems />
            </div>
        </div>
    }

}