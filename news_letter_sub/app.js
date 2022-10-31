const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const request = require("request")

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static("public"))
app.get("/", function (request, response){
    response.sendFile(__dirname+"/signup.html")
})

app.post("/", function (request, response){
    const username = request.body.name
    const email = request.body.email
    const pwd = request.body.password

    console.log(username)
    console.log(email)
    console.log(pwd)
})

app.listen(3000)