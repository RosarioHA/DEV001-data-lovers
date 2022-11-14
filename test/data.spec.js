import {directorFilter, yearSort} from '../src/data.js';


describe('directorFilter', () => { //testea que directorFilter sea una función
  it('directorFilter es una función', () => {
    expect(typeof directorFilter).toBe('function');
  });

   it('filtra las peliculas por director', () => { //testea que la función nos de el resultado esperado
    let data= [
      {director: "Hayao Miyazaki", pelicula: "Castle in the Sky"},
      {director: "Isao Takahata", pelicula: "Only Yesterday"},
      {director: "Hayao Miyazaki", pelicula: "Porco Rosso"}
    ]
    let director = "Hayao Miyazaki";
    let resultadoReal = directorFilter(data, director);
    let resultadoEsperado = [{director: "Hayao Miyazaki", pelicula: "Castle in the Sky"}, {director: "Hayao Miyazaki", pelicula: "Porco Rosso"}]
    
    expect(resultadoReal).toEqual(resultadoEsperado);
   });
});

describe('yearSort', () => { //testea que directorFilter sea una función
  it('is a function', () => {
    expect(typeof yearSort).toBe('function');
  });

   it('ordena las películas según año de estreno de forma ascendente', () => { //testea que asc de el resultado esperado
    let data = [{release_date:"1989"},{release_date:"2014"}, {release_date:"1999"}];
    let order = "asc";
    let resultadoEsperado = [{release_date:"1989"},{release_date:"1999"}, {release_date:"2014"}];
    let resultadoReal = yearSort (data, order)

       expect(resultadoReal).toEqual(resultadoEsperado);
     });

   it('ordena las películas según año de estreno de forma descendente', () => { //testea que desc de el resultado esperado
    let data = [{release_date:"1989"},{release_date:"2014"}, {release_date:"1999"}];
    let order = "desc";
    let resultadoEsperado = [{release_date:"2014"},{release_date:"1999"}, {release_date:"1989"}];
    let resultadoReal = yearSort (data, order)

       expect(resultadoReal).toEqual(resultadoEsperado);
     }); 
});

  
// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });