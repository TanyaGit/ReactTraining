import React, { Component } from "react";

export default class MySignComponent extends Component {
  
    render() {

        //this.props.heading="WF";
        console.log("While Rendering");
        return <div>
                <h3>{this.props.heading} </h3>
                <form>
                    <input type="text" placeholder = "UserName" ref="userid"/>
                    <br/>
                    <input type="password" placeholder = "password" ref="pwd"/>
                    <br/>
                    <button type= "button"className="btn btn-primary"
                            onClick={this.sendData}>{this.props.heading}</button>
                    <br/>

                </form>
        </div>

    }

    sendData = () =>{
        console.log("Send Data Function called");
        console.log(this.refs.userid.value);
        this.props.onSignIn(this.refs.userid.value)
    }

    constructor(){
        super();
        console.log("MySign-Constructor");
    }
    componentWillMount(){
        console.log("MySign-componentWillMount ::"+this.props.heading);
        
    }
    componentDidMount(){
        console.log("MySign-componentDidMount ::" +this.props.heading);
        document.querySelector("h3").style.color="red";
    }
    componentWillUnmount(){
        console.log("MySign-componentWillUnmount");
    }
}