"use strict";

function verificacaoParImpar(){
    let numero, sobra;

    numero = Number(document.getElementById("entrada").value) ;
    sobra = parseInt(numero % 2);
    
    if(Number(sobra) == 0){
        document.getElementById("saida").value = (`O numero ${numero} é par`) ;
    }
    else{
        document.getElementById("saida").value = (`O número ${numero} é impar`);
    }
}

document.getElementById("btn").onclick = function botaoAcao(){
    verificacaoParImpar();
}