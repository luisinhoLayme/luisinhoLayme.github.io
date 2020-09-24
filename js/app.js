//Variables
const boton_abrir = document.getElementById('btn-burger-abrir');
const boton_cerrar = document.getElementById('btn-burger-cerrar');
const menu = document.querySelector('.menu');
const menu_botones = document.querySelectorAll('.menu a');
const ipad = window.matchMedia('screen and (max-width: 526px)');

//Hide Show menu Burger
menuBotones();
desktop(ipad);
ipad.addListener(desktop);


// Funcion para validar el width de ventana
function desktop(event) {
	if(event.matches) {
		boton_abrir.addEventListener('click', menuHide);
		boton_cerrar.addEventListener('click', menuHide);
	} else {
		// menu.classList.remove('active');
	}
}

// Funcion que hace la funcion al menu
function menuHide() {
	if(menu.classList.contains('active')) {
		menu.classList.remove('active');
		boton_cerrar.style.display = 'none';
	} else {
		menu.classList.add('active');
		boton_cerrar.style.display = 'block';
	}
}
// Funcion para los botones del menhu
function menuBotones() {
	menu_botones.forEach((elemento) => {
		elemento.addEventListener('click', () => {
			menu.classList.remove('active');
			boton_cerrar.style.display = 'none';
		})
	});
}

// Function para controlar burger menu
window.onresize = () => {
	let ancho = screen.width;
	console.log(ancho);
	if (ancho > 526) {
		menu.classList.remove('active');
		boton_cerrar.style.display = 'none';
	}
}
