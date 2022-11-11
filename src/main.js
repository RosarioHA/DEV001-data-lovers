import data from './data/ghibli/ghibli.js';
import {searchData, directorFilter} from './data.js';

const ghibliData = data.films;
const movieContainer = document.getElementById("movieBox");
const inputSearch = document.querySelector(".cards-filter");
const selectDirector = document.getElementById("director");


//función que limpia el div movieContainer
const cleanContainer = () => {
	movieContainer.innerHTML = "";
  };

//funcion crear tarjetas de peliculas
function createMovies (movie){
	let movieTemplate = `
		<div class="movie">
			<div class="poster-container" id="poster">
		  		<img class="img" src=${movie.poster} alt="Poster Castle_in_the_Sky"></img>
			</div>
			<div class="text" id="text">
				<h3 class="movie-name">${movie.title}</h3>
		  		<p class="year">${movie.release_date}</p>
			</div>
		</div>
	`;
	movieContainer.innerHTML += movieTemplate;
}

//filtro pagina principal
function showAllMovies(ghibliData){
	ghibliData.forEach(createMovies)
}

showAllMovies(ghibliData);

//funcion input de busqueda, llamada desde data.js
inputSearch.addEventListener("input", (event) => searchData(event.target.value, ghibliData))

// funcion filtro con input de selector

selectDirector.addEventListener('change', (event) =>{
	let director = directorFilter(ghibliData, event.target.value);
	cleanContainer();
	director.forEach(movie => {
		createMovies(movie)
	});
	//console.log(director, "estoy en main")
}) 



  //