"use strict"
let btnCambiar = document.getElementById("boton-cambiar")
let cajitas = document.querySelectorAll(".caja")
//cajitas es un arreglo formado por todos los objetos que usan la clase caja
btnCambiar.addEventListener("click", () => {
    //Con forEach examino cda uno de los elementos del arreglo cajitas
    //forEach es un bucle o estructura de repeticion
    cajitas.forEach(item =>{ 
        //la variable item representará a cada elemento del arreglo que se está examinando
        item.style.backgroundColor = "#FFCC00"
        item.addEventListener("click", () => {
            item.style.backgroundColor = "#00CCFF" 
        })
    }
    )
})