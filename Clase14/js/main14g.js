"use strict"
const vReporte = document.getElementById("reporte")
let donativo;
do {
    donativo = Number(prompt("Ingresa tú donativo"));
    if( !isNaN(donativo) && donativo > 0 ){
        const caja = document.createElement("DIV");
        caja.classList.add("cajita")
        caja.innerText = donativo
        vReporte.appendChild(caja)
    }
} while (donativo > 0)