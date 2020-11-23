"use strict";


function verificarNumeros(){
let numero1, numero2 ;

numero1 = Number(document.getElementById("cxe0").value);
numero2 = Number(document.getElementById("cxe1").value);

if(numero1 > numero2){
    document.getElementById("cxs0").value = (`O número ${numero1} é maior que o ${numero2}`);
}
if(numero2 > numero1){
    document.getElementById("cxs0").value = (`O número ${numero2} é maior que o ${numero1}`);
}
if(numero1 == numero2){
    document.getElementById("cxs0").value = (`Os números ${numero1} e ${numero2} , são iguais`);
}
}

document.getElementById("btn0").onclick = function acaoBotao(){
verificarNumeros();
}

