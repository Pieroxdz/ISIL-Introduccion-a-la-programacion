"use strict"
let cajasArriba = document.querySelectorAll("#arriba .caja")
cajasArriba.forEach(item => {
    item.addEventListener("click", () => {
        //item.style.backgroundColor = "#FF3300"
        cajasArriba.forEach(itemCajita => {
            itemCajita.classList.remove("seleccionado")
        })
        item.classList.add("seleccionado")
    })
})

let primeraCajaAbajo = document.querySelector("#abajo .caja")
//Con querySelector se selecciona solo el primero 
//cumple con las especificaciones
primeraCajaAbajo.style.backgroundColor = "#FFCC00"