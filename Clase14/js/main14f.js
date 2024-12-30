"use strict"

//SELECCIONAMOS EL CONTENEDOR PADRE Y LE DAMOS ESTILOS
let vImagenes = document.getElementById("visor");
vImagenes.style.height = "480px";
vImagenes.style.width = "960px";
vImagenes.style.overflow = "hidden";
vImagenes.style.position = "relative";

//CREAMOS UN CONTENEDOR PARA MOSTRAR EL NUM DE LA IMAGEN
let vContador = document.createElement("DIV");
vContador.style.position = "absolute"
vContador.style.backgroundColor = "#FFFFFF"
vContador.style.top = 0
let posicion = 1;
vContador.innerText = posicion;
vImagenes.appendChild(vContador)


//CREAMOS UN CONTENEDOR PARA MOSTRAR EL TITLE DE LA IMG
let tituloImagen = document.createElement("DIV");
tituloImagen.style.position = "absolute"
tituloImagen.style.fontSize = "72px"
tituloImagen.style.bottom = 0
tituloImagen.style.color = "#FFFFFF"
vImagenes.appendChild(tituloImagen)



const imagenes = document.querySelectorAll(" #visor img");
const totalImagenes = imagenes.length;
// console.log(totalImagenes);

let imagenInicial = vImagenes.querySelector("img")
let titulo = imagenInicial.getAttribute("title")
tituloImagen.innerText = titulo

const cambiarImagen = () => {
    //Así se tiene la 1era imagen del grupo
    let primeraImagen = vImagenes.querySelector("img");
    vImagenes.appendChild(primeraImagen)

    let nuevaPrimeraImagen = vImagenes.querySelector("img");
    let titulo = nuevaPrimeraImagen.getAttribute("title");
    tituloImagen.innerText = titulo
    
    posicion++
    if (posicion > totalImagenes) {
        posicion = 1;
    }
    vContador.innerText = posicion;
}

setInterval(cambiarImagen, 1000);