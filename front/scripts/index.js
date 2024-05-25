
document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("container");
    
    const fetchMovies = () => {
        $.get("https://students-api.up.railway.app/movies", (data) => {
            const cards = data.map((movie) => {
                const card = document.createElement("article");
                card.classList.add("card");
        
                const title = document.createElement("h3");
                title.classList.add("card-title");
        
                const titleLink = document.createElement("a");
        
                const img = document.createElement("img");
                img.classList.add("card-img");
        
                const year = document.createElement("p");
        
                const director = document.createElement("p");
        
                const duration = document.createElement("p");
        
                const genre = document.createElement("p");
        
                const rate = document.createElement("p");
        
        
                titleLink.textContent = movie.title;
                titleLink.href = "#";
                img.src = movie.poster;
                year.textContent = `Año: ${movie.year}`;
                director.textContent = `Director: ${movie.director}`;
                duration.textContent = `Duración: ${movie.duration}`;
                genre.textContent = `Genero: ${movie.genre}`;
                rate.textContent = `Rating: ${movie.rate}`;
        
                card.appendChild(title);
                title.appendChild(titleLink);
                card.appendChild(img);
                card.appendChild(year);
                card.appendChild(director);
                card.appendChild(duration);
                card.appendChild(genre);
                card.appendChild(rate);
        
                return card;
        
            })
        
            cards.forEach((card) => {
                container.appendChild(card);
            })

        })
    }

    fetchMovies();

})








