let logo = document.querySelector(".huset-logo");
let mainnav = document.getElementById("mainnav");

//nav

logo.addEventListener('click', () => {
    window.location.replace('index.html')
})

//document.body.addEventListener('click', closeNav);




function openNav() {
    console.log(openNav);
    mainnav.classList.add('open');
    mainnav.classList.remove('close');
    mainnav.style.transition = "0.2s";
}


function closeNav() {
    console.log(closeNav);
    mainnav.style.transition = "0.2s";
    mainnav.classList.remove('open');
    mainnav.classList.remove('open-mq');
    mainnav.classList.add('close');

}

function changeImg() {
    console.log(changeImg);
    document.querySelector(".attend").src="assets/heart-full.png"
}

document.querySelector('button').addEventListener('click', function() {
  document.querySelector('.desc').style.height= 'auto';
  this.style.display= 'none';
});

function back() {
    window.history.back();
}
