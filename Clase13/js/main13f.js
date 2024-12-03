"use strict"
let elementosMenu = [
    "Chiclayo", "Puno", "Arequipa", "Trujillo", "Iquitos","Huancayork", "Ica"
]
elementosMenu.sort()
let vMensaje = document.getElementById("mensaje")
let menuPrincipal = document.getElementById("menu-principal")
//Con map se examinan los elementos de un arreglo
elementosMenu.map((item,index) => { 
    console.log(item)
    let menuItem = document.createElement("li")
    let menuLink = document.createElement("a")
    menuLink.setAttribute("href","#")
    menuItem.appendChild(menuLink)

    menuLink.innerText = item

    let espacioNumero = document.createElement("span")
    menuLink.appendChild(espacioNumero)
    espacioNumero.innerText = index + 1

    menuPrincipal.appendChild(menuItem)

    menuLink.addEventListener("click", () => {
        let menuLinks = document.querySelectorAll("#menu-principal li a")
        menuLinks.forEach(iMenu => {
            iMenu.classList.remove("seleccionado")
        })
        vMensaje.innerText = item
        menuLink.classList.add("seleccionado")
    })

})