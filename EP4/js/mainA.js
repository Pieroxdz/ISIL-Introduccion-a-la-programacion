"use strict";
let txtNombre = document.getElementById("txtNombre");
let txtPrecio = document.getElementById("txtPrecio");
let txtCantidad = document.getElementById("txtCantidad");
let btnAgregar = document.getElementById("btnAgregar");
let bodyProductos = document.getElementById("body-productos");
let cajaTotal = document.getElementById("cajaTotal");
let contenidoTabla = "";
let total = 0;

btnAgregar.addEventListener("click", () => {
    /* ESTÁS VARIABLES SOLO EXISTEN DENTRO DE LA FUNCIÓN */
    let nombre = txtNombre.value;
    let precio = txtPrecio.value;
    let cantidad = txtCantidad.value;
    let subtotal = precio * cantidad;
    total += subtotal;
    cajaTotal.innerText = "Total " + total
    
    let fila = "<tr>" +
    "<td>" + nombre + "</td>" +
    "<td>" + precio + "</td>" +
    "<td>" + cantidad + "</td>" +
    "<td>" + subtotal + "</td>" +
                    "<td> <button class='btnEliminar'>Eliminar</button> </td>" +
                "</tr>"

    contenidoTabla += fila;
    bodyProductos.innerHTML = contenidoTabla;

    let botonesEliminar = document.querySelectorAll("#body-productos .btnEliminar");

    for (let i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener("click", (event) => {
            let posicionFila = event.target.parentNode.parentNode.rowIndex;
            let subtotalQuitar = bodyProductos.getElementsByTagName("tr")[posicionFila - 1]
            .getElementsByTagName("td")[3].innerText;
            total -= subtotalQuitar;
            cajaTotal.innerText = "Total " + total

            bodyProductos.getElementsByTagName("tr")[posicionFila - 1].remove();

            contenidoTabla = bodyProductos.innerHTML;
        })
    }
})