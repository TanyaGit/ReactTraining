import React, { Component } from "react";


export default class MySign extends Component {

    state = {user : "Guest"}
/* one way of doing things
    handleTextChange = (event) => {
      console.log("In Handle Text Change");
      this.setState({
        user : event.target.value
     });
    }

    handleButtonClick = (event) => {
      console.log("In Button CLick, user:"+this.state.user);
      this.props.callbackf(this.state.user);
    }
*/

    sendData = (event) => {
      console.log("In Button CLick, user:"+this.refs.userid.value);
      this.props.onSignIn(this.refs.userid.value);
    }

    render() {
      console.log("While Rendering");
      /*}
      Following code will pop up an error as prop is immutable
        this.props.heading = "WF";
    */
      return (
            <div>
              <h1>{this.props.heading}</h1>
                <form>
                  {/* onChange={this.handleTextChange} */}
                  <input type="text" id="username" placeholder="User Name" ref="userid"/>
                  <br/>
                  <input type="text" id="password" placeholder="Password" ref="passwrd"/>
                  <br/>
                  {/*onClick={this.handleButtonClick}*/}
                  <button type="button" id={this.props.sign} className="btn btn-primary" onClick={this.sendData}
                   >{this.props.sign}</button>
                </form>
            </div>
      );
    }

    constructor(){
      super();
      console.log("My Sign constructor");
    }

    componentWillMount(){
      console.log("My Sign component will mount, heading: "+this.props.sign);
    }

    componentDidMount(){
      console.log("My Sign component did mount, heading: "+this.props.sign);
      document.querySelector("h1").style.color = 'red';
    }

    componentWillUnmount(){
      console.log("My Sign component will unmount, heading: "+this.props.sign);
    }

  }