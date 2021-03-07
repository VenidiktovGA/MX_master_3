

let buttonBurger = document.querySelector('button.navbar-toggler_open');
let buttonClose = document.querySelector('button.navbar-toggler_close');

buttonBurger.addEventListener('click', () => {
	document.querySelector('.logo_start').classList.toggle("disable");
	document.querySelector('.logo_next').classList.toggle("disable");
	document.querySelector('nav.navbar').classList.toggle("backColor");

	document.querySelector('button.navbar-toggler_open').classList.toggle("disable");
	document.querySelector('button.navbar-toggler_close').classList.toggle("disable");
	
})

buttonClose.addEventListener('click', () => {
	document.querySelector('nav.navbar').classList.toggle("backColor");
	document.querySelector('button.navbar-toggler_open').classList.toggle("disable");
	document.querySelector('button.navbar-toggler_close').classList.toggle("disable");
	document.querySelector('.logo_start').classList.toggle("disable");
	document.querySelector('.logo_next').classList.toggle("disable");


})
