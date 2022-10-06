'use strict'

window.addEventListener('load', ()=> {


	// ! obtener teclas presionadas
	// window.addEventListener('keydown', (key) => {
	// 	console.log(key.key);
	// } )


	//* obtenccion de comandos
	const borrarTodo = document.querySelector("#borrarTodo")
	borrarTodo.addEventListener('click', () => {
		console.log("soy c");
	})

	const borrarUno = document.querySelector("#borrarUno")
	borrarUno.addEventListener('click', ()=> {
		console.log("soy borrar uno");
	})

	const operadorIgual = document.querySelector("#operadorIgual")
	operadorIgual.addEventListener('click', () => {
		console.log("soy igual")
	})


	
	//* obtenccion de numeros

	const numeroCero = document.querySelector("#cero")
	numeroCero.addEventListener('click', () => {
		console.log("soy cero")
	})

	const numeroUno = document.querySelector("#uno")
	numeroUno.addEventListener('click', () => {
		console.log("soy uno");
	})

	const numeroDos = document.querySelector("#dos")
	numeroDos.addEventListener('click', () => {
		console.log("soy dos");
	})

	const numeroTres = document.querySelector("#tres")
	numeroTres.addEventListener('click', () => {
		console.log("soy tres")
	})

	const numeroCuatro = document.querySelector("#cuatro")
	numeroCuatro.addEventListener('click', () => {
		console.log("soy cuatro")
	})

	const numeroCinco = document.querySelector("#cinco")
	numeroCinco.addEventListener('click', () => {
		console.log("soy cinco")
	})

	const numeroSeis = document.querySelector("#seis")
	numeroSeis.addEventListener('click', () => {
		console.log("soy seis")
	})

	const numeroSiete = document.querySelector("#siete")
	numeroSiete.addEventListener('click', () => {
		console.log("soy siete")
	})

	const numeroOcho = document.querySelector("#ocho")
	numeroOcho.addEventListener('click', () => {
		console.log("soy ocho")
	})

	const numeroNueve = document.querySelector("#nueve")
	numeroNueve.addEventListener('click', () => {
		console.log("soy nueve")
	})

	const caracterDecimal = document.querySelector("#punto")
	caracterDecimal.addEventListener('click', () => {
		console.log("soy punto")
	})


	//* obtencion de operadores

	const operadorDivision = document.querySelector("#dividir")
	operadorDivision.addEventListener('click', () => {
		console.log("soy division")
	})

	const operadorMultiplicar = document.querySelector("#multiplicar")
	operadorMultiplicar.addEventListener('click', () => {
		console.log("soy multiplicacion")
	})

	const operadorSuma = document.querySelector("#sumar")
	operadorSuma.addEventListener('click', () => {
		console.log("soy suma")
	})

	const operadorResta = document.querySelector("#restar")
	operadorResta.addEventListener('click', () => {
		console.log("soy resta")
	})

	//* obtener valores para mostrarlos en el input inferior
	
	const valorInputInferior = document.querySelector(".valor-inferior")
	
	console.log(valorInputInferior);


})