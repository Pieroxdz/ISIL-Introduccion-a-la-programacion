"use strict"
let bola = document.getElementById("bola");
let posX = 150;
let posY = 20;
let intervalo;

let velocidad = 5;
anguloU = 45;
let anguloS = -anguloU;
//Conversion a radianes
let anguloR = anguloS * Math.PI/180;

let velocidadX = velocidad * Math.cos(anguloR);
let velocidadY = velocidad * Math.sin(anguloR);

bola.style.left = posX + "px";
bola.style.top = posY + "px";


const mover = () =>{
    posY += velocidadY
    posX += velocidadX

    bola.style.top = posY + "px"
    bola.style.left = posX + "px"
}

window.addEventListener("keydown", (event) =>{
    intervalo = setInterval(mover, 20)
})