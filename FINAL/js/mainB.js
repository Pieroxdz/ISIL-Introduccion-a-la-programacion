"use strict"
for(let i = 0; i <= 500; i++){
    let pelota = document.createElement("DIV");
    pelota.className = "pelota";
    pelota.style.left = Math.random() * window.innerWidth+ "px";
    pelota.style.top = Math.random() * window.innerHeight + "px";
    let colorRed = Math.round(Math.random() * 256);
    let colorGreen = Math.round(Math.random() * 256);
    let colorBlue = Math.round(Math.random() * 256);

    let diametro = Math.random() * 15;
    pelota.style.width = diametro + "px";
    pelota.style.height = diametro + "px";
    pelota.style.opacity = Math.random();

    pelota.style.background = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`
    document.body.appendChild(pelota);
}
