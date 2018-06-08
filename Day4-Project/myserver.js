let http = require("http");
let server = http.createServer((request,response) =>{
    //response.end("Welcome to Node Server");
    //Check the Incoming Request URL
    if(request.url == "/"){
        //specify the response Headers
        response.writeHead(200,{"Content-Type":'text/html'})
        //send html conent
        response.write("<html><body><h2>Welcome Home</h2></body> </html>")
        response.end();
    }
    else if(request.url == "/admin"){
        //specify the response Headers
        response.writeHead(200,{"Content-Type":'text/html'})
        //send html conent
        response.write("<html><body><h2>Welcome Home Admin</h2></body> </html>")
        response.end();
    }
    else if (request.url == "/data"){
        //specify the response Headers
        response.writeHead(200,{"Content-Type":'application/json'})
        //send html conent
        response.write(JSON.stringify({"message":"Wellsfargo"}))
        response.end();
    }
    else{
        response.writeHead(200,{"Content-Type":'text/html'})
        //send html conent
        response.write("<html><body><h2>Invalid URL</h2></body> </html>")
        response.end();
    }
})

server.listen(9004,"localhost", () =>{
    console.log("From Server");
})
