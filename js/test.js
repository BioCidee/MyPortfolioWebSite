var buttonSeeGame = document.getElementById("SeeGames");

var buttonPopup = document.getElementById("popup-fermer");
var buttonProjectMars = document.getElementById("buttonProjectMars");
var buttonPowerOfD = document.getElementById("buttonPowerOfD");
var buttonMarsRun = document.getElementById("buttonMarsRun");
var overlay = document.getElementById("overlay");

function ouvrirPopup(titre, description){
    document.getElementById("popup-titre").textContent = titre;
    document.getElementById("popup-description").textContent = description;
    overlay.style.display = "flex";
}

buttonSeeGame.addEventListener("click", function() {
    document.querySelector("#portfolio").scrollIntoView({behavior: "smooth"});
} 
)

buttonProjectMars.addEventListener("click", function() {
    ouvrirPopup("Project Mars", "Un jeu de gestion ou du doit développer tes défenses sur Mars, dans un monde en 3d pour te défendre des aliens");
})

buttonMarsRun.addEventListener("click", function() {
    ouvrirPopup("Mars Run", "Un infinite runner classque sur Mars ! Disposant de deux type de gameplay ! Un classique et un autre en vue fps !");
})

buttonPowerOfD.addEventListener("click", function() {
    ouvrirPopup("Power Of Destruction", "Jeu réaliser pour une game jam ! En seulement 2 jours ! Prenez le contrôle d'un géant et détruiser toute la ville !");
})

buttonPopup.addEventListener("click", function() {
    overlay.style.display = "none";
})