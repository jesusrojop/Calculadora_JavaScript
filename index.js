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
		document.querySelector('.valor-inferior').value = ''
	})

	const borrarUno = document.querySelector("#borrarUno")
	borrarUno.addEventListener('click', ()=> {
		console.log("soy borrar uno");
		document.querySelector('.valor-inferior').value += ''
	})

	const operadorIgual = document.querySelector("#operadorIgual")
	operadorIgual.addEventListener('click', () => {
		console.log("soy igual")
		document.querySelector('.valor-inferior').value = ''
	})

	// saisaijsajadsajs

	
	//* obtenccion de numeros

	const numeroCero = document.querySelector("#cero")
	numeroCero.addEventListener('click', () => {
		console.log("soy cero")
		document.querySelector('.valor-inferior').value += 0
	})

	const numeroUno = document.querySelector("#uno")
	numeroUno.addEventListener('click', () => {
		console.log("soy uno");
		document.querySelector('.valor-inferior').value += 1
	})

	const numeroDos = document.querySelector("#dos")
	numeroDos.addEventListener('click', () => {
		console.log("soy dos");
		document.querySelector('.valor-inferior').value += 2
	})

	const numeroTres = document.querySelector("#tres")
	numeroTres.addEventListener('click', () => {
		console.log("soy tres")
		document.querySelector('.valor-inferior').value += 3
	})

	const numeroCuatro = document.querySelector("#cuatro")
	numeroCuatro.addEventListener('click', () => {
		console.log("soy cuatro")
		document.querySelector('.valor-inferior').value += 4
	})

	const numeroCinco = document.querySelector("#cinco")
	numeroCinco.addEventListener('click', () => {
		console.log("soy cinco")
		document.querySelector('.valor-inferior').value += 5
	})

	const numeroSeis = document.querySelector("#seis")
	numeroSeis.addEventListener('click', () => {
		console.log("soy seis")
		document.querySelector('.valor-inferior').value += 6
	})

	const numeroSiete = document.querySelector("#siete")
	numeroSiete.addEventListener('click', () => {
		console.log("soy siete")
		document.querySelector('.valor-inferior').value += 7
	})

	const numeroOcho = document.querySelector("#ocho")
	numeroOcho.addEventListener('click', () => {
		console.log("soy ocho")
		document.querySelector('.valor-inferior').value += 8
	})

	const numeroNueve = document.querySelector("#nueve")
	numeroNueve.addEventListener('click', () => {
		console.log("soy nueve")
		document.querySelector('.valor-inferior').value += 9
	})

	const caracterDecimal = document.querySelector("#punto")
	caracterDecimal.addEventListener('click', () => {
		console.log("soy punto")
		document.querySelector('.valor-inferior').value += '.'
	})


	//* obtencion de operadores

	const operadorDivision = document.querySelector("#dividir")
	operadorDivision.addEventListener('click', () => {
		console.log("soy division")
		document.querySelector('.valor-inferior').value += ' / '
	})

	const operadorMultiplicar = document.querySelector("#multiplicar")
	operadorMultiplicar.addEventListener('click', () => {
		console.log("soy multiplicacion")
		document.querySelector('.valor-inferior').value += ' X '
	})

	const operadorSuma = document.querySelector("#sumar")
	operadorSuma.addEventListener('click', () => {
		console.log("soy suma")
		document.querySelector('.valor-inferior').value += ' + '
	})

	const operadorResta = document.querySelector("#restar")
	operadorResta.addEventListener('click', () => {
		console.log("soy resta")
		document.querySelector('.valor-inferior').value += ' - '
	})

	//* Funcionalidad del boton C para borrar todo
	


})

