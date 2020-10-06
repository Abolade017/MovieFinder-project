const key = "9099d4a456925cc52c8aed25ab61ba4e";
const baseUrl = "https://api.themoviedb.org/3/movie/popular?api_key=9099d4a456925cc52c8aed25ab61ba4e";
//const image_url = "https://image.tmdb.org/t/p/w500";
//selecting
const searchBox = document.querySelector('#inputValue');
searchBox.addEventListener('keypress', setQuery)
function setQuery(event) {
   if(event.keyCode == 13){
      getResults (searchBox.value);
      console.log(searchBox.value);
   }
}
function getResults(query) {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9099d4a456925cc52c8aed25ab61ba4emovie?q=${query}&APPID= 9099d4a456925cc52c8aed25ab61ba4e`)
    .then(movie => {
        return movie.json();
    }).then(displayResults);
}
function displayResults(movie) {
    console.log(movie);
}
const button = document.querySelector('#button');

button.onclick = function (event) {
    //disable browser behaviour
    event.preventDefault();
    const value = searchBox.value;
   // const newUrl= baseUrl + '${query}' + value;
    fetch(baseUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    console.log('value:', value);
}
