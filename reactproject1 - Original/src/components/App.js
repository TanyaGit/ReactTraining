//Component Mmber is a named Export
import React,{Component} from "react";
import Friends,{AddFriend} from "./Example";

class App extends Component{
//Shd override the Render Method
//Definingthe state component
state= {Compheading : "Values",
        friendsdata1: [ "John", "Sumitha", "Kumaran" ] 
    
    }
    addNewFriend = (friendname) =>{
        console.log("New Function addNewFriend" +friendname);
        this.setState({friendsdata1: [...this.state.friendsdata1,friendname]})
    }
    render(){

        return <div> 
        <Friends/>      
        <Friends name={this.state.friendsdata1}/>        
        <AddFriend addNew ={this.addNewFriend }/>
        {<h1> Welcome{this.state.Compheading}</h1>}
        {/*<h1> Welcome{this.state.Compheading}</h1>*/}
        </div>

    }    
}
// We need to Use it in index.js --> export defalut
export default App;