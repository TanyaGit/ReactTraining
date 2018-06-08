import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {addProduct,deleteProduct,updateProduct} from "../../actions/ProductActions";


class ManageProducts extends Component {

        
    createTable = (product) => {
        let output = null;
        console.log("createTable:product: ", product)
        if(product.length > 0){
            output = product.map((product) => {
                return (<tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <button onClick={ () => this.handleDelete(product.id) } className="btn btn-danger">Delete</button>
                    
                        <button onClick={ () => this.editProduct(product) } className="btn btn-success">Edit</button>
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
           <div>
           <form className="well">
           <input type ="text" ref="pid" placeholder="Product Id"/>
           <input type ="text" ref="pname" placeholder="Product Name"/>
           <input type ="text" ref="price" placeholder="Product Price"/>
           <button type="button" className ="btn btn-primary" onClick={this.handleAdd}>Add</button>
           <button type="button" className ="btn btn-info" onClick={this.handleUpdate}>Update</button>
           </form>

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
                 <tbody>{this.createTable(this.props.managedProducts)}</tbody>
             </table>
             </div>
        );
    }
    handleAdd =() =>{

        let newproduct ={id: this.refs.pid.value,
                         name:this.refs.pname.value,   
                         price:this.refs.price.value}
                         this.props.addProduct(newproduct)

    }
    
    handleDelete =(id) =>{

         this.props.deleteProduct(id)

    }
    handleUpdate =() =>{
        let modifiedProduct ={id: this.refs.pid.value,
            name:this.refs.pname.value,   
            price:this.refs.price.value}
            this.props.updateProduct(modifiedProduct)  
    }
    editProduct =(product) =>{
        this.refs.pid.value=product.id;
        this.refs.pname.value=product.name;
        this.refs.price.value=product.price;

    }

    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addProduct,deleteProduct,updateProduct}, dispatch);
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
        managedProducts: state.productRedcucer
    }
}

//This will return CartItems
export default connect(mapStateToProps,mapDispatchToProps)(ManageProducts);