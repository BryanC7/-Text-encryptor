/**
 * Explicación: Ingresar un texto al cual al momento de encriptar cambie sus vocales por una "palabra aletoria" (hola = h"fdhjh"l"dsdjksj") y viceversa.
 * 
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"

    Variables disponibles: Texto para encriptar/desencriptar, "traductor (vocales clave)"
    Proceso de encriptado:  
    1-. Definir texto y traducciones (utilizar un objeto)
    2-. Recorrer la palabra y separar por caracter
    3-. Acceder a las llaves del objeto "traductor"
    4-. Recorrer 'nuevoTexto' y mostrar cada elemento en consola
    5-. Comparar elementos entre 'traductor' y 'nuevoTexto'
 */

const traductor = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}
// console.log(Object.keys(traductor) )

let texto = ''

function encriptar(){
    texto = document.querySelector('#input').value
    let nuevoTexto = texto.split('')
    for (let i = 0; i < nuevoTexto.length; i++) {
        for (let j = 0; j < Object.keys(traductor).length; j++) {
            if (nuevoTexto[i] == Object.keys(traductor)[j]) {
                nuevoTexto[i] = Object.values(traductor) [j]
            }
        }
    }
    console.log(nuevoTexto.join(''))
    return nuevoTexto.join('')
}

document.querySelector('#btn-encript').onclick = encriptar

// console.log(encriptar()) 

function desencriptar() {
    texto = document.querySelector('#input').value
    texto = texto.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u')
    console.log(texto)
}

document.querySelector('#btn-desencript').onclick = desencriptar
