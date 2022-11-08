//import ghibliData from './data/ghibli/ghibli.js';

//función buscador 
export function searchData (inputSearch, ghibliData) {
	ghibliData.forEach(movie => {
		if (movie.innerText.toLowerCase().includes(inputSearch.toLowerCase())) {
			return true
		} else {
			return false
		}
	})
	movie.forEach(createMovies)
}

//antes de comenzar a haer pruebas hacer consolelog de movie, movieInnterText, etc para er qué es ad

//funcion filtros
export function directorFilter(ghibliData, select){
	const director = ghibliData.filter((movie =>{
		if (movie.director == select) {
			return true;
		} else {
			return false;
		}
	  }));
	director.forEach(createMovies)  
	}
