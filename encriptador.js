/**
 * Explicación: Ingresar un texto al cual al momento de encriptar cambie sus vocales por una "palabra aletoria" (hola = h"fdhjh"l"dsdjksj") y viceversa.
 * 
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"

    Variables disponibles: Texto para encriptar/desencriptar, "traductor (vocales clave)"

    Proceso de encriptado/desencriptado:  
        1-. Definir texto y traducciones (utilizar un objeto)
        2-. Recorrer la palabra y separar por caracter
        3-. Acceder a las llaves del objeto "traductor"
        4-. Recorrer 'nuevoTexto' y mostrar cada elemento en consola
        5-. Comparar elementos entre 'traductor' y 'nuevoTexto'

    Proceso de mostrar encriptado/desencriptado de la palabra en pantalla
        1-. Ocultar HTML del recuadro (img y los 2 p)
        2-. Mostrar el HTML si es que al momento de accionar botones el input está vacio y mantener oculto si se ingresa una palabra y se accionan los botones de acuerdo a lo que se quiere hacer
        3-. Al momento de mantener oculto el HTML por el ingreso de una palabra que se quiere encriptar/desncriptar, mostrar ese resultado en el recuadro 
 */

// Objeto utilizado para la traducción

const traductor = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

// Encriptado

let texto = ''

function encriptar(){
    texto = document.querySelector('#input').value
    texto = cleanStrings(texto)
    let nuevoTexto = texto.split('')
    for (let i = 0; i < nuevoTexto.length; i++) {
        for (let j = 0; j < Object.keys(traductor).length; j++) {
            if (nuevoTexto[i] == Object.keys(traductor)[j]) {
                nuevoTexto[i] = Object.values(traductor) [j]
            }
        }
    }
    if(!validarRecuadro(nuevoTexto.join(''))) {
        imprimirRecuadro(nuevoTexto.join(''))
    }
    
}

document.querySelector('#btn-encript').onclick = encriptar

// Desencriptado

function desencriptar() {
    texto = document.querySelector('#input').value
    texto = cleanStrings(texto)
    texto = texto.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u')
    if(!validarRecuadro(texto)){
        imprimirRecuadro(texto)
    }
}

document.querySelector('#btn-desencript').onclick = desencriptar

// Posición del encriptado/desencriptado en el recuadro

function imprimirRecuadro(palabra) {
    let textoEncriptado = document.querySelector('.texto-encriptado')
    let text = document.createElement('p')
    text.innerHTML = palabra
    text.classList.add('texto-traducido')
    textoEncriptado.innerHTML = ''
    textoEncriptado.appendChild(text)
}

// Validación de si el input viene vacio 

function validarRecuadro(textoVacio) {
    if(textoVacio === '') {
        let textoEncriptado = document.querySelector('.texto-encriptado')
        textoEncriptado.innerHTML = `<div id="img-text">
                                            <img class="imagenm" src="img/Muñeco.png" alt="muñeco">
                                            <div class="textos">
                                                <p class="texto1">Ningún mensaje fue encontrado</p>
                                                <p class="texto2">Ingresa el texto que desees encriptar o desencriptar</p>
                                            </div>
                                    </div>`
        return true
    } else {
        return false
    }
}

// Input traduzca texto tanto en mayúsculas como en minúsculas, con o sin tilde

function cleanStrings (str){
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase(); 
}