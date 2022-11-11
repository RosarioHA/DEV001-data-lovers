

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

//funcion filtro de director
export const directorFilter = (ghibliData, select)=>{
	const director = ghibliData.filter((movie =>{
		return movie.director == select
	}));
	return director
}