import React, { Component } from "react";
import MySign from "./MySignComponent";
export default class SignIn extends Component {
 
    state = {loggedUSerName : "Guest"}
    handleSignin = (uname) => {
        this.setState({loggedUSerName : uname})
    }
    render() {

               return <div>
                <h1>Welcome {this.state.loggedUSerName}</h1>
                <MySign heading="Sign In" onSignIn={this.handleSignin}/>

        </div>

    }
}
    // We need to Use it in index.js --> export defalut
