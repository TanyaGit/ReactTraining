import React, { Component } from "react";
import {Route,Link,Switch} from "react-router-dom";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import ManageProducts from "./shopping/ManageProducts";
import {NotFound} from "./routecomponents";
import {Home} from "./Home"

export default class App extends Component {

    state = {appHeading: "My Shopping App"}

    render() {
      return (
            <div>
                {/*}
                <nav className="navbar navbar-inverse">
                    <a href="" className="navbar-brand">{this.state.appHeading}</a>
                </nav>
                */}
                <nav className="navbar navbar-inverse">
                    <Link className="navbar-brand" to="/">{this.state.appHeading}</Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Quick Sign Up</Link></li>
                        <li><Link to="/manage">Manage</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact render={ () => <h1>Welcome Home :)</h1>} />
                    <Route path="/home" component={Home} />    
                    <Route path="/signin" component={SignIn} />    
                    <Route path="/signup" component={SignUp} /> \
                    <Route path="/manage" component={ManageProducts} /> \
                    <Route path="*" component={NotFound} />
                </Switch>
                {/*
                <SignIn />
                <hr/>
                <SignUp />
                */}
            </div>
      );
    }
  }
  