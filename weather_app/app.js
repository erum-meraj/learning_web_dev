const express = require('express')
const app = express()
const https = require("node:https")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (request, response){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&units=metric&appid=b1d5f70b111bc79129ae64927af193de'
    https.get(url, function (res){
        //console.log(res.statusCode);
        res.on('data', function (data){
            const weatherData = JSON.parse(data)
            //console.log(weatherData.weather[0].description)
            const tempPlace = weatherData.main.temp
            const desc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const img_url = 
            response.write('<h1>Temperature: '+ tempPlace+'</h1>')
            response.write('<h1>Description: '+ desc+'</h1>')
            response.write('<h1>icon: '+ icon+'</h1>')
            response.send()


        })
    })
    //response.sendFile(__dirname+"/index.html")
})

/*
app.post("/", function (request, response){
    var place = request.body.place
    //console.log(request.body)
    
    var newURL = 'https://api.openweathermap.org/data/2.5/weather?q='+place+'&units=metric&appid=b1d5f70b111bc79129ae64927af193de'

    https.get(newURL, function (res){
        res.on('data', function (data){
            
            console.log(tempPlace, desc, place)
        })
    })
    
})

*/

app.listen(3000)