'use strict'

window.addEventListener('load', ()=> {


	// ! obtener teclas presionadas
	// window.addEventListener('keydown', (key) => {
	// 	console.log(key.key);
	// } )


	//* Obtencion de comandos
	const borrarTodo = document.querySelector("#borrarTodo")
	const borrarUno = document.querySelector("#borrarUno")
	const operadorIgual = document.querySelector("#operadorIgual")

	//* Funcion de cada comando

	// BORRAR TODO
	borrarTodo.addEventListener('click', () => {
		console.log("soy c");
		document.querySelector('.valor-inferior').value = ''
	})

	// BORRAR UNO
	borrarUno.addEventListener('click', ()=> {
		console.log("soy borrar uno");
		console.log(document.querySelector
			('.valor-inferior').value)
	})

	// IGUAL
	operadorIgual.addEventListener('click', () => {
		console.log("soy igual")
		document.querySelector('.valor-inferior').value = ''
	})

	//* Obtencion de numeros

	const numeroCero = document.querySelector("#cero")
	const numeroUno = document.querySelector("#uno")
	const numeroDos = document.querySelector("#dos")
	const numeroTres = document.querySelector("#tres")
	const numeroCuatro = document.querySelector("#cuatro")
	const numeroCinco = document.querySelector("#cinco")
	const numeroSeis = document.querySelector("#seis")
	const numeroSiete = document.querySelector("#siete")
	const numeroOcho = document.querySelector("#ocho")
	const numeroNueve = document.querySelector("#nueve")
	const caracterDecimal = document.querySelector("#punto")


	//* Funcionalidad de cada numero

	// NUMERO CERO
	numeroCero.addEventListener('click', () => {
		console.log("soy cero")
		document.querySelector('.valor-inferior').value += '0'
	})

	// NUMERO UNO
	numeroUno.addEventListener('click', () => {
		console.log("soy uno");
		document.querySelector('.valor-inferior').value += '1'
	})

	// NUMERO DOS
	numeroDos.addEventListener('click', () => {
		console.log("soy dos");
		document.querySelector('.valor-inferior').value += '2'
	})

	// NUMERO TRES
	numeroTres.addEventListener('click', () => {
		console.log("soy tres")
		document.querySelector('.valor-inferior').value += '3'
	})

	// NUMERO CUATRO
	numeroCuatro.addEventListener('click', () => {
		console.log("soy cuatro")
		document.querySelector('.valor-inferior').value += '4'
	})

	// NUMERO CINCO
	numeroCinco.addEventListener('click', () => {
		console.log("soy cinco")
		document.querySelector('.valor-inferior').value += '5'
	})

	// NUMERO SEIS
	numeroSeis.addEventListener('click', () => {
		console.log("soy seis")
		document.querySelector('.valor-inferior').value += '6'
	})

	// NUMERO SIETE
	numeroSiete.addEventListener('click', () => {
		console.log("soy siete")
		document.querySelector('.valor-inferior').value += '7'
	})

	// NUMERO OCHO	
	numeroOcho.addEventListener('click', () => {
		console.log("soy ocho")
		document.querySelector('.valor-inferior').value += '8'
	})

	// NUMERO NUEVE
	numeroNueve.addEventListener('click', () => {
		console.log("soy nueve")
		document.querySelector('.valor-inferior').value += '9'
	})

	// CARACTER DECIMAL
	caracterDecimal.addEventListener('click', () => {
		console.log("soy punto")
		document.querySelector('.valor-inferior').value += '.'
	})


	//* Obtencion de operadores

	const operadorDivision = document.querySelector("#dividir")
	const operadorMultiplicar = document.querySelector("#multiplicar")
	const operadorSuma = document.querySelector("#sumar")
	const operadorResta = document.querySelector("#restar")


	//* Funcionalidad de cada operador

	// DIVISION
	operadorDivision.addEventListener('click', () => {
		console.log("soy division")
		document.querySelector('.valor-inferior').value += ' / '
	})

	// MULTIPLICACION
	operadorMultiplicar.addEventListener('click', () => {
		console.log("soy multiplicacion")
		document.querySelector('.valor-inferior').value += ' X '
	})

	// SUMA
	operadorSuma.addEventListener('click', () => {
		console.log("soy suma")
		document.querySelector('.valor-inferior').value += ' + '
	})

	// RESTA
	operadorResta.addEventListener('click', () => {
		console.log("soy resta")
		document.querySelector('.valor-inferior').value += ' - '
	})


})

