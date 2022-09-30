console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The Form has been Submitted');
}

function niceHair (evt){
	alert(`Nice Hair`);
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let pic = document.getElementById("picture")

pic.addEventListener(`mouseover`, niceHair);