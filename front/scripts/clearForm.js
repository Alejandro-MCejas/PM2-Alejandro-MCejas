

const clearForm = (event) => {

    const title = document.getElementById("title");
    const year = document.getElementById("year");
    const director = document.getElementById("director");
    const duration = document.getElementById("duration");
    const genre = document.getElementById("genre");
    const rate = document.getElementById("rate");
    const poster = document.getElementById("poster");
    
    title.value = "";
    year.value = "";
    director.value = "";
    duration.value = "";
    genre.value = "";
    rate.value = "";
    poster.value = "";

    event.preventDefault();
}


module.exports = clearForm;