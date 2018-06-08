for (var i=0;i<=5;i++){
    
    console.log(i)
    }
console.log(i)

for (let j=0;j<=5;j++){
    console.log(j)
    }
//console.log(j)
const g =143118;
console.log(g)
//console.log(g++)

//ANONYMOUS FUNCTION
let M= function(){
    return "WellsFargo"
}
console.log(M)
console.log(M())
//ARROW FUNCTION

N=() => "HYDERABAD"
console.log(N)
console.log(N())

x=(msg) => msg // argument to Function and returning from Function
console.log(x("Hello"));
console.log(x("Ture"));

//Function returning a function
function Z() {
    console.log("From Function Z");
    function b(){
        console.log("From Function b");
    }
return b;
}

let s=Z();
console.log(s);
console.log(s());

function change(){
    let value=document.getElementById("h");
    let replyvalue=value.getAttribute("reply");
    value.innerHTML=replyvalue;
}