// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

const inputSearch = document.querySelector(".cards-filter");


export default function searchFilters (input, selector) {
  inputSearch.addEventListener ("keyup", (e) => {
  if (e.target.matches(input)) {
    console.log(e.target.value, "estoy en data.js");
    inputSearch.querySelectorAll(selector).forEach ((el) =>
    el.innerText.toLowerCase().includes(e.target.value)
    ? el.classList.remove("filter")
    : el.classList.add("filter")
    );
  }
});
}