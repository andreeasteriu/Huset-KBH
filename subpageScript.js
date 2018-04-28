let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("i want to get article: " + id);


fetch("http://larisadom.com/wordpress/wp-json/wp/v2/events?categories=9&per_page=10" + id)
  .then(e=>e.json())
  .then(showSinglePost)


function showSinglePost(aPost){

    document.querySelector("#singleMovie h2").textContent=aPost.title.rendered;
}
