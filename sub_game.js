let urlParams= new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("I want to get article: " + id);

fetch("http://amaliadunca.com/kea/t07/wordpress/wp-json/wp/v2/events/" + id + "/?categories=8/")
.then(e=>e.json())
.then(showSingleGame)

function showSingleGame(gameP){
    console.log(gameP);


 document.querySelector("#singleGame").textContent = gameP.title.rendered;

document.querySelector(".imagSub").src = gameP.acf.image.sizes.medium;

document.querySelector(".desc").innerHTML = gameP.content.rendered;
       }
