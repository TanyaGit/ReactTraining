import React, { Component } from "react";
import SignIn from "./login/SignIn";
import SignUp from "./login/SignUp";
import {Route} from "react-router-dom";
import {Link,Switch} from "react-router-dom";
import {NotFound} from "./routeComponent";
import {Home} from "./Home";

export default class App extends Component {
    state = { appheading: " My Shopping App" }
    render() {

        return <div>
            <nav className="navbar navbar-inverse">
                <Link to="/" className="navbar-brand" >{this.state.appheading} </Link>
                <ul className= "nav navbar-nav">
                <li> <Link to= "/">Home</Link></li>
                <li> <Link to= "/signin">SignIn</Link></li>
                <li> <Link to= "/signup">SignUp</Link></li>
                </ul>
            </nav>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="*" component={NotFound} />
            </Switch>
        </div>

    }
}
    // We need to Use it in index.js --> export defalut
