"use strict";
let nome = [];
let rgm = [];
let media = [];

let contador = 0;
// ====== cadastrar dados ======
function cadastroNome() {
    nome[contador] = localStorage.setItem("nome" + contador, document.querySelector("#cx_nome").value); // método JavaScript puro 
    rgm[contador] = localStorage.setItem("rgm" + contador, $("#cx_rgm").val()); // método do JQuery
    media[contador] = localStorage.setItem("media" + contador, $("#cx_media").val());
    contador++;
    console.log(contador); // para teste
    limparDados();
}

function exibirDados() {
    let saida = document.querySelector("#saida");
    let tabela = "";
    let resultado;
    tabela = "<table border='1' class='tabela'>"; // valores em HTML
    tabela += `<tr class='titulo'><td>Nome</td><td>RGM</td><td>Média</td><td>Resultado</td></tr>`;
    for (let i = 0; i < contador; i++) {
        let mediaFinal = localStorage.getItem("media"+i);
        if(mediaFinal == 0){resultado = "<td id='reprovado'>Reprovado";}
        //if(mediaFinal == 0){resultado = "<td id='reprovado'>Reprovado" $('#reprovado').css("color","red");} ======== não funcionou desse jeito 
        else if(mediaFinal >=6){resultado = "<td id='aprovado'>Aprovado";}
        else{resultado = "<td id='exame'>Exame";}
        tabela += `<tr class='itens'><td>${localStorage.getItem("nome"+i)}</td><td>${localStorage.getItem("rgm"+i)}</td><td>${localStorage.getItem("media"+i)}</td>${resultado}</td></tr>`;
    }
    tabela += "</table>";
    saida.innerHTML = tabela;
    console.log(nome);
    console.log(rgm);
    console.log(media);
}

function limparDados() { // função feita toda em JQuery
    $("#cx_nome").val("");
    $("#cx_rgm").val("");
    $("#cx_media").val("");
}

$("#btn_cadastrar").click(cadastroNome); // método com JQuery
document.querySelector("#btn_exibir").addEventListener("click", function () { // método com JavaScript puro
    exibirDados();
})