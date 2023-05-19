const { Router } = require("express")
const prueba = Router();
const { getAllDogs } = require("../controllers/pruebasController");

const getPruebaHandler = async (req, res) => {
    try {
        const name = req.query.name;
        let totalDogs = await getAllDogs();
        if(name) {
            let dogName = await totalDogs.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            dogName.length ? 
            res.status(200).send(dogName) :
            res.status(400).send("no tneemos información dacerca de ese perro")
        } else {
            res.status(200).send(totalDogs)
        }
        
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}


module.exports = { getPruebaHandler,  }