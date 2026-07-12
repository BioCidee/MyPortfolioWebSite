var buttonSeeGame = document.getElementById("SeeGames");

var buttonPopup = document.getElementById("popup-fermer");
var buttonDiscover = document.querySelectorAll(".buttonDiscover");
var overlay = document.getElementById("overlay");

function ouvrirPopup(_titre, _description, _image, _link){
    document.getElementById("popup-titre").textContent = _titre;
    document.getElementById("popup-description").textContent = _description;
    document.getElementById("popup-image").src = _image;
    document.getElementById("popup-link").href = _link;
    overlay.style.display = "flex";
}

buttonSeeGame.addEventListener("click", function() {
    document.querySelector("#portfolio").scrollIntoView({behavior: "smooth"});
} 
)

buttonDiscover.forEach(function(bouton){
    bouton.addEventListener("click", function(){
        ouvrirPopup(bouton.dataset.title, bouton.dataset.description, bouton.dataset.image, bouton.dataset.link);
    })
})

buttonPopup.addEventListener("click", function() {
    overlay.style.display = "none";
})

setTimeout(function(){
    document.querySelector(".loading-image").classList.add("hidden");
}, 2000)