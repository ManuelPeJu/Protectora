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
            min_height: el.height.metric.split("-")[0].trim(),
            max_height: el.height.metric.split("-").reverse()[0].trim(),
            min_weight: el.weight.metric.split("-")[0].trim(),
            max_weight: el.weight.metric.split("-").reverse()[0].trim(),
            life_span: el.life_span,
            image: el.image.url,
            temperament: el.temperament,
        }
    })

    return apiInfo
}


module.exports = { getAllDogs, }