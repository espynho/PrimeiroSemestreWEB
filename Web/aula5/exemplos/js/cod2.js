"use strict";

document.querySelector("#btn").addEventListener("click", function(){
    let info = document.querySelector("#texto").value; // variavel info
    inverter(info);
    inserirSimbolo(info, "*");
});

function inverter(str){ // info sendo recebido como str
    console.log(str.length);
    let saida = "";
    for (let i = str.length-1; i >= 0; i--){
        saida += str[i];
    }
    console.log(saida);
}

function inserirSimbolo(str, simbolo){
    let saida = ""
    for (let i=0; i < str.length-1; i++){
        saida +=str[i] + simbolo;
    }
    saida += str[str.length-1];
    console.log(saida);

}