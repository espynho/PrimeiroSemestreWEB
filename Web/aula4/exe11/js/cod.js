"use strict";
// ========================= função =====================
function calcular(){
    let numero = Number(document.querySelector("#cx_entrada").value);
    let soma = 0 ;
    for(let cont = 0;cont <= numero; cont++){
        soma += cont;
    }
    document.querySelector("#cx_saida").value = soma;
    console.log(soma);
}
// ========================= botão ======================
document.querySelector("#btn0").addEventListener("click" , function(){
calcular();
})