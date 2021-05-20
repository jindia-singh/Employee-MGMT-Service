const express = require('express');
const route = require('./routes/basicRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();
const app = express();


app.use(bodyParser.json());
app.use(route);

mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.5wzgd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}).
then(()=>{
   
    app.listen(3002);
    console.log("connected");
}).catch((err)=>{
    console.log(err);
}
)