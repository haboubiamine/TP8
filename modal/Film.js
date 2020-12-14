const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Filmschema = Schema({
    nom: String,
    realisateur : String,
    pays : String,
    duree : String,
    acteurs :[] 
})


module.exports = mongoose.model('Film',Filmschema)