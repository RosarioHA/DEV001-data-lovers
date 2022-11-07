//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
import {searchData, directorFilter, createMovies} from './data.js';

const movieContainer = document.getElementById("movieContainer");
const ghibliData = data.films;
const inputSearch = document.querySelector(".cards-filter");
const movieItems = [];
const functionResult = [searchData];

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


  