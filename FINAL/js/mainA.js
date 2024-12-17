"use strict"
let bola = document.getElementById("bola");
let canion = document.getElementById("canion");


let posX = 150;
let posY = 300;
let intervalo;

let velocidad = 10;
let anguloU = 0;
let anguloS = 0;
let anguloR = 0;
let aceleracion = 0.1;

let velocidadX = 0;
let velocidadY = 0;

bola.style.left = posX + "px";
bola.style.top = posY + "px";

canion.style.left = posX + "px";
canion.style.top = posY + "px";
canion.style.transformOrigin = "12.5% 50%";


const mover = () => {
    velocidadY += aceleracion;
    posX += velocidadX;
    posY += velocidadY;

    bola.style.left = posX + "px"
    bola.style.top = posY + "px"
}

window.addEventListener("keydown", (event) => {
    // console.log(event.key);
    switch (event.key) {
        case "Tab":
            //Conversion a radianes
            anguloR = anguloS * Math.PI / 180;
            velocidadX = velocidad * Math.cos(anguloR);
            velocidadY = velocidad * Math.sin(anguloR);
            intervalo = setInterval(mover, 20);
            break;
        case "ArrowLeft":
            anguloU++;
            break;
        case "ArrowRight":
            anguloU--;
            break;
    }
    anguloS = -anguloU
    document.title = anguloU;
    canion.style.transform = "rotate(" + anguloS + "deg)"
})

window.addEventListener("mousemove", (event) => {
    document.title = event.pageX + " , " + event.pageY;
    anguloR = Math.atan2((event.pageY - parseInt(canion.style.top)), (event.pageX - parseInt(canion.style.left)));
    anguloS = anguloR * 180 / Math.PI;
    anguloU = -anguloS;
    console.log(anguloS);
    canion.style.transform = "rotate(" + anguloS + "deg)"
});