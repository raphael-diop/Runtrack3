var counter = 0;

var element = document.querySelector('p')
element.innerText='clicks :' + counter

var button = document.querySelector('#button')

button.addEventListener('click', addone);

function addone() {
	counter++
	element.innerText='clicks:' + counter
}

