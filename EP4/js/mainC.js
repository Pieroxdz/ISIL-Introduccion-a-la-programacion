"use strict"
let bola = document.getElementById("bola");
let posX = 150;
let posY = 20;
let intervalo;

bola.style.left = posX + "px";
bola.style.top = posY + "px";

let velocidadX = 1.5;
let velocidadY = 2;
let aceleracion = 0.1;
let perdida = 0.8;

const mover = () => {
    velocidadY += aceleracion;
    posY += velocidadY;
    posX += velocidadX;

    if (posY >= window.innerHeight - bola.offsetHeight) {
        posY = window.innerHeight - bola.offsetHeight;
        velocidadY = perdida * velocidadY
        if (velocidadY < 0.1) {
            clearInterval(intervalo)
        }
        velocidadY = -velocidadY;
    }

    if (posX >= window.innerWidth - bola.offsetWidth) {
        posX = window.innerWidth - bola.offsetWidth;
        velocidadX = -velocidadX;
    }
    
    if (posX <= 0) {
        posX = 0;
        velocidadX = -velocidadX;
    }

    document.title = velocidadY
    bola.style.top = posY + "px"
    bola.style.left = posX + "px"
}


//1 un segundo se la esta llamando 50 veces
setInterval(mover, 20);