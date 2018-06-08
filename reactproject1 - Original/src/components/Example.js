//Component Mmber is a named Export
import React, { Component } from "react";
import PropTypes from "prop-types"

class Friends extends Component {
    //Shd override the Render Method
    //Definingthe state component
    state = { Compheading: "Values" }
    render() {
       // console.log(this.props.name)
       let output = null
       if (this.props.name !==undefined) {
           output=this.props.name.map( (e,i) => {
               return <li key={i}>{e}</li>
           } )
       }
       else{
           output= []
       }
        return <div>
            <h1> Welcome to React friend Component {this.state.Compheading}</h1>
            <ul>{
                output
            }

            </ul>
        </div>
    }
}

// We need to Use it in index.js --> export defalut
export default Friends;

export class AddFriend extends Component {

    state ={ newFriend : "Dummy"}
    handleOnChange = (event) =>{
        console.log("Function onchange called for the Textbox")
        this.setState ({newFriend:event.target.value})
        //this.state.newFriend=event.target.value;
    }
    buttonClick = () => {
       // console.log("Button is clicked")
       //Assign the Property to State
       this.props.addNew(this.state.newFriend)
    }
    render(){
        return(
            <div>  Enter Friend Name:
                <input type = "text" 
                       value={this.state.newFriend}
                       onChange={this.handleOnChange}
                       >
                       </input>
                <button type = "submit" onClick={this.buttonClick}> Submit</button>
             </div>
        
        )
    }
}
//Add peroperty types to Addfriend - 
//The peroperty is addNew - add New is Function type & is marked as required
AddFriend.propTypes = {
    addNew: PropTypes.func.isRequired
}
Friends.defaultProps = {
    name:["F1","F2"]
}