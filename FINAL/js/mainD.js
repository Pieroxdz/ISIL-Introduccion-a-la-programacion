"use strict"

class CopoNieve {

    posX = 0;
    posY = 0;
    velocidadY = 1;
    posXInicial = 0;
    diametro = 0;

    constructor(pX, pY, diametro){
        this.copo = document.createElement("DIV");
        this.copo.className = "copo-nieve"
        this.posX = pX;
        this.posY = pY;
        this.posXInicial = pX;
        this.diametro = diametro;
        this.copo.style.left = pX + "px"
        this.copo.style.top = pY + "px"
        this.copo.style.width = diametro + "px"
        this.copo.style.height = diametro + "px"
    }
    
    mover = () => {
        this.intervalo = setInterval( () => {
            this.cambiarPosicion();
        },20)
    }
    
    cambiarPosicion = () =>{
        this.posY += this.velocidadY
        this.posX = Math.cos(this.posY * Math.PI/180) * 100 + this.posXInicial;
        if(this.posY >= window.innerHeight - this.diametro){
            this.posY = window.innerHeight - this.diametro
            this.detener();
        }
        this.copo.style.top = this.posY + "px"
        this.copo.style.left = this.posX + "px"
    }

    detener = () => {
        clearInterval(this.intervalo);
        this.copo.style.animation = "pause";
        this.copo.parentNode.removeChild(this.copo);
    }

}

const crearCopoNieve = () => {
    let nuevoCopoNieve = new CopoNieve(Math.random() * window.innerWidth, 0, Math.random() * 10 + 10);
    nuevoCopoNieve.mover();
    document.body.appendChild(nuevoCopoNieve.copo);
}

setInterval(crearCopoNieve, 500);
