import data from './data/ghibli/ghibli.js';
import {searchData, directorFilter, yearSort} from './data.js';

const ghibliData = data.films;
let dataView = data.films;
const movieContainer = document.getElementById("movieBox");
const inputSearch = document.querySelector(".cards-filter");
let selectDirector = document.getElementById("director");
let sortSelector = document.getElementById("sortGhibli");
const showCount = document.getElementById("showCount");
const modalContainer = document.getElementById("modalContainer");
const modal = document.createElement("dialog");
	modal.className = "modal";
	modal.id = "modal";

//función que limpia el div movieContainer
const cleanContainer = () => {
	movieContainer.innerHTML = "";
  };

//funcion crear tarjetas de peliculas
function createMovies (movie){
	let movieTemplate = `
		<div class="movie">
			<div class="poster-container" >
		  		<img id="${movie.id}" class="img" src=${movie.poster} alt="Poster Castle_in_the_Sky"></img>
			</div>
			<div class="text">
				<h3 class="movie-name">${movie.title}</h3>
		  		<p class="year">${movie.release_date}</p>
			</div>
		</div>
	`;
	movieContainer.innerHTML += movieTemplate;
	document.querySelectorAll('.movie').forEach(movie => {
        movie.addEventListener('click', (event) => {
			const movieId = event.target.id;
			const modalInfo = ghibliData.filter(element =>element.id === movieId)
			createModal(modalInfo[0]);
				const modal = document.getElementById("modal");
					modal.showModal();
                const close = document.getElementById("closeModalButton");
					close.addEventListener("click", () => {
						modal.close();
                })
            })
        })
} 


//mostrar contenido pagina principal
function showAllMovies(ghibliData){
	ghibliData.forEach(createMovies);
}
//evento que carga todas las peliculas al cargar la pagina
window.addEventListener("load", () => { 
    showAllMovies(ghibliData);
});

//funcion input de busqueda, llamada desde data.js
inputSearch.addEventListener("keyup", () => {
	selectDirector.value = "all";
	sortSelector.value= "";
	const allMovies = searchData(ghibliData, 'title', inputSearch.value);
	cleanContainer();
	const countMovie = allMovies.length;
	showCount.innerText = "Showing " + countMovie + " results";
	allMovies.forEach(createMovies);
})

// funcion filtro con input de selector
selectDirector.addEventListener('change', (event) =>{
	const selectDirectorValue = event.target.value;
	if (selectDirectorValue === "all"){
		cleanContainer();
		showAllMovies(ghibliData)
	} else {
		dataView = directorFilter(ghibliData, selectDirectorValue);
	cleanContainer();
	dataView.forEach(movie => {
		const countMovie = dataView.length;
		showCount.innerText = "Showing " + countMovie + " results";
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

const createModal = (movie)=>{
	modal.innerHTML =
		`
			<h3 class="movie-title">${movie.title}</h3><br>
			<p class"info"><i class='bx bxs-star'></i> ${movie.rt_score}</p>
			<h4 class="subtitle">Director: ${movie.director}</h4>
        	<h4 class="subtitle">Producer: ${movie.producer}</h4><br>
			<h4 class="subtitle">Resume:</h4>
          	<p class="info">${movie.description}</p><br>
			<button id= "closeModalButton" class="close-button"><i class='bx bxs-x-square'></i></button>
		`;
	modalContainer.appendChild(modal);
}

