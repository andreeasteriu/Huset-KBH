
function fetchMusic(){
  fetch("http://deckadev.com/wordpress/wp-json/wp/v2/events?category=Music")
    .then(e => e.json())
    .then(showMusic)
}

function showMusic(data){
    console.log(data);
    data.forEach(showEvents)
}
function showEvents(anEvent){
    console.log(anEvent);
    let template = document.querySelector("#template").content;
    let clone = template.cloneNode(true);

 clone.querySelector("h2").textContent = anEvent.title.rendered;
 clone.querySelector(".date").textContent = "Date " + anEvent.acf.date;
 clone.querySelector(".time").textContent = "Time " + anEvent.acf.time;
    clone.querySelector(".img-post").src = anEvent.acf.image.sizes.medium;


    let eventsList = document.querySelector("#eventsList");
    eventsList.appendChild(clone);

}
fetchMusic();
