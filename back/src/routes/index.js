const { Router } = require("express");
const dogsRouter = require("./dogs")
const tempsRouter = require("./temperaments")

//Aca tienen que poner los require de las cargas que hacen

const mainRouter = Router();


mainRouter.use("/dogs", dogsRouter);
mainRouter.use("/temperaments", tempsRouter);




module.exports = mainRouter;
