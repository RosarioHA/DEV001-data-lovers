//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
import searchFilters from './data.js';

const movieContainer = document.getElementById("movieContainer");
const ghibliData = data.films;
const inputSearch = document.querySelector(".cards-filter");
const movieItems = [];

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

// const charactersContainer = document.getElementById("charactersContainer");
 
// const characterItems = [];
// ghibliData.forEach((film)=>{
//     film.people.forEach(people =>{
// 		const characterLi = document.createElement("li");
// 		characterItems.push(characterLi)
//         characterLi.innerHTML = `
//     		<div class="movie" id="${people.name}">
//     			<div class="poster-container" id="poster">
//       				<img class="img" src=${people.img} alt="Poster Castle_in_the_Sky"></img>
//     			</div>
//     			<div class="texto" id="texto">
//     				<h3 class="movie-name">${people.name}</h3>
//       				<p class="year">${film.title}</p>
//     			</div>
// 			</div>
// 		`; 
//   	charactersContainer.appendChild(characterLi)
//     })
// })


inputSearch.addEventListener("input", (event) => filterData (event.target.value)) 
function filterData (searchTerm) {
	movieItems.forEach(item => {
		if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
			item.classList.remove("hide")
		} else {
			item.classList.add("hide")
		}
		console.log(item, "estoy en main")
	})
}
