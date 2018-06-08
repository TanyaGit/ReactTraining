import React, { Component } from "react";
import MySign from "./MySign";

export default class SignUp extends Component {
    
    state = {SignedUpUser : "Guest"}

    signup = (userdetails) => {
        this.setState({SignedUpUser : userdetails});
    }
    
    render() {
        let output = null;
        if(this.state.SignedUpUser === "Guest"){
            output = <h1>Hi {this.state.SignedUpUser}.</h1>;
        }
        else{
            output = <h1>Hi {this.state.SignedUpUser}, you have successfully signed up.</h1>;
        }
      return (
            <div>
                {output}
                <MySign sign="SignUp" heading="Quick Sign Up" onSignIn={this.signup}/>
            </div>
      );
    }
  }