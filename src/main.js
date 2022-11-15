import data from './data/ghibli/ghibli.js';
import {searchData, directorFilter, yearSort} from './data.js';

const ghibliData = data.films;
let dataView = data.films;
const movieContainer = document.getElementById("movieBox");
const inputSearch = document.querySelector(".cards-filter");
const selectDirector = document.getElementById("director");
const sortSelector = document.getElementById("sortGhibli");

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
inputSearch.addEventListener("keyup", () => {
	const allMovies = searchData(ghibliData, 'title', inputSearch.value);
	cleanContainer();
	allMovies.forEach(createMovies);
})

// funcion filtro con input de selector

selectDirector.addEventListener('change', (event) =>{
	const selectDirectorValue = event.target.value;
	if (selectDirectorValue === "all"){
		cleanContainer();
		showAllMovies(ghibliData)
	} else {
		dataView = directorFilter(ghibliData, event.target.value);
	cleanContainer();
	dataView.forEach(movie => {
		createMovies(movie)
	});
	}
}) 

//función sort con input selector
sortSelector.addEventListener("change", (event) =>{
	let selectorValue = event.target.value;
	if (selectorValue !== ""){
		dataView = yearSort(dataView, selectorValue);
		cleanContainer();
		dataView.forEach(movie=>{
			createMovies(movie)
		})	
	} else {
		dataView = data.films;
	}
})