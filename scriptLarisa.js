
function fetchMovies(){
  fetch("http://larisadom.com/wordpress/wp-json/wp/v2/events?categories=9")
    .then(e => e.json())
    .then(showMovies)
}

function showMovies(data){
    console.log(data);
    data.forEach(showSingleMovie)
}
function showSingleMovie(aMovie){
    console.log(aMovie);
    let template = document.querySelector("#mtemp").content;
    let clone = template.cloneNode(true);

 clone.querySelector("h2").textContent = aMovie.title.rendered;
 clone.querySelector(".date").textContent = "Date " + aMovie.acf.date;
 clone.querySelector(".time").textContent = "Time " + aMovie.acf.time;
    clone.querySelector(".movieImg").src = aMovie.acf.image.sizes.medium;


    let movieList = document.querySelector("#movieList");
    movieList.appendChild(clone);

}
fetchMovies();
