import data from './data/ghibli/ghibli.js';
import {searchData, miyazakiFilter, takahataFilter, kondoFilter} from './data.js';

const movieContainer = document.getElementById("movieBox");
export const ghibliData = data.films;
const inputSearch = document.querySelector(".cards-filter");
//const movieItems = []; 
let movieTemplate = ""; //contiene las 20 peliculas

//funcion crear tarjetas de peliculas
function createMovies(movie){
	movieContainer.innerHTML = '';
	const movieDiv = document.createElement("div");
	movieDiv.classList.add('movie-container');
	//movieItems.push(movieDiv)
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

//funcion input de busqueda, llamada desde data.js
inputSearch.addEventListener("input", (event) => searchData(event.target.value, ghibliData))

// funcion filtro con input de selector
const selectElement = document.getElementById('director');
selectElement.addEventListener("change", (event) => {//está enlazado correctamente a la función
	if (event.target.value == ("Hayao Miyazaki")) {
		const hMiyazaki = miyazakiFilter(ghibliData);//no se pueden leer las propiedades del array filtrado
        hMiyazaki.forEach(function(movie) {
            createMovies(movie)});
	} else if (event.target.value == ("Isao Takahata")){
		const iTakahata = takahataFilter(ghibliData);//este valor no puede ser iterado
		iTakahata.forEach(function(movie){
			createMovies(movie)});
	} else if (event.target.value == ("Yoshifumi Kondō")){
		const yKondo = kondoFilter(ghibliData);
		yKondo.forEach((movie =>{
			createMovies(movie)}));
	}
})

  //