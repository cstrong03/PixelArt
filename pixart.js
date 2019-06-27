let box = document.querySelector('.brush');
let field = document.querySelector('#color-field');

const setColor = (evt)=>{
box.style.backgroundColor = field.value;
evt.preventDefault();
}

let s = document.querySelector('#set-color');
s.addEventListener('click', setColor)

let color = document.querySelectorAll('body');

const change = (evt)=>{
		evt.target.style.backgroundColor = field.value;
	}

for (let i = 0; i <= 8000; i++) {
	let kitty = document.createElement('div');
	kitty.addEventListener('mouseover', change);
	document.body.appendChild(kitty).className = 'square';
}
