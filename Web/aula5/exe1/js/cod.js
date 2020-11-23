"use strict";
let itens = [];// criação do vetor
let quantidade = Number(prompt("Entre com a quantidade de itens"));

// primeira função para determinar a quantidade e valores para alimentar o vetor
for(let contagem = 0;contagem < quantidade;contagem++){
    itens[contagem] = prompt("Entre com o item");
}
// ----------------------------------------------------------------------------
console.log(itens);   // somente para teste
let tabela = document.querySelector("#tabela"); // variável para escrever no HTML

let variavel_tabela = ""; // variável que recebe os valores em HTML para passar para a variável tabela, que escreve direto no HTML
variavel_tabela = "<table border='0' class='tabela'>"; // valores em HTML
variavel_tabela += `<tr class='titulo'><td>Indice</td><td>Item</td></tr>`; // Titulo da Tabela (em HTML)

// segunda função para criar a tabela com os valores do vetor +++++++++++++++++
for(let cont = 0; cont < itens.length; cont++){
    variavel_tabela += `<tr class='itens'><td>${cont+1}</td><td>${itens[cont]}</td></tr>`; // variável_tabela, recebendo dados em HTML
}
// -----------------------------------------------------------------------------
variavel_tabela += "</table>"; // fechamento da tabela 
tabela.innerHTML = variavel_tabela; // impressão de todas as tag's HTML da variável (variavel_tabela)




