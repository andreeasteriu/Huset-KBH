let urlParams= new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("I want to get article: " + id);

fetch("http://deckadev.com/wordpress/wp-json/wp/v2/events/"+id)
.then(e=>e.json())
.then(showSinglePost)

function showSinglePost(anEvent){
    console.log(anEvent);


 document.querySelector("#postName").textContent = anEvent.title.rendered;

document.querySelector(".desc").innerHTML = anEvent.content.rendered;

document.querySelector(".img-post").src = anEvent.acf.image.sizes.medium;

    document.querySelector(".day").textContent = anEvent.acf.date.substring(0,2) + "/";
  document.querySelector(".month").textContent = anEvent.acf.date.substring(2,4) + "/";
 document.querySelector(".year").textContent = anEvent.acf.date.substring(4,8);
 document.querySelector(".clock").textContent = anEvent.acf.time;
 document.querySelector(".location").textContent = anEvent.acf.location;
    document.querySelector(".price").textContent = anEvent.acf.price+ " DKK";
}
