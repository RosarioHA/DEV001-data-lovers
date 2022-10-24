//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
const movieContainer = document.getElementById("movieContainer");
const ghibliData = data.films;
const movieElement = document.createElement("div");
movieElement.classList.add("movie");
ghibliData.forEach((movie)=>{
	console.log(movie);
  const movieInnerHTML = `
    <div class="movie" id="movie">
    	<div class="poster-container" id="poster">
      	<img class="img" src=${movie.poster} alt="Poster Castle_in_the_Sky"></img>
    	</div>
    	<div>
    		<h3 class="movie-name">${movie.title}</h3>
      	<p class="year">${movie.release_date}</p>
    	</div>
		</div>
	`;
  movieElement.innerHTML += movieInnerHTML 
  movieContainer.appendChild(movieElement)
})

//console.log(movieName, "estoy en main")

//(console.log(example, data);
