const $body = document.getElementById('body');
const $btnDarkMode = document.getElementById('botonModoOscuro');
const $listaNav = document.querySelectorAll('.navegacionUl a[href^="#"]');
/* botones de ver mas*/
const $vermasProg = document.getElementById("vermasProg");
const $targetsProg = document.getElementById('targetsProg');
const $vermasDisenho = document.getElementById("vermasDisenho");
const $targetsDisenho = document.getElementById('targetsDisenho')
const $skillCont = document.getElementById("skillCont");
const $targetSkillCont = document.getElementById('targetSkillCont')
const $skillProg = document.getElementById("skillProg");
const $targetSkillProg = document.getElementById('targetSkillProg')
const $skillVentas = document.getElementById("skillVentas");
const $targetSkillVentas = document.getElementById('targetSkillVentas')
const $botonsoftskills = document.getElementById("botonsoftskills");
const $targetSoftSkills = document.getElementById('targetSoftSkills')
/* botones de ver mas*/

/* cambio de visualizacion*/
window.addEventListener('scroll', ()=>{
    $body.classList.toggle('scroll', window.scrollY > 20)
})

/* modo oscuro*/
$btnDarkMode.addEventListener('click', ()=> {
    $body.classList.toggle("dark")
})

/*barra navegacion*/
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute("id");
			const menuLink = document.querySelector(`.navegacionUl a[href="#${id}"]`);
			
			if (entry.isIntersecting) {
				menuLink.classList.add("mostrar");
			}
			else {
					menuLink.classList.remove("mostrar");
			}
		})
	},
    { rootMargin: "-30% 0px -70% 0px" }
);
$listaNav.forEach(menuLink => {
	const hash = menuLink.getAttribute("href");
	const target = document.querySelector(hash);
	if (target) {
		observer.observe(target);
	}
});
//Actualizar Año	
const $anhoActual = document.getElementById('anhoActual');
$anhoActual.innerHTML = new Date().getFullYear();
/*botones ver mas*/
function ocultarProg(boton, target, texto) {
		if(target.classList.contains(texto)){
			boton.innerHTML= "Ocultar -";
			target.classList.toggle(texto);
		}else{
			boton.innerHTML= "Mostrar +";
			target.classList.toggle(texto);
		}
} 
$vermasProg.addEventListener('click', ()=>{ocultarProg($vermasProg,$targetsProg, "ocultarProg")})
$vermasDisenho.addEventListener('click', ()=>{ocultarProg($vermasDisenho,$targetsDisenho, "ocultarTarg")})
$skillCont.addEventListener('click', ()=>{ocultarProg($skillCont,$targetSkillCont, "ocultarTarg")})
$skillProg.addEventListener('click', ()=>{ocultarProg($skillProg,$targetSkillProg, "ocultarTarg")})
$skillVentas.addEventListener('click', ()=>{ocultarProg($skillVentas,$targetSkillVentas, "ocultarTarg")})
$botonsoftskills.addEventListener('click', ()=>{ocultarProg($botonsoftskills,$targetSoftSkills, "ocultarTarg")})