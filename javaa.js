let k = document.querySelector('h1');
k.textContent="Harsimran ";
function change() {
	let fr= document.querySelector('h1');
	fr.textContent=" badal daala g";
	document.getElementById('Home').style.color="blue";
	// body...
}
let btn = document.querySelector('#button1');
btn.addEventListener('click',change);
