import {directorFilter, yearSort} from '../src/data.js';


describe('directorFilter', () => { //testea que directorFilter sea una función
  it('directorFilter es una función', () => {
    expect(typeof directorFilter).toBe('function');
  });

   it('filtra las peliculas por director', () => { //testea que la función nos de el resultado esperado
    const data= [
      {director: "Hayao Miyazaki", pelicula: "Castle in the Sky"},
      {director: "Isao Takahata", pelicula: "Only Yesterday"},
      {director: "Hayao Miyazaki", pelicula: "Porco Rosso"}
    ]
    const director = "Hayao Miyazaki";
    const resultadoReal = directorFilter(data, director);
    const resultadoEsperado = [{director: "Hayao Miyazaki", pelicula: "Castle in the Sky"}, {director: "Hayao Miyazaki", pelicula: "Porco Rosso"}]
    
    expect(resultadoReal).toEqual(resultadoEsperado);
   });
});

describe('yearSort', () => { //testea que directorFilter sea una función
  it('is a function', () => {
    expect(typeof yearSort).toBe('function');
  });

   it('ordena las películas según año de estreno de forma ascendente', () => { //testea que asc de el resultado esperado
    const data = [{release_date:"1989"},{release_date:"2014"}, {release_date:"1999"}];
    const order = "asc";
    const resultadoEsperado = [{release_date:"1989"},{release_date:"1999"}, {release_date:"2014"}];
    const resultadoReal = yearSort (data, order)

       expect(resultadoReal).toEqual(resultadoEsperado);
     });

   it('ordena las películas según año de estreno de forma descendente', () => { //testea que desc de el resultado esperado
    const data = [{release_date:"1989"},{release_date:"2014"}, {release_date:"1999"}];
    const order = "desc";
    const resultadoEsperado = [{release_date:"2014"},{release_date:"1999"}, {release_date:"1989"}];
    const resultadoReal = yearSort (data, order)

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