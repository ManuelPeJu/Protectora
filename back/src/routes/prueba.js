const { Router } = require("express");

const pruebaRouter = Router();

const {
    getPruebaHandler,
} = require("../handlers/pruebaHandler")


pruebaRouter.get("/", getPruebaHandler)

module.exports = pruebaRouter;