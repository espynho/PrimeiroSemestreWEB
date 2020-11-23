"use strict";
//alert("Ola Mundo");
document.querySelector("#tabela").innerHTML = "ola mundo";
let linhas = prompt("Entre com a quantidade de linhas");
let colunas = prompt("Entre com a quantidade de colunas");
console.log(linhas);
let codHTML = "";
codHTML = "<table border = '0'>"
for(let contador_linha = 1;contador_linha <= linhas; contador_linha++){
codHTML += `<tr>`
    for(let contador_coluna = 1;contador_coluna <= colunas; contador_coluna++){
        if (contador_coluna % 2 == 0){
        codHTML += `<td class='par'>${contador_linha} , ${contador_coluna}</td>`;
    }else{
        codHTML += `<td class='impar'>${contador_linha} , ${contador_coluna}</td>`;
}}}
codHTML +="</tr>"

codHTML += "</table>";
let finalHTML = document.querySelector("#tabela");
finalHTML.innerHTML = codHTML ;
