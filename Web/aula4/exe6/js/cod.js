"use strict";


// ========================= calculos ===============================
function calculoVenda(){
    let resultado ;
    let valor_compra = Number(document.getElementById("cxcompra").value);
    let codigo =       Number(document.querySelector("#cxcodigo").value);
    document.querySelector("#cxvenda").value = valor_compra; // para colocar valor na caixa
console.log(`compra${valor_compra} e codigo ${codigo}`);
switch(codigo){
    case 1 : 
        resultado = valor_compra - (valor_compra*0.10);
        document.querySelector("#cxtotal").value = `Valor a vista 10% de desconto ${resultado}`;
        break;
    case 2 : 
        resultado = valor_compra - (valor_compra*0.05);
        document.querySelector("#cxtotal").value = `Valor no cartão 5% de desconto ${resultado}`;
        break;
    case 3 : 
        resultado = valor_compra + (valor_compra*0.10);
         document.querySelector("#cxtotal").value = `Valor parcelado 10% de acrescimo ${resultado}`;
        break;
    default : alert("cod invalido");
}
}




document.querySelector("#btn0").addEventListener("click" , function(){
    calculoVenda();
})
/*
document.getElementById("btn0").onclick = function(){
    //pegarDados();
    alert(valor_compra);
}
*/