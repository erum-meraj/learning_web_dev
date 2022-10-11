const express = require("express")
const app = express()
const bodyParser = require("body-parser")
//const { request } = require("express")

app.use(bodyParser.urlencoded({extended: true}))
app.get("/", function (request, response){
    //response.send("hello world")
    response.sendFile(__dirname + '/index.html')
})

app.post("/" ,function (request, response){
    //console.log(request.body)
    //
    var op = request.body.submit
    switch (op) {
        case 'add':
            response.send("sum = "+ add(request.body.num1, request.body.num2))
            break;
        case 'sub':
            response.send("diff = "+ sub(request.body.num1, request.body.num2))
            break;
        case 'mul':
            response.send("prod = "+ mul(request.body.num1, request.body.num2))
            break;
        case 'div':
            response.send("quot = "+ div(request.body.num1, request.body.num2))
            break;
                
        default:
            break;
    }
})


//calculationss
function add(n1, n2){
    return Number(n1)+Number(n2)
}
function sub(n1, n2){
    return Number(n1)-Number(n2)
}
function mul(n1, n2){
    return Number(n1)*Number(n2)
}
function div(n1, n2){
    return Number(n1)/Number(n2)
}


app.listen("3000")