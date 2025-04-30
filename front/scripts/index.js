const axios = require("axios")
const renderCards = require("./renderCards.js");
const submitForm = require("./submitForm.js");
const clearForm = require("./clearForm.js");







// Conexión con jquery

// document.addEventListener("DOMContentLoaded", () => {
//     $.get("https://students-api.up.railway.app/movies", (data) => {
//         renderCards(data)
//     })
// })






// Conexión con axios

// Forma con Promesas


const apiUrl = window.location.hostname === "localhost"
    ? "http://localhost:3000/movies"
    : "https://pm2-alejandro-mcejas.onrender.com/movies"

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








