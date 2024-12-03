"use strict"
let cajasAbajo = document.querySelectorAll("#abajo .caja")
//#abajo .caja ---> El espacio significa dentro de 
cajasAbajo.forEach(item => {
    item.addEventListener("click",() => {       
    item.style.transform = "rotate(45deg)"
    })
})