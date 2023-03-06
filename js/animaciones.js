	const $welcome = document.getElementById('welcome');
	const previewEncriptador = document.querySelector('#mostrar_encriptador');
	const mostrarEncriptador = document.querySelector('#target__encriptador')

	const welcome = (text = '', tiempo = 300, etiqueta = '') => {
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
	welcome('ienvenido a mi portafolio..._', 300, $welcome);

	previewEncriptador.addEventListener('click', () => {
		mostrarEncriptador.classList.toggle('mostrar');
		if (mostrarEncriptador.classList.contains('mostrar')) {
			previewEncriptador.innerHTML = ("Ocultar");
		} else {
			previewEncriptador.innerHTML = ("Vista previa");
			textInic.value = "";
			textoFin.value = "";
			textInic.placeholder = "Ingrese el texto aquí... ¡Solo letras minúsculas, sin acentos ni números!"
			textoFin.placeholder = "Ningún mensaje encontrado"
		}
	});

	const textInic = document.getElementById("textoInicial");
	const textoFin = document.getElementById("textoFinal");
let matrizCodigo = [
	//["e", "enter"],
	//["i", "imes"],
	//["a", "ambar"],
	//["o", "ober"],
	//["u", "ufat"]
	["050", "'-"],
	["91", "+."],
	["56", "?="],
	["96", "*¡"],
	["526", "¿_"],
	["36", "&#"],
	["ü", "050"],
	["w", "6ü9"],
	["a", "2w1"],
	["á", "5w1"],
	["x", "á5a"],
	["z", "á0x"],
	["h", "w1z"],
	["o", "6xw"],
	["ó", "7xw"],
	["l", "3oz"],
	["d", "x5z"],
	["i", "z7h"],
	["í", "z8h"],
	["j", "9dh"],
	["b", "j2d"],
	["é", "3ow"],
	["e", "6éo"],
	["g", "w3á"],
	["m", "b2d"],
	["c", "3d3"],
	["s", "o8j"],
	["k", "1x2"],
	["r", "3dü"],
	["v", "xsm"],
	["f", "dlr"],
	["y", "b5i"],
	["ú", "y1k"],
	["u", "yúw"],
	["n", "ójw"],
	["ñ", "x6b"],
	["t", "c3k"],
	["p", "yíd"],
	["q", "z0f"],
	];


function encriptar() {
	const textoEncriptado = encriptador(textInic.value.toLowerCase());
	textoFin.value = textoEncriptado;
	textInic.value = "";
	textInic.placeholder="Atrévete a probar a encriptarlo más de una vez para hacerlo más seguro"
};
function desencriptar() {
	const textoDesencriptado = desencriptador(textInic.value);
	textoFin.value = textoDesencriptado;
	textInic.value = "";
	textInic.placeholder = "Ahora prueba con algo más. Los limites están en tu imaginación"

};

function encriptador(txtCifrado) {
	for (let i = 38; i >= 0; i--) {
	//for(let i = 0; i < matrizCodigo.length; i++){
		if(txtCifrado.includes(matrizCodigo[i][0])){
			txtCifrado = txtCifrado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}
	return txtCifrado;
};
function desencriptador(txtCifrado) {
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (txtCifrado.includes(matrizCodigo[i][1])) {
			txtCifrado = txtCifrado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}
	return txtCifrado;
};
function copiar() {
	var contenido = document.querySelector("#textoFinal");
	contenido.select();
	document.execCommand('copy');
	textoFin.value = ""
	textoFin.placeholder = "Gracias por usarlo puedes volver todas las veces que quieras... "
	//alert("Copied!");
};