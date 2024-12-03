"use strict"
/* Antiguamente, cuando el script se llama en el head de la pagina
window.addEventListener("load",() => {
let vMensaje = document.getElementById("mensaje")
let btnMostrar = document.getElementById("boton-mostrar")
btnMostrar.addEventListener("click",() =>{
    vMensaje.innerText = "Hola"
})
})
*/
/*Muy antiguamente, cuando el script se llama en el head de la pagina */

window.onload = function() {
    let vMensaje = document.getElementById("mensaje")
    let btnMostrar = document.getElementById("boton-mostrar")
    btnMostrar.addEventListener("click",() =>{
        vMensaje.innerText = "Hola"
    })
    }