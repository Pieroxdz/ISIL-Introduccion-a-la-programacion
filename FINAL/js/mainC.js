"use strict"

// for(let anguloS=0; anguloS <=5000; anguloS+=5){

let anguloS = 0

const crearPelota = () => {
    let pelota = document.createElement("DIV");
    pelota.className = "pelota";
    pelota.style.left = anguloS + "px";
    let anguloR = -anguloS * Math.PI/180;
    pelota.style.top = Math.cos(anguloR) * 150 + 200 + "px";
    document.body.appendChild(pelota);
    anguloS++;
}

// }

setInterval(crearPelota, 10);