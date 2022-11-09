

//función buscador 
export function searchData (inputSearch, ghibliData) {
	ghibliData.forEach(movie => {
		if (movie.innerText.toLowerCase().includes(inputSearch.toLowerCase())) {
			return true
		} else {
			return false
		}
	})
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
	director.forEach()  
}
