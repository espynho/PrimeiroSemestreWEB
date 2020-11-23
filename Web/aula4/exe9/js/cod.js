"use strict";
function calculos(operacao){
let numero1 = Number(document.querySelector("#cx0").value);
let numero2 = Number(document.querySelector("#cx1").value);
let resultado ;
switch(operacao){
    // ====================== calculo soma ================
    case "soma" : resultado = numero1 + numero2;
    document.querySelector("#cx_resultado").value = resultado;
break;
// ====================== calculo subtração ===========
    case "sub" : resultado = numero1 - numero2;
    document.querySelector("#cx_resultado").value = resultado;
break;
// ====================== calculo multiplicação =======
    case "mult" : resultado = numero1 * numero2;
    document.querySelector("#cx_resultado").value = resultado;
break;
// ====================== calculo divisão =============
    case "div" : resultado = numero1 / numero2;
    document.querySelector("#cx_resultado").value = resultado;
break;
}}
// ====================== botão soma ==================
document.querySelector("#btn_soma").addEventListener("click" , function(){
   calculos("soma");    
})
// ====================== botão subtração =============
document.querySelector("#btn_subtracao").addEventListener("click" , function(){
    calculos("sub");
})
// ====================== botão multiplicaçao =========
document.querySelector("#btn_multiplicacao").addEventListener("click" , function(){
    calculos("mult");
})
// ====================== botão divisão ===============
document.querySelector("#btn_divisao").addEventListener("click" , function(){
    calculos("div");
})