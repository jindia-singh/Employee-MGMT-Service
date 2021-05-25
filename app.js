const express = require('express');
const route = require('./routes/basicRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
const cors = require("cors")
class Server {
    constructor(port, app, dotenv) {
        this.port = port;
        this.app = app;
        this.dotenv = dotenv;
        this.dotenv.config();
        this.app.use(cors())
        this.app.use(bodyParser.json());
        // this.app.use((req,res,next)=>{
        //         res.setHeader('Access-Control-Allow-Origin','*')
        //         res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
        //         res.setHeader('Access-Control-Allow-Methods','*')
        //         next();
        //     })
            this.app.use(route);
    }
    
    getConnection() {
        mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.5wzgd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }).
            then(() => {
                this.app.listen(this.port);
                console.log("connected");
            }).catch((err) => {
                console.log(err);
            }
            )
    }

}
let server = new Server(3002, express(), dotenv);
server.getConnection();