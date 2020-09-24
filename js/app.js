//Variables
const boton = document.getElementById('btn-burger');
const menu = document.querySelector('.menu');
const contenedor_texto = document.querySelector('.contenedor-texto');

//Hide Show menu Burger
boton.addEventListener('click', menuHide);

// Funcion que hace la funcion al menu
function menuHide() {
	if(menu.classList.contains('active')) {
		menu.classList.remove('active');
		contenedor_texto.style.margin = '149px 0';
	} else {
		menu.classList.add('active');
		contenedor_texto.style.margin = '173px 0';
	}
}