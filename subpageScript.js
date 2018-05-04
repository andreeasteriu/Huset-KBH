let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("i want to get article: " + id);


fetch("http://larisadom.com/wordpress/wp-json/wp/v2/events/" + id + "/?categories=7&per_page=10")
    .then(e => e.json())
    .then(showSinglePost)


function showSinglePost(aPost) {
console.log(aPost)
    document.querySelector("#singleEvent h2").textContent = aPost.title.rendered;
    document.querySelector(".subimg").src = aPost.acf.image.sizes.medium;
    document.querySelector("p").innerHTML = aPost.content.rendered;

 document.querySelector(".price").textContent = aPost.acf.price+ " DKK";

 document.querySelector(".loc").textContent = aPost.acf.location;

    if (aPost.acf.availability_ === "NOT"){
        document.querySelector(".availability img").src= "images/no.png"
    }


}

function goBack() {
    window.history.back();
}


