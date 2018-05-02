 // food


function fetchFoodEvent(){
    fetch("http://amaliadunca.com/kea/t07/wordpress/wp-json/wp/v2/events?categories=59")
    .then(e => e.json())
    .then(showFood)
}

function showFood(data){
    console.log(data);
    data.forEach(showSingleFood)
}

function showSingleFood(aFood){
    console.log(aFood);

    let template = document.querySelector("#foodtm").content;
    let clone = template.cloneNode(true);

    clone.querySelector(".foodName").textContent = aFood.title.rendered;

    clone.querySelector(".foodimg").src = aFood.acf.image.sizes.medium;



let foodlist = document.querySelector("#foodlist");
    foodlist.appendChild(clone);



}

fetchFoodEvent();
