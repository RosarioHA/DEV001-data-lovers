//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
import searchFilters from './data.js';

const movieContainer = document.getElementById("movieContainer");
const ghibliData = data.films;
const movieElement = document.createElement("div");
movieElement.classList.add("cards");
ghibliData.forEach((movie)=>{
	//console.log(movie);
  const movieInnerHTML = `
    <div class="movie" id="${movie.title}">
    	<div class="poster-container" id="poster">
      		<img class="img" src=${movie.poster} alt="Poster Castle_in_the_Sky"></img>
    	</div>
    	<div class="texto">
    		<h3 class="movie-name">${movie.title}</h3>
      		<p class="year">${movie.release_date}</p>
    	</div>
		</div>
	`;
  movieElement.innerHTML += movieInnerHTML 
  movieContainer.appendChild(movieElement)
})

const cards = document;
const inputSearch = document.querySelector(".cards-filter");
inputSearch.addEventListener("input", function (event) {
	event.preventDefault();
	searchFilters(".card-filter",".texto");
	console.log(searchFilters, "estoy en main.js");
	})
//console.log(movieName, "estoy en main")

//(console.log(example, data);
