const express = require('express')
const Router = express.Router()
const Film = require('../modal/Film')




// Get all films
Router.get('/', async (req,res)=>{
    const ALLFilms = await  Film.find({})
    res.send(ALLFilms)
})


// Get one film by ID
Router.get('/:id', async (req,res)=>{
    const oneFilm = await  Film.findOne({_id : req.params.id})
    res.send(oneFilm)
})


// Get one film dont le nom contient « de »
Router.get('/contient/de', async (req,res)=>{
    try {
        const oneFilm = await Film.find({ nom: { $regex: "de" } })
        res.send(oneFilm)
    } catch (error) {
        res.send(error)
    }
    
    
})

// Get one film dont le nom commence « la »
Router.get('/commence/la', async (req,res)=>{
    try {
        const oneFilm = await Film.find({ nom: { $regex: "^La"  } })
        res.send(oneFilm)
    } catch (error) {
        res.send(error)
    }
    
    
})

// add film
Router.post('/new', async(req,res)=>{
    const film = new Film({
     nom: req.body.nom,
     realisateur: req.body.realisateur,
     pays: req.body.pays,
     duree : req.body.duree,
     acteurs: req.body.acteurs
    })
    const savedfilm = await film.save()
    res.send(savedfilm)
 })

//delete film by ID
Router.delete('/:id', async(req,res)=>{
    const deletedID = await  Film.findOneAndDelete({_id : req.params.id})
    res.send(deletedID.nom +" deleted")
})

//delete film by nom
Router.delete('/nom/:nom', async(req,res)=>{
    const deletedID = await  Film.findOneAndDelete({nom : req.params.nom})
    res.send(deletedID.nom +" deleted")
})





module.exports = Router;