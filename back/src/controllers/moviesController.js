const moviesServices = require("../services/moviesServices");

const moviesController = async (req, res) => {
    try {
        const movies = await moviesServices.getMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createMovie = async (req, res) => {
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const newMovie = await moviesServices.createMovie({ title: title, year: year, director: director, duration: duration, genre: genre, rate: rate, poster: poster });
        res.status(201).json(newMovie)

        
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    moviesController,
    createMovie
};