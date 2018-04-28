
function fetchMovies(){
  fetch("http://larisadom.com/wordpress/wp-json/wp/v2/events?categories=9&per_page=100&order=asc")
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

    var day = aMovie.acf.date.substring(0,2);
    var month = aMovie.acf.date.substring(2,4);
    var year = aMovie.acf.date.substring(4,8);

     clone.querySelector(".date").textContent =   day + "-" +month + "-" + year;


 clone.querySelector(".time").textContent =   aMovie.acf.time;
    clone.querySelector(".movieImg").src = aMovie.acf.image.sizes.medium;

clone.querySelector(".moreDetails").href="subpage.html?id=" + aMovie.id;

    let movieList = document.querySelector("#movieList");
    movieList.appendChild(clone);

}
fetchMovies();
