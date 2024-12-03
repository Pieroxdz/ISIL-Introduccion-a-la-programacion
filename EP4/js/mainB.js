"use strict";

//DECLARAMOS LAS VARIABLES
let vPaises = document.getElementById("paises");
let vElegidos = document.getElementById("elegidos");
let vbtnDerecha = document.getElementById("btnDerecha");
let vbtnIzquierda = document.getElementById("btnIzquierda");
let vbtnDerechaTodos = document.getElementById("btnDerechaTodos");
let vbtnIzquierdaTodos = document.getElementById("btnIzquierdaTodos");

vbtnDerecha.addEventListener("click", () => {

    if(vPaises.selectedIndex !== -1){ // -1 es cuando no he seleccionado nada de la lista

        //Selecciona el indice del elemento hijo de Vpaises
        // console.log(vPaises.selectedIndex);
    
        //Esto devuelve el texto del option seleccionado
        //Por ejemplo -> vPaises.options[0].text = El texto del 1er elemento
    
        //SELECCIONAMOS EL TEXTO 
        let paisSeleccionado = vPaises.options[vPaises.selectedIndex].text;
    
        //SE ELIMINA EL OPTION DE VPaises
        vPaises.options[vPaises.selectedIndex].remove();
    
        //SE CREA EL ELEMENTO EN Y SE LE AGREGA CON TDODO Y TEXTO A vElegidos
        let newOption = document.createElement("OPTION");
        newOption.textContent = paisSeleccionado
        vElegidos.appendChild(newOption);
    }

})

vbtnIzquierda.addEventListener("click", () => {

    if(vElegidos.selectedIndex !== -1){

        let paisSeleccionado = vElegidos.options[vElegidos.selectedIndex].text;
    
        vElegidos.options[vElegidos.selectedIndex].remove();
    
        let newOption = document.createElement("OPTION");
        newOption.textContent = paisSeleccionado
        vPaises.appendChild(newOption);
    }

})

vbtnDerechaTodos.addEventListener("click", () => {
    for(let i=0; i<vPaises.children.length; i++){
        let paisSeleccionado = vPaises.options[i].text;
        let nuevoOption = document.createElement("option");
        nuevoOption.textContent = paisSeleccionado;
        vElegidos.appendChild(nuevoOption);
    }
    vPaises.innerHTML = "";
});

vbtnIzquierdaTodos.addEventListener("click", () => {
    for(let i=0; i<vElegidos.children.length; i++){
        let paisSeleccionado = vElegidos.options[i].text;
        let nuevoOption = document.createElement("option");
        nuevoOption.textContent = paisSeleccionado;
        vPaises.appendChild(nuevoOption);
    }
    vElegidos.innerHTML = "";
});
