var express = require("express");
var app = express();
var port = 3001;
require('./app_api/models/db');
var productRouter = require('./app_api/routes/products');


app.use('/api',productRouter);


app.listen(port,() =>{
        console.log(`listening to port ${port}`)
})

module.exports = app;