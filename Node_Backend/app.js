const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fs = require('fs')

const appConfig = require('./config/appConfig')
const logger = require('./libs/loggerLib')
const notFound = require('./middleware/notFound')
const routeLogger = require('./middleware/routerLogger')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//CORS middleware
app.use(routeLogger.logIp);


app.get('/',function(req,res){
    res.send('hello world');
    console.log('hello world');
})

//bootstrap routes files

let route = require('./routers/productRoute')
route(app)

app.use(notFound.notFound);


//bootstrap models files 



app.listen(appConfig.port,function(){
    console.log(`app listen at port ${appConfig.port}`)
    let db = mongoose.connect(appConfig.db.uri,()=>{
        console.log('mongoDB connected successfully')
    })

});


mongoose.connection.on('error',function(err){
    if(err){
        console.log('database connection error')
        console.log(err)
    }
})

mongoose.connection.on('open',function(err){
    if(err){
        console.log('some error occured in database connection')
        console.log(err)
    }else{
        console.log('mongodb connected successfully')
    }
})




























