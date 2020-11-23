"use strict";
let elemento1 = document.querySelector("#txtv1");
let elemento2 = document.querySelector("#txtv2");

elemento1.addEventListener("keypress", validarValor);
elemento2.onkeypress = validarValor;

function validarValor(event){
    console.log(event.charCode); // para mostrar cod das letras
    return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46) ? true : event.preventDefault();
}

document.querySelector("#btn").addEventListener("click", function(){
    let valor1 = Number(elemento1.value);
    let valor2 = Number(elemento2.value);
    document.querySelector("#resultado").value = (valor1+valor2);
})