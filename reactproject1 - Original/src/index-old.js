import React from "react";
import ReactDOM from "react-dom"


import Point, {Point3D} from "./module1"
//Create ab Element

//let element = React.createElement("u",null,"My first React Example");
let root= document.getElementById("root");
//Functioanlity to Implement - for display we use the REACTDOM
//ReactDOM.render(element,root);
ReactDOM.render(<div><h3>JSX Example</h3>,<p> <i> Ramya </i>  </p></div>,root);
ReactDOM.render(<div>{12 * 4}</div>,root);

console.log( "After Import From Index.js react");

//Define the class Point wiyh data

let P= new Point(10,15);
P.display();

//Inheritance

let P3= new Point3D(20,30,40);
P3.display();


//Create a Web Component

let Mytag1 =() => <h2>This is  webcomponent by Function</h2>
//let Mytag =() => <h1>This is  webcomponent by Function<Mytag1/></h1>
ReactDOM.render(Mytag1(),root);
