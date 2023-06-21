const $btnDarkMode = document.querySelector('#btnDarkMode');
const $changeColor = document.getElementById("cambio_colores");
const $buttonMenu = document.getElementById("button__menu");
const $barraNavegacion = document.getElementById("barraNavegacion");
const $container = document.getElementById("container")
const $footer = document.getElementById("footer");
const $listaNavegacion = document.querySelector('#navegacion__list');
const $cerrarmenu = document.querySelectorAll('.navegacion__list a[href^="#"]');
const rootStyles = document.documentElement.style;
const formularioContacto = document.getElementById("formularioContacto");
const mensajeError = document.getElementById("mensajeError");
const $mailto = document.querySelector('#mailto')

$btnDarkMode.addEventListener('click', () => {
	if ($btnDarkMode.classList.contains('active')) {
		$btnDarkMode.classList.remove('active');
		document.body.classList.remove('dark');
		rootStyles.setProperty("--color--principal", "#c40f24");
	} else {
		$btnDarkMode.classList.add('active');
		document.body.classList.add('dark');
		rootStyles.setProperty("--color--principal", "#2a74fd");
	}
});
$changeColor.addEventListener('click', (e) => {
	if (e.target.dataset.color != null) {
		rootStyles.setProperty("--color--principal", e.target.dataset.color)
	};
});
$buttonMenu.addEventListener("click", () => {
	$buttonMenu.classList.toggle("extend");
	$barraNavegacion.classList.toggle("extend");
	$container.classList.toggle("reduce");
	$footer.classList.toggle("reduce");
})
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute("id");
			const menuLink = document.querySelector(`.navegacion__list a[href="#${id}"]`);

			if (entry.isIntersecting) {
				/*document.querySelector(".navegacion__list a.active").classList.remove("active");*/
				menuLink.classList.add("active");
			}
			else {
				menuLink.classList.remove("active");
			}
		})
	},
	{ rootMargin: "-30% 0px -70% 0px" }
);
$cerrarmenu.forEach(menuLink => {
	menuLink.addEventListener('click', () => {
		if ($barraNavegacion.classList.contains('extend')) {
			$barraNavegacion.classList.remove('extend');
			$buttonMenu.classList.remove('extend');
			$container.classList.remove("reduce");
			$footer.classList.remove("reduce");
		}
	});
	const hash = menuLink.getAttribute("href");
	const target = document.querySelector(hash);
	if (target) {
		observer.observe(target);
	}
});


const newAlert = (alertTitle, title, mensaje, icono, color) => {
	swal.fire({
		title: `<span class=${alertTitle}>${title}</span>`,
		html: `<span class='alertMessage'>${mensaje}</span>`,
		icon: `${icono}`,
		iconColor: `${color}`,
		background: "#2d2c2e",
		timer: 3000,
		allowOutsideClick: true,
		allowEscapeKey: true,
		allowEnterKey: true,
		stopKeydownPropagation: false,
		showConfirmButton: true,
		confirmButtonColor: "#295afa",
		confirmButtonAriaLabe: "Confirmar",
	})
};


const campos = {
	fullName: formularioContacto.name,
	email: formularioContacto.email,
	// phone: formularioContacto.phone,
	affair: formularioContacto.affair,
	message: formularioContacto.message,
};
const expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/

const validateEmpty = (e) => {
	const campoAValidar = e.target
	const field = e.target.value;
	if (field.trim().length === 0) {
		campoAValidar.classList.add("error");
	} else {
		campoAValidar.classList.remove("error");
	}
};

const validateMail = (e) => {
	const campoAValidar = e.target
	const field = e.target.value;
	if (!expresion.test(field)) {
		campoAValidar.classList.add("error");
	} else {
		campoAValidar.classList.remove("error");
	}
};

const limpiarForm = () => {
	fullName.value = "";
	email.value = "";
	phone.value = "";
	affair.value = "";
	message.value = "";
	mensajeError.innerHTML = "";
	fullName.classList.remove("error")
	email.classList.remove("error")
	phone.classList.remove("error")
	affair.classList.remove("error")
	message.classList.remove("error")
} 

fullName.addEventListener("keyup", validateEmpty);
email.addEventListener("keyup", validateEmpty);
email.addEventListener("blur", validateMail);
phone.addEventListener("keyup", validateEmpty);
affair.addEventListener("keyup", validateEmpty);
message.addEventListener("keyup", validateEmpty);

function enviarFormulario(e) {
	e.preventDefault();
	const actCampos = Object.values(campos);
	let nValide = [];
	for (i = 0; i < actCampos.length; i++) {
		const falseValide = false
		nValide.push(falseValide)
		// if (actCampos[i].value.trim().length === 0) {
		if (actCampos[i].value.trim().length < 8) {
			actCampos[i].classList.add("error");		
		} else {
			nValide[i] = !nValide[i]
		};
		var result = nValide.every(() => nValide[i] === true)
	}
	if (result === true) {
		if (!expresion.test(email.value)) {
			email.classList.add("error")
			mensajeError.classList.add("error")
			mensajeError.innerHTML = "Corregir campos marcados antes de enviar Formulario"
		} else {
			mensajeError.classList.remove("error");
			fetch("https://formsubmit.co/dllanosr17@gmail.com", {
				method: "POST",
				body: new FormData(e.target)
			})
				.then(res => res.ok
					? newAlert("acepTitle", "Correo enviado", "El correo fue enviado", "success", "#20bb20")
					: newAlert("errorTitle", "Ocurrió un Error", "El correo no fue enviado, vuelve a intentar más tarde", "error", "#fd1f4a"))
			
			// const form = new FormData(this);
			// $mailto.setAttribute('href', `mailto:dllanosr17@gmail.com?subject= Asunto: ${form.get('affair')} &body=Nombre: ${form.get('fullName')} 
			// Correo: ${form.get('email')} 
			// Teléfono: ${form.get('phone')} 
			// Mensaje: ${form.get('message')}`);
			// $mailto.click();
			limpiarForm()
		};
	} else {
		mensajeError.classList.add("error");
		mensajeError.innerHTML = "Corregir campos marcados antes de enviar Formulario"
	};
};

formularioContacto.addEventListener("submit", enviarFormulario);