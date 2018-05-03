let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("i want to get article: " + id);


fetch("http://larisadom.com/wordpress/wp-json/wp/v2/events/" + id + "/?categories=7&per_page=10")
    .then(e => e.json())
    .then(showSinglePost)


function showSinglePost(aPost) {
console.log(aPost)
    document.querySelector(".lastprice").textContent ="PRICE: " aPost.acf.price+ " DKK";


}



function goBack() {
    window.history.back();
}
