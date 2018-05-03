function fetchGameEvent(){
    fetch("http://amaliadunca.com/kea/t07/wordpress/wp-json/wp/v2/events?categories=8")
    .then(e => e.json())
    .then(showEvents)
}

function showEvents(data){
    console.log(data);
    data.forEach(showSingleGame)
}

function showSingleGame(aGame){
    console.log(aGame);
    let template = document.querySelector("#gametm").content;
    let clone = template.cloneNode(true);

    clone.querySelector("h1").innerHTML = aGame.title.rendered;


    clone.querySelector(".pic").src = aGame.acf.image.sizes.medium;
    /* subpagini*/

    clone.querySelector(".readmore").href="subpage_boardgame.html?id=" + aGame.id;

    /* DE Terminat Ziua Si ORA */

    clone.querySelector(".day").textContent = " " + aGame.acf.date.substring(0,2) + "/";
   clone.querySelector(".mouth").textContent = aGame.acf.date.substring(2,4) + "/";
    clone.querySelector(".year").textContent = aGame.acf.date.substring(4,8);

    clone.querySelector(".timenumb").textContent = aGame.acf.time;

    /*pana aici*/



    let gameslist = document.querySelector("#gameslist");
    gameslist.appendChild(clone);
}
fetchGameEvent();









