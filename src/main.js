import data from './data/ghibli/ghibli.js';
import {searchData, directorFilter} from './data.js';

const movieContainer = document.getElementById("movieContainer");
const ghibliData = data.films;
const inputSearch = document.querySelector(".cards-filter");
const movieItems = []; 
let movieTemplate = "";

//funcion crear tarjetas de peliculas
function createMovies(movie){
	movieContainer.innerHTML = '';
	const movieDiv = document.createElement("div");
	movieDiv.classList.add('movie-container');
	movieItems.push(movieDiv)
	movieTemplate +=`
    	    <div class="movie" id="${movie.title}">
    		    <div class="poster-container" id="poster">
      			    <img class="img" src=${movie.poster} alt="Poster Castle_in_the_Sky"></img>
    		    </div>
    		    <div class="text" id="text">
    			    <h3 class="movie-title">${movie.title}</h3>
      			    <p class="year">${movie.release_date}</p>
    		    </div>
		    </div>
		`; movieDiv.innerHTML = movieTemplate
    movieContainer.appendChild(movieDiv) //convierte a movieDiv en hijo de movieContainer
}

//filtro pagina principal
function showAllMovies(ghibliData){
	ghibliData.forEach(createMovies)
}

showAllMovies(ghibliData);
directorFilter(ghibliData);

//funcion input de busqueda, llamada desde data.js
inputSearch.addEventListener("input", (event) => searchData(event.target.value, ghibliData))

// funcion filtro con input de selector
const selectElement = document.getElementById('director');
selectElement.addEventListener("change", (event) => directorFilter(ghibliData, event.target.value))


  