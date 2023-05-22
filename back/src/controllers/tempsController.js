const { Temperament} = require("../db")
const { op } = require("sequelize")
const { API_KEY } = process.env
const axios = require("axios")

const getAllTemps = async () => {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);// conecto a la api
    const apiinfo = await apiUrl.data;// accedo a los datos de la api.
    const temperaments = apiinfo.map(el => el.temperament).join().split(",").sort();// mapeo la api para conseguir lo que quiero.
    await temperaments.filter((t, i) => temperaments.indexOf(t)=== i).forEach(t => 
        t.trim() !== "" && Temperament.findOrCreate({
            where : {
                name: t.trim(),
            },
        })
    );// filtro la api para conseguir lo que quiero segun el indice que busque y luego lo creo en mi base de datos si no está.
    
    const allTemperaments = await Temperament.findAll({ order : [["name"]]});// busco en mi filtro por nombre.
    return allTemperaments;// retorno una vez consigo lo que quiero.
};

module.exports = {getAllTemps, }