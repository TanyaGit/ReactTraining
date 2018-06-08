import React, { Component } from "react";
import MySign from "./MySign";

export default class SignIn extends Component {
    state = {loggedUserName : "Guest"}

    signin = (userdetails) => {
        this.setState({loggedUserName : userdetails});
    }

    render() {
      return (
            <div>
                <h1>Hi {this.state.loggedUserName}...!</h1>
                <MySign sign="SignIn" heading="Sign In" onSignIn={this.signin}/>
            </div>
      );
    }
  }