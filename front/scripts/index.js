const axios = require("axios")
const renderCards = require("./renderCards.js");
const submitForm = require("./submitForm.js");
const clearForm = require("./clearForm.js");
require("dotenv").config()





// Conexión con jquery

// document.addEventListener("DOMContentLoaded", () => {
//     $.get("https://students-api.up.railway.app/movies", (data) => {
//         renderCards(data)
//     })
// })






// Conexión con axios

// Forma con Promesas


const apiUrl = process.env.NODE_ENV === "production"
    ? process.env.API_URL_PROD
    : process.env.API_URL

const fetchMovies = () => {
    axios.get(apiUrl)
        // Succes handler
        .then((res) => {
            renderCards(res.data)
        })

        // Error handler
        .catch((err) => {
            alert("Las películas no fueron obtenidas correctamente")
            console.log(err)
        })
}

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("indexPage")) {
        fetchMovies()
    }


    if (document.getElementById("btnEnviar")) {
        document.getElementById("btnEnviar").addEventListener("click", submitForm)
    }

    if (document.getElementById("btnLimpiar")) {
        document.getElementById("btnLimpiar").addEventListener("click", clearForm)
        
    }
})









// Forma con async/await

// const apiUrl = "https://students-api.up.railway.app/movies"

// const fetchMovies = async () => {
//     try {
//         const res = await axios.get(apiUrl);
//         renderCards(res.data)
//     } catch (err) {
//         console.log(err);
//         alert("Las páliculas no fueron obtenidas correctamente")
//     }
// }

// fetchMovies()








