(() => {
	const $welcome = document.getElementById('welcome');

	const welcome = (text, tiempo, etiqueta) => {
		let arrayCaracteres = text.split('')
		etiqueta.innerHTML = ''
		let i = 0
		let j = text.length
		let escribir = setInterval(function () {
			if (i === arrayCaracteres.length) {
				etiqueta.innerHTML = text.substring(0, j)
				j--
				if (j === 0) {
					etiqueta.innerHTML = ''
					i = 0
					j = text.length
				}
			} else {
				etiqueta.innerHTML += arrayCaracteres[i]
				i++
			}
		}, tiempo)
	}
	welcome('|Bienvenido a mi portafolio...', 200, $welcome);

	// actualizar edad
	const $edad = document.getElementById("edad");

	const calcularEdad = ()=> {
		const hoy = new Date();
		const anhoActual = parseInt(hoy.getFullYear());
		const mesActual = parseInt(hoy.getMonth()) + 1;
		const diaActual = parseInt(hoy.getDate());

		const anhoCumple = 1998;
		const mesCumple = 3;
		const diaCumple = 17;
		
		let edad = anhoActual - anhoCumple;
		if (mesActual < mesCumple) {
			edad--;
		} else if (mesActual === mesCumple) {
			if (diaActual < diaCumple) {
				edad--;
			}
		}
		return edad;
	}
	$edad.innerHTML = calcularEdad() 

	//Actualizar Año	
	const $anhoActual = document.getElementById('anhoActual');
	$anhoActual.innerHTML = new Date().getFullYear();

	//mostrar elementos
	const buttonMostrarTargets = document.getElementById("buttonMostrarTargets")

	buttonMostrarTargets.addEventListener("click", () => {
		const targets = document.getElementsByClassName("programacion__target")
		const cantElements = targets.length

		for (i = 0; i < cantElements; i++){
			targets[i].classList.toggle("mostrar")
		}
		if (targets[0].classList.contains("mostrar")) {
			buttonMostrarTargets.innerHTML= "Ocultar"
		} else {
			buttonMostrarTargets.innerHTML= "Ver más"
			
		}
	})

})()
