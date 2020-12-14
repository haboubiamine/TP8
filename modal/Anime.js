const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Animeschema = Schema({
    nom: String,
    Genre : String,
    Nationalite : String,
    Nombre_de_saison : Number,
    Premier_épisode : String,
    episode_final : String,
    Saison : [
    { num : Number,
    nbr_episode :  Number,
    date_sortie : String,
    personnages : []
    }]
})


module.exports = mongoose.model('Anime',Animeschema)