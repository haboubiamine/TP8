const express = require('express')
const Router = express.Router()
const Anime = require('../modal/Anime')




// Get all anime
Router.get('/', async (req,res)=>{
    const ALLAnime = await  Anime.find({})
    res.send(ALLAnime)
})

// Get one anime by ID
Router.get('/:id', async (req,res)=>{
    const oneAnime = await  Anime.findOne({_id : req.params.id})
    res.send(oneAnime)
})

// Get one anime by personnage
Router.get('/personnage/:nom', async (req,res)=>{
    const oneAnime = await  Anime.findOne({ "Saison.personnages" :  { "$in" : [req.params.nom]} })
    res.send(oneAnime)
})

// add Anime
Router.post('/new', async(req,res)=>{
    const anime = new Anime({
        nom: req.body.nom,
        Genre :  req.body.Genre,
        Nationalite :  req.body.Nationalite,
        Nombre_de_saison :  req.body.Nombre_de_saison,
        Premier_episode : req.body.Premier_episode,
        episode_final :  req.body.episode_final,
        Saison :  req.body.Saison
    })
    const savedAnime = await anime.save()
    res.send(savedAnime)
 })

//Modify Anime nationalite
Router.put('/:id', async(req,res)=>{
    await  Anime.findOneAndUpdate({_id : req.params.id},{Nationalite : req.body.Nationalite})
    const updatedAnime = await  Anime.findOne({_id : req.params.id})
    res.send(updatedAnime)
})


//delete Anime by ID
Router.delete('/:id', async(req,res)=>{
    const deletedID = await  Anime.findOneAndDelete({_id : req.params.id})
    res.send(deletedID.nom +" deleted")
})




module.exports = Router;