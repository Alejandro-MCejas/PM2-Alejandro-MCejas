const { Router } = require("express");
const { moviesController, createMovie} = require("../controllers/moviesController")

const moviesRouter = Router();

moviesRouter.get("/", moviesController);
moviesRouter.post("/", createMovie);


module.exports = moviesRouter;