"use strict"
let personaje = document.getElementById("personaje");

let flechaDerecha = false;
let flechaIzquierda = false;
let flechaArriba = false;
let flechaAbajo = false;
let sinPresionar = true;

let posX = 1000;
let velocidadX = 10;
let posY = 400;
let velocidadY = 10;

let fotograma = 0;

// Establecer la posición inicial del personaje
personaje.style.left = `${posX}px`;
personaje.style.top = `${posY}px`;

const animar = () => {
    if (sinPresionar) {
        personaje.src = `./sprites/Idle__00${fotograma}.png`
        personaje.style.transform = ""; // Reinicia transformaciones
    }
    if (flechaDerecha) {
        personaje.src = `./sprites/Run__00${fotograma}.png`
        moverX(1)
    }
    if (flechaIzquierda) {
        personaje.src = `./sprites/Run__00${fotograma}.png`
        moverX(-1)
    }
    if (flechaArriba) {
        personaje.src = `./sprites/Climb_00${fotograma}.png`
        moverY(-1)
    }
    if (flechaAbajo) {
        personaje.src = `./sprites/Climb_00${fotograma}.png`
        moverY(1)
    }


    fotograma++
    if (fotograma === 10) {
        fotograma = 0;
    }
}

const moverX = (orientacionX) => {
    posX += orientacionX * velocidadX;
    personaje.style.left = `${posX}px`;
    personaje.style.transform = "scaleX(" + orientacionX + ")"
}

const moverY = (orientacionY) => {
    posY += orientacionY * velocidadY;
    personaje.style.top = `${posY}px`
}

document.body.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight":
            flechaDerecha = true;
            sinPresionar = false;
            break;
        case "ArrowLeft":
            flechaIzquierda = true;
            sinPresionar = false;
            break;
        case "ArrowUp":
            flechaArriba = true;
            sinPresionar = false;
            break;
        case "ArrowDown":
            flechaAbajo = true;
            sinPresionar = false;
            break;
    }
})

document.body.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "ArrowRight":
            flechaDerecha = false;
            sinPresionar = true;
            break;
        case "ArrowLeft":
            flechaIzquierda = false;
            sinPresionar = true;
            break;
        case "ArrowUp":
            flechaArriba= false;
            sinPresionar = true;
            break;
        case "ArrowDown":
            flechaAbajo = false;
            sinPresionar = true;
            break;
    }
})

setInterval(animar, 50);
