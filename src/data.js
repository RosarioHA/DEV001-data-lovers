//import ghibliData from './data/ghibli/ghibli.js';

//funcion crear tarjetas de peliculas
export function createMovies(movie){
	movieContainer.innerHTML = '';
	const movieItems = [];
	const movieDiv = document.createElement("div");
	movieItems.push(movieDiv)
  		movieDiv.innerHTML =`
    	    <div class="movie" id="${movie.title}">
    		    <div class="poster-container" id="poster">
      			    <img class="img" src=${movie.poster} alt="Poster Castle_in_the_Sky"></img>
    		    </div>
    		    <div class="text" id="text">
    			    <h3 class="movie-title">${movie.title}</h3>
      			    <p class="year">${movie.release_date}</p>
    		    </div>
		    </div>
		`;
  	    movieContainer.appendChild(movieDiv)
	console.log(movieItems)
}

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
