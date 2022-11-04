//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
import {searchData, producersFilter} from './data.js';

const movieContainer = document.getElementById("movieContainer");
const ghibliData = data.films;
const inputSearch = document.querySelector(".cards-filter");
const movieItems = [];
const functionResult = [searchData];

ghibliData.forEach((movie)=>{
	const movieDiv = document.createElement("div");
	movieItems.push(movieDiv)
  	movieDiv.innerHTML =`
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
  movieContainer.appendChild(movieDiv)
})

//funcion input de busqueda, llamada desde data.js
inputSearch.addEventListener("input", (event) => searchData(event.target.value, movieItems))

directorSelector.addEventListener("click", (event) => producersFilter(directorSelector.value, ghibliData))

	
console.log(functionResult)


  
  