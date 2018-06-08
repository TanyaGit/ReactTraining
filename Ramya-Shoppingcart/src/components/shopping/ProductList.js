import React, { Component } from "react";
import { connect } from "react-redux";
class ProductList extends Component {

    render() {
        console.log(this.props.products);
        let output = null;
        if (this.props.products.length > 0) {
            output = this.props.products.map((product) => {
                return <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.name}</td>
                    <td><button onClick={ () => this.props.addToCart(product) } className="btn btn-primary" >Add to Cart</button></td>
                </tr>
            })
        }

        else {
            output = <tr><td colSpan="3"> No Products </td></tr>
        }
        return (<div>

            <h3>List  of Products</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {output}
                </tbody>
            </table>

        </div>)
    }

}
function mapStateToProps(state) {
    console.log("MAP STATE TO PROPS");
    return { products: state.productsReducer }
    //property - Products
    //vvalue - state
}


function mapDispatchToProps(dispatch) {
    console.log("MAP STATE TO PROPS");
    return {
    addToCart : (products) => {
        let orderedProduct = {id:products.id, name:products.name,price:products.price, qty:2}

        dispatch({type:"ADD_TO_CART", payload: orderedProduct})
    }
    
    //property - Products
    //vvalue - state
}
}

// The Function will return the Component ProductList as a object
//export default connect(ProductList) -- CHANGED AS BELOW
export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
//ProductList is now a props this.props.products