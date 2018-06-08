import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addToCart} from "../actions/productActions"

class ProductsList extends Component {

     
    createTable = (product) => {
        let output = null;
        console.log("createTable:product: ", product)
        if(product.length > 0){
            output = product.map((product) => {
                return (<tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <button onClick={ () => this.props.addToCart(product) } className="btn btn-primary">Add TO Cart</button>
                    </td>
                </tr>);
            });
        }else {
            output = <tr><td colSpan="3">No Products found</td></tr>
        }
        console.log("createTable:output: "+output)
        return output;
    }

    render(){
        console.log("render:products: ",this.props.products );
        return(
            /*
            <div id="products">
                <li className="ProductsList">Product List 1</li>
                <li className="ProductsList">Product List 1</li>
            </div>
            */
             <table className="table table-bordered">
                 <thead>
                 <tr>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Action</th>
                 </tr>
                 
                 {/*}
                 <tr>
                     <td>Garnier Fructics</td>
                     <td>1000</td>
                     <td>Add to Cart</td>
        </tr>*/}
                 </thead>
                 <tbody>{this.createTable(this.props.products)}</tbody>
             </table>
        );
    }
}

function mapStateToProps(state){
    console.log("mapStateToProps:state: ",  state)
    return {
        products: state.productRedcucer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToCart}, dispatch);
    }

/*
Following single function is divided into above two functions and bindActionCreators would be used with it
function mapDispatchToProps(dispatch){
    return {
            addToCart: (product) => {
                let orderedItem = {
                    id:product.id, name:product.name, price:product.price, quantity:2
                }
                dispatch({type: "ADD_TO_CART", payload: orderedItem})
        }
    }
}
*/
//This will return ProductsList
export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);