"use strict";

//DECLARAMOS LAS VARIABLES

let vPaises = document.getElementById("paises");
let vElegidos = document.getElementById("elegidos");
let vListaFinal = document.getElementById("listaFinal");

let vbtnDerecha1 = document.getElementById("btnDerecha");
let vbtnIzquierda1 = document.getElementById("btnIzquierda");
let vbtnDerechaTodos1 = document.getElementById("btnDerechaTodos");
let vbtnIzquierdaTodos1 = document.getElementById("btnIzquierdaTodos");

let vbtnDerecha2 = document.getElementById("btnDerecha2");
let vbtnIzquierda2 = document.getElementById("btnIzquierda2");
let vbtnDerechaTodos2 = document.getElementById("btnDerechaTodos2");
let vbtnIzquierdaTodos2 = document.getElementById("btnIzquierdaTodos2");





function moverElemento (contPadre, contHijo) {

    if(contPadre.selectedIndex !== -1){ // -1 es cuando no he seleccionado nada de la lista

        //Selecciona el indice del elemento hijo de Vpaises
        // console.log(vPaises.selectedIndex);
    
        //Esto devuelve el texto del option seleccionado
        //Por ejemplo -> vPaises.options[0].text = El texto del 1er elemento
    
        //SELECCIONAMOS EL TEXTO 
        let paisSeleccionado = contPadre.options[contPadre.selectedIndex].text;
    
        //SE ELIMINA EL OPTION DE VPaises
        contPadre.options[contPadre.selectedIndex].remove();
    
        //SE CREA EL ELEMENTO
        let newOption = document.createElement("OPTION");
        newOption.textContent = paisSeleccionado

        //SE AGREGA AL ELEMENTO ELEGIDO
        contHijo.appendChild(newOption);
    }

}


function moverTodosLosElementos(contPadre, contHijo) {
    for(let i=0; i<contPadre.children.length; i++){
        let paisSeleccionado = contPadre.options[i].text;
        let nuevoOption = document.createElement("option");
        nuevoOption.textContent = paisSeleccionado;
        contHijo.appendChild(nuevoOption);
    }
    contPadre.innerHTML = "";
};

vbtnDerecha1.addEventListener("click", function() { moverElemento(vPaises, vElegidos); });
vbtnIzquierda1.addEventListener("click", function() { moverElemento(vElegidos, vPaises); });
vbtnDerechaTodos1.addEventListener("click", function() { moverTodosLosElementos(vPaises, vElegidos); });
vbtnIzquierdaTodos1.addEventListener("click", function() { moverTodosLosElementos(vElegidos, vPaises); });

vbtnDerecha2.addEventListener("click", function() { moverElemento(vElegidos, vListaFinal); });
vbtnIzquierda2.addEventListener("click", function() { moverElemento(vListaFinal, vElegidos); });
vbtnDerechaTodos2.addEventListener("click", function() { moverTodosLosElementos(vElegidos, vListaFinal); });
vbtnIzquierdaTodos2.addEventListener("click", function() { moverTodosLosElementos(vListaFinal, vElegidos); });


