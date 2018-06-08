import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import axios from "axios";

import {addProduct,deleteProduct,updateProduct,getProducts} from "../../actions/ProductActions";


class ManageProducts extends Component {

    constructor(){
        super()
        this.apiUrl="http://localhost:4000/wsproducts"

    }
        
    createTable = (product) => {
        let output = null;
        console.log("createTable:product: ", product)
        if(product.length > 0){
            output = product.map((product) => {
                return (<tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <button onClick={ () => this.handleDelete(product._id) } className="btn btn-danger">Delete</button>
                    
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
    componentDidMount(){
        axios.get(this.apiUrl).then((response)=>{
            console.log("Get Response", response.data)
            this.props.getProducts(response.data);
        },(err) =>{
            console.log("get Error", err)
        }

    
    )
    }
    handleAdd =() =>{

        let newproduct ={
                         name:this.refs.pname.value,   
                         price:this.refs.price.value}
                         //this.props.addProduct(newproduct)
                         axios.post(this.apiUrl,newproduct).then(
                        (response) => {
                            this.props.addProduct(response.data)
                         }, (err) =>{
                            console.log("Error Logged");
                         })

    }
    
    handleDelete =(id) =>{

         //this.props.deleteProduct(id)
         axios.delete(this.apiUrl+"/"+id).then((response) => {
             this.props.deleteProduct(id)
         }, (err) =>{
            console.log("Error Logged");
         })

    }
    handleUpdate =() =>{
        let modifiedProduct ={_id: this.refs.pid.value,
            name:this.refs.pname.value,   
            price:this.refs.price.value}
            axios.put(this.apiUrl+"/"+modifiedProduct._id,modifiedProduct).then((response)=>{
                this.props.updateProduct(modifiedProduct)  
            },(err) =>{
                console.log("update Error");
            })
            
    }
    editProduct =(product) =>{
        this.refs.pid.value=product._id;
        this.refs.pname.value=product.name;
        this.refs.price.value=product.price;

    }

    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addProduct,deleteProduct,updateProduct,getProducts}, dispatch);
}

/*npm
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