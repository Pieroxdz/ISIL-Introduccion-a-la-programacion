"use strict"
let productos = document.querySelectorAll("#almacen img");
let carrito = document.getElementById("carrito");
let almacen = document.getElementById("almacen");

for(let i = 0; i < productos.length; i++ ){
    productos[i].setAttribute("draggable", "true");
    productos[i].setAttribute("id", "producto" + i);
    productos[i].addEventListener("dragstart", (event) =>{
        event.dataTransfer.setData("articulo", event.target.id)
    })
}

carrito.addEventListener("dragover", (event) =>{
    event.preventDefault();
})

carrito.addEventListener("drop", (event) =>{
    event.preventDefault()
    if(event.target.className === "caja"){
        let data = event.dataTransfer.getData("articulo");
        event.target.appendChild(document.getElementById(data));
    }
    
})

almacen.addEventListener("dragover", (event) => {
    event.preventDefault();
})

almacen.addEventListener("drop", (event) =>{
    event.preventDefault()
    if(event.target.className === "caja"){
        let data = event.dataTransfer.getData("articulo");
        event.target.appendChild(document.getElementById(data));
    }
    
})