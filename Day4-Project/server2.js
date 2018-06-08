let express =require('express')
let bodyparser = require('body-parser')
//Will internally create a server whenever we call the express() function
let app = express()
let products = require('./data')
app.use(bodyparser.json())

app.get("/api/wsproducts",(request,response) =>{
//response.send("Helloe")
//response.send("My Products Wbservice")
response.json(products);
})

app.get("/api/wsproducts/:id",(request,response) =>{
    let requestid= request.params.id;
    
    let product = products.filter(product => product.id == requestid)
     //console.log(product)
//response.send("Helloe")
//response.send("My Products Wbservice")
if(product.length ==0) {
    response.json("Product "+ requestid + " Not found")
}
response.json(product);
})

app.post("/api/wsproducts",(request,response) =>{

    let newproduct ={
     
        "id":products.length+1,
        "name":request.body.name,
        "price":request.body.price,
        "description":request.body.description
    }
    products.push(newproduct)
    response.json(newproduct)
})
app.delete("/api/wsproducts/:id",(request,response) =>{

    let pid= request.params.id
    //use Splice function - needs Index
    let idx = products.findIndex((e) => e.id == pid)
    products.splice(idx,1)
    response.json("Message" +pid + "Deleted")
})
//Update
app.put("/api/wsproducts/:id",(request,response) =>{

    let pid= request.params.id
    //use Splice function - needs Index
    let idx = products.findIndex((e) => e.id == pid)
    let modifiedpdt ={
        "id":pid,
        "name" :request.body.name,
        "price": request.body.price
    }
    products[idx]=modifiedpdt
    //products.push(newproduct)
    response.json(modifiedpdt)
})
app.listen(9005, () =>{
    console.log ("from Express webserver in 9005");
})