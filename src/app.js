const createModal = (movie)=>{
	const modal = document.createElement("dialog");
	modal.className = "modal";
	modal.id = "modal";
	modal.innerHTML =
		`<div class="divInModal">
			<h3 class="movie-title">${movie.title}</h3>
			<p class"info"><i class='bx bxs-star'></i> ${movie.rt_score}</p>
			<h4 class="subtitle">Director: ${movie.director}</h4>
        	<h4 class="subtitle">Producer: ${movie.producer}</h4>
			<h4 class="subtitle">Resume:</h4>
          	<p class="info">${movie.description}</p>
        </div>
		<button id= "closeModalButton" class="close-button"><i class='bx bxs-x-square'></i></button> 
		`;
	modalContainer.innerHTML = "";
	modalContainer.appendChild(modal);
}
