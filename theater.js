
function fetchTheater(){
  fetch("http://larisadom.com/wordpress/wp-json/wp/v2/events?categories=11&order=asc")
    .then(e => e.json())
    .then(showTheaterPlays)
}


function showTheaterPlays(data){
    console.log(data);
    data.forEach(showSingleTheater)

}

function showSingleTheater(aTheater){
    console.log(aTheater);
    let template = document.querySelector("#mtemp").content;
    let clone = template.cloneNode(true);

 clone.querySelector("h2").textContent = aTheater.title.rendered;

    var day = aTheater.acf.date.substring(0,2);
    var month = aTheater.acf.date.substring(2,4);
    var year = aTheater.acf.date.substring(4,8);

     clone.querySelector(".date").textContent =   day + "-" +month + "-" + year;


 clone.querySelector(".time").textContent =   aTheater.acf.time;
    clone.querySelector(".theaterImg").src = aTheater.acf.image.sizes.medium;

clone.querySelector(".moreDetails").href="subpage.html?id=" + aTheater.id;

    let theaterList = document.querySelector("#theaterList");
    theaterList.appendChild(clone);

}
fetchTheater();
