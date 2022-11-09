'use strict'

window.addEventListener('load', ()=> {

	//* Obtencion de comandos
	const borrarTodo = document.querySelector("#borrarTodo")
	const borrarUno = document.querySelector("#borrarUno")
	const operadorIgual = document.querySelector("#operadorIgual")
	const pantallaResultado = document.querySelector('.valor-inferior')

	//! Funcionalidad de cada comando

	// BORRAR TODO
	borrarTodo.addEventListener('click', () => {
		pantallaResultado.value = ''
	})

	// BORRAR UNO
	borrarUno.addEventListener('click', () => {
		pantallaResultado.value
	})

	// IGUAL
	operadorIgual.addEventListener('click', () => {
		pantallaResultado.value = eval(pantallaResultado.value)
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


	//! Funcionalidad de cada numero

	// NUMERO CERO
	numeroCero.addEventListener('click', () => {
		pantallaResultado.value += '0'
	})

	// NUMERO UNO
	numeroUno.addEventListener('click', () => {
		pantallaResultado.value += '1'
	})

	// NUMERO DOS
	numeroDos.addEventListener('click', () => {
		pantallaResultado.value += '2'
	})

	// NUMERO TRES
	numeroTres.addEventListener('click', () => {
		pantallaResultado.value += '3'
	})

	// NUMERO CUATRO
	numeroCuatro.addEventListener('click', () => {
		pantallaResultado.value += '4'
	})

	// NUMERO CINCO
	numeroCinco.addEventListener('click', () => {
		pantallaResultado.value += '5'
	})

	// NUMERO SEIS
	numeroSeis.addEventListener('click', () => {
		pantallaResultado.value += '6'
	})

	// NUMERO SIETE
	numeroSiete.addEventListener('click', () => {
		pantallaResultado.value += '7'
	})

	// NUMERO OCHO	
	numeroOcho.addEventListener('click', () => {
		pantallaResultado.value += '8'
	})

	// NUMERO NUEVE
	numeroNueve.addEventListener('click', () => {
		pantallaResultado.value += '9'
	})

	// CARACTER DECIMAL
	caracterDecimal.addEventListener('click', () => {
		let lastChar = pantallaResultado.value[pantallaResultado.value.length - 1]
		if (lastChar != ' ' && lastChar != '' && lastChar != undefined) {
			pantallaResultado.value += '.'
		}
	})

	//* Obtencion de operadores

	const operadorDivision = document.querySelector("#dividir")
	const operadorMultiplicar = document.querySelector("#multiplicar")
	const operadorSuma = document.querySelector("#sumar")
	const operadorResta = document.querySelector("#restar")


	//! Funcionalidad de cada operador

	// DIVISION
	operadorDivision.addEventListener('click', () => {
		pantallaResultado.value += '/'
	})

	// MULTIPLICACION
	operadorMultiplicar.addEventListener('click', () => {
		pantallaResultado.value += '*'
	})

	// SUMA
	operadorSuma.addEventListener('click', () => {
		pantallaResultado.value += '+'
	})

	// RESTA
	operadorResta.addEventListener('click', () => {
		pantallaResultado.value += '-'
	})
})

