const { Dogs } = require("../db")
const { op } = require("sequelize")
const { API_KEY } = process.env
const axios = require("axios")

const getAllDogs = async () => {
    const apiGet = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const apiInfo = await apiGet.data.map(el => {
        return {
            id: el.id,
            name: el.name,
            height: el.height.metric,
            weight: el.weight.metric,
            life_span: el.life_span,
            image: el.image.url,
            temperament: el.temperament,
        }
    })

    return apiInfo
}


module.exports = { getAllDogs, }