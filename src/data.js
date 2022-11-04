// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };


export function searchData (inputSearch, movieItems) {
	movieItems.forEach(item => {
		if (item.innerText.toLowerCase().includes(inputSearch.toLowerCase())) {
			item.classList.remove("hide")
		} else {
			item.classList.add("hide")
		}
	})
}
console.log(searchData)

export function producersFilter (directorSelector, ghibliData) {
 ghibliData.filter((films => {
	if (films.director.toLowerCase().includes(directorSelector.toLowerCase())) {
	  return true;
    } else {
 	  return false;
	} 
    }))
    
  };
  console.log(producersFilter)

// 	//console.log(searchData)
// }

// //TO-DO: repasar JSDOC
// /**
//  * 
//  * @param {array} data 
//  * @param {*} condition 
//  */
// export const filterByDirector=(ghibliData, imputSearch) => {
//   const arrResult = ghibliData.filter((films)=>{
//     // si el elemento cumple con la condicion, entonces deviuelvo true
//     if (films.director == imputSearch) {
//       return true
//     }
//     else {
//       return false
//     }
//   })

//   return arrResult;}