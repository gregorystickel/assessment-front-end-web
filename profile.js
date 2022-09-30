console.log("Hey");

let favColorBtn = document.getElementById("color");
let favPlaceBtn = document.getElementById("place");
let favRitualBtn = document.getElementById("ritual");

function alertColor(evt) {
    alert("My favorite color is Blue");    
}
function alertPlace(evt) {
    alert("My favorite place is with my wife and kids");    
}
function alertRitual(evt) {
    alert("My Favorite Ritual is Morning Coffee");    
}

favColorBtn.addEventListener(`click`, alertColor );
favPlaceBtn.addEventListener(`click`, alertPlace);
favRitualBtn.addEventListener(`click`, alertRitual);