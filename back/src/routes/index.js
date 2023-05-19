const { Router } = require("express");
const pruebaRouter = require("./prueba")


//Aca tienen que poner los require de las cargas que hacen

const mainRouter = Router();


mainRouter.use("/prueba", pruebaRouter);




module.exports = mainRouter;
