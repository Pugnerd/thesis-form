function pageLoad(){
	const button = document.querySelector("button")
	const emptyspace = document.getElementById("empty")
	
	button.addEventListener('click', event => {
		emptyspace.innerHTML = "KÖSZÖNÖM HOGY KITÖLTÖTTED!";
		button.style.display = none;
	});

	button.addEventListener('click', ev => ev.target.style.display = 'none');

}
window.addEventListener("load", pageLoad)