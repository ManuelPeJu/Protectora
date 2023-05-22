const { Router } = require("express");

const dogsRouter = Router();

const {
    getDogsHandler,
    getDogsByIdHandler,
} = require("../handlers/dogsHandler")


dogsRouter.get("/", getDogsHandler)
dogsRouter.get("/:id", getDogsByIdHandler )


module.exports = dogsRouter;