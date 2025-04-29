const { Router } = require("express");
const moviesRouter = require("./moviesRouter");

const router = Router();

router.get("/", (req, res) => res.send("Hello World!"));
router.use("/movies", moviesRouter);

module.exports = router;