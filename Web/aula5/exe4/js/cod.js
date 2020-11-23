"use strict";
let numero0, numero1;

function calculoPotencia(n0, n1){
let potencia = Math.pow(n0, n1);
console.log(potencia);
alert(`resultado: ${potencia}`)
}

function calculoArredondar(n0){
let arredondar = Math.round(n0);
console.log(arredondar);
alert(`resultado: ${arredondar}`)
}

function calculoRaiz(n0){
    let raiz = Math.sqrt(n0);
    console.log(raiz);
    alert(`resultado: ${raiz}`)
}

// ================== botão potencia ==================
document.querySelector("#btn01").addEventListener("click", function(){
    numero0 = Number(prompt("Entre com o numerador: "));
    numero1 = Number(prompt("Entre com o expoente: "));
    calculoPotencia(numero0, numero1)
})

// ================== botão arredondar =================
document.querySelector("#btn02").addEventListener("click", function(){
    numero0 = Number(prompt("Entre com um valor decimal: "));
    calculoArredondar(numero0)
})

// ================== botão raiz =======================
document.querySelector("#btn03").addEventListener("click", function(){
    numero0 = Number(prompt("Entre com um número para calcular a sua raiz quadrada: "));
    calculoRaiz(numero0)
})