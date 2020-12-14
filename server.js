const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Router = express.Router()
const Dotenv = require('dotenv')
const Filmroute = require('./Route/Film')
const Animeroute = require('./Route/Anime')
Dotenv.config()


// DB Config
mongoose.connect(process.env.DB, {useNewUrlParser: true , useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log("we're connected!");
    });

    app.use(express.json());
    app.use(express.urlencoded({extended: false}))
    
  app.use('/Film', Filmroute)
  app.use('/Anime', Animeroute)


app.listen(process.env.port , ()=>{console.log(`localhost:${process.env.port}`)})