var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')

app.use(bodyParser.urlencoded({extended: true }))

app.get("/bmical", function (request, response){
    response.sendFile(__dirname+'/BMI.html')
})

app.post('/bmical', function (request, response){
    var ht = Number(request.body.height)
    var wt = Number(request.body.weight)
    var bmi = wt/Math.pow(ht, 2) 
    response.send('BMI index = '+ bmi)
})




app.listen(3000)