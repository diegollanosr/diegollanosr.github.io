(() => {
	const $btnSwitch = document.querySelector('#switch');
	const $btnMenu = document.querySelector('#button__menu');
	const $listaNavegacion = document.querySelector('#navegacion__list');
	const $cerrarmenu = document.querySelectorAll('.navegacion__list a[href^="#"]');
	const $changeColor = document.getElementById("cambio_colores");
	const rootStyles = document.documentElement.style;
	const $form = document.querySelector('#formulario')
	const $mailto = document.querySelector('#mailto')

	$btnSwitch.addEventListener('click', () => {
		if ($btnSwitch.classList.contains('active')) {
			$btnSwitch.classList.remove('active')
			document.body.classList.remove('dark')
			rootStyles.setProperty("--color--principal", "#2a74fd")
		} else {
			$btnSwitch.classList.add('active')
			document.body.classList.add('dark')
			rootStyles.setProperty("--color--principal", "#c40f24")
		}
		//document.body.classList.toggle('dark');
		//btnSwitch.classList.toggle('active');
	});

	$btnMenu.addEventListener('click', () => {
		$listaNavegacion.classList.toggle('show');
		$btnMenu.classList.toggle('closed');
	});

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
			$listaNavegacion.classList.remove('show');
			$btnMenu.classList.remove('closed');

		});
		const hash = menuLink.getAttribute("href");
		const target = document.querySelector(hash);
		if (target) {
			observer.observe(target);
		}
	});

	$changeColor.addEventListener('click', (e) => {
		rootStyles.setProperty("--color--principal", e.target.dataset.color)

	})

	$form.addEventListener('submit', controlFormulario )

	function controlFormulario(event) {
		event.preventDefault()
		if ($form.fullName.value == "") {
			alert("Campo nombre es obligatorio")
			$form.nombre.focus()

		} else if ($form.email.value == "") {
			alert("Campo e-mail es obligatorio")
			$form.email.focus()

		} else if ($form.affair.value == "") {
			alert("Campo Asunto es obligatorio")
			$form.asunto.focus()

		} else if ($form.message.value == ""){
			alert("Campo Mensaje es obligatorio")
			$form.message.focus()

		} else if ($form.email.value.indexOf('@') == -1 ||
			$form.email.value.indexOf('.') == -1) {
			alert("e-mail inválido")
		}
		const form = new FormData(this)
		$mailto.setAttribute('href', `mailto:dlrasesores17@gmail.com?subject= Asunto: ${form.get('affair')} &body=Nombre: ${form.get('fullName')} 
		Correo: ${form.get('email')} 
		Teléfono: ${form.get('phone')} 
		Mensaje: ${form.get('message')}`)
		$mailto.click()
	}
})()
