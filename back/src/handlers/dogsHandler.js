const { Router } = require("express")
const dogs = Router();
const { getAllDogs } = require("../controllers/dogsController");

const getDogsHandler = async (req, res) => {
    try {
        const name = req.query.name;
        let totalDogs = await getAllDogs();
        if(name) {
            let dogName = await totalDogs.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            dogName.length ? 
            res.status(200).send(dogName) :
            res.status(400).send("no tneemos información acerca de ese perro")
        } else {
            res.status(200).send(totalDogs)
        }
        
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

const getDogsByIdHandler = async (req, res) => {
    try {
        const id = req.params.id;
        const totalDogs = await getAllDogs();//Llamo a la API.
        if(id) {
            let dogId = await totalDogs.filter(el => el.id === id) // Filtro la API para buscar por el id que yo quiero.
            dogId.length ? // pregunto si existe.
            res.status(200).json(dogId) : // si existe, me manda el perro.
            res.status(404).send("No se encontró ese perro") // si no existe, me manda este error.
        };
    } catch (error) {
        console.log(error)
    }
}


module.exports = { getDogsHandler, getDogsByIdHandler,  }