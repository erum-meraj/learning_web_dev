const { response } = require('express')
const express = require('express')
const app = express()

app.get("/", function (request, response)
{ //console.log(request);
    response.send("hello")
})

app.get("/login", function (request, response){
    response.send("<h1>Login</h1> <br> <h1>username</h1>")
})

app.get("/about", function(request, response){
    response.send("<h1>About me :) </h1> <h3>page owned by: Erum</h3>");
})

app.listen(3000, sayHello);

function sayHello() {
    console.log("hello world")
}