const { Router } = require("express")
const temps = Router();
const { getAllTemps } = require("../controllers/tempsController");


const getTempsHandler = async (req, res) => {
    try {
        try {
            const dbTemperaments = await getAllTemps() // llamo a la busqueda de la API específica para temperament
            res.status(200).send(dbTemperaments)// me manda los temperamentos.
        } catch (error) {
            res.status(404).send({error: error.message});// me manda un error si algo falla.
        };
    } catch (error) {
        
    }
};

module.exports = {getTempsHandler, }