const axios = require("axios");

const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const genre = document.getElementById("genre");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");

const apiUrl = "http://localhost:3000/movies"


const submitForm = async (event) => {
    event.preventDefault();

    if (!(title.value && year.value && director.value && duration.value && genre.value && rate.value && poster.value)) {
        alert("Todos los campos son obligatorios");
        return;
    }
    else {
        alert("Los campos estaban completos");
    }


    if (year.value.length !== 4) {
        alert("El año ingresado debe tener 4 caracteres");
        return;
    }

    if (rate.value < 0 || rate.value > 10) {
        alert("El valor de la calificación debe estar entre 0 y 10");
        return;
    }

    if (!(poster.value.includes("https://") || poster.value.includes("http://"))) {
        alert("La URL de la imagen no es válida");
        return;
    }

    if (!(poster.value.includes(".jpg") || poster.value.includes(".png") || poster.value.includes(".jpeg"))) {
        alert("La URL no es de una imagen");
        return;
    }


    try {
        const res = await axios.post(apiUrl, {
            title: title.value,
            year: year.value,
            director: director.value,
            duration: duration.value,
            genre: genre.value.split(","),
            rate: rate.value,
            poster: poster.value
        })

        alert("La película fue agregada correctamente")
    }
    catch (error) {
        alert("La pelicula no fue agregada correctamente")
        console.log(error)
    }


}


module.exports = submitForm;

