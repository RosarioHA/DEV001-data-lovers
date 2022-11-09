

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
export const miyazakiFilter = function (ghibliData){
	const miyazakiInfo = ghibliData.filter((films =>{
		if (films.director == "Hayao Miyazaki")
		return true;
}));
 console.log(miyazakiInfo, "esto es de HMiyazaki")
}

export const takahataFilter = function (ghibliData){
	const takahataInfo = ghibliData.filter((films =>{
		if (films.director == "Isao Takahata")
		return true;
}));
 console.log(takahataInfo, "esto es de ITakahata")
}
export const kondoFilter = function (ghibliData){
	const kondoInfo = ghibliData.filter((films =>{
		if (films.director == "Yoshifumi Kondō")
		return true;
}));
 console.log(kondoInfo, "esto es de YKondo")
}