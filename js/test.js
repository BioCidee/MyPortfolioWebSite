var buttonSeeGame = document.getElementById("SeeGames");

var buttonPopup = document.getElementById("popup-fermer");
var buttonDiscover = document.querySelectorAll(".buttonDiscover");
var overlay = document.getElementById("overlay");

function ouvrirPopup(_titre, _description, _image){
    document.getElementById("popup-titre").textContent = _titre;
    document.getElementById("popup-description").textContent = _description;
    document.getElementById("popup-image").src = _image;
    overlay.style.display = "flex";
}

buttonSeeGame.addEventListener("click", function() {
    document.querySelector("#portfolio").scrollIntoView({behavior: "smooth"});
} 
)

buttonDiscover.forEach(function(bouton){
    bouton.addEventListener("click", function(){
        ouvrirPopup(bouton.dataset.title, bouton.dataset.description, bouton.dataset.image);
    })
})

buttonPopup.addEventListener("click", function() {
    overlay.style.display = "none";
})