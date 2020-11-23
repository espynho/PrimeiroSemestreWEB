"use strict";
// ====== parte 1 ======
function listarDados(){
    let saida = document.querySelector("#saidaL");
    let cod_html = "";
    cod_html += "<h2>Dados Gerais</h2>"
    for(let cont = 0; cont < pessoas.length; cont++){
        let sexo = pessoas[cont].genero ;
        cod_html += "<div class='caixa'>";
        cod_html += `${corDoFundoTitulo(sexo)} ${pessoas[cont].nome}</div>`;
        cod_html += `<div><img src='${pessoas[cont].foto}' id='figura'></div>`;
        cod_html += `<div><br><br><br>Idade:${pessoas[cont].idade}<br> Altura: ${pessoas[cont].altura}<br> Peso: ${pessoas[cont].peso}<br> Genero: ${pessoas[cont].genero}<br><br><br><br></div>`;
        cod_html += `${corDoFundoTituloFinal(sexo)}${pessoas[cont].profissao}<div>R$: ${pessoas[cont].salario}</div></div>`;     
        cod_html += "</div>"
    }
    saida.innerHTML = cod_html;
}
function corDoFundoTitulo(recebe_sexo){
    if(recebe_sexo == "Feminino"){
        return "<div id='tituloF'>";
    }
    if(recebe_sexo == "Masculino"){
        return "<div id='tituloM'>";
    }  
}
function corDoFundoTituloFinal(recebe_sexo){
    if(recebe_sexo == "Feminino"){
        return "<div id='tituloFinalF'>";
    }
    if(recebe_sexo == "Masculino"){
        return "<div id='tituloFinalM'>";
    }  
}
// ====== fim parte 1 ======

// ====== parte 2 ======
function outrosDados(){
//alert("Ola mundo")
let saida = document.querySelector("#saidaI");
    let cod_html = "";
    let  mediaIdade = 0 ;
    for(let cont = 0; cont < pessoas.length; cont++){
        mediaIdade += pessoas[cont].idade;
}
    mediaIdade = mediaIdade/pessoas.length;
    cod_html += `Média da idade: ${mediaIdade.toFixed()} anos`;
    saida.innerHTML = cod_html;
    maiorIdade();
}
function maiorIdade(){
    let saida = document.querySelector("#saidaM");
    let cod_html = "";
    cod_html += "<h2>Homens mais velhos</h2>";
    let maior = -100;
    for(let cont = 0; cont < pessoas.length; cont++){
        if(pessoas[cont].idade > maior){
            maior = pessoas[cont].idade;
        };
    }
    console.log("maior idade: "+maior);
    for(let cont = 0; cont < pessoas.length; cont++){
    if(pessoas[cont].idade == maior && pessoas[cont].genero == "Masculino"){
        cod_html += "<div class='caixa'>"; 
        cod_html += `<div id='tituloM'>${pessoas[cont].nome}</div>`;
        cod_html += `<div><img src='${pessoas[cont].foto}' id='figura'></div><br><br><br>`;
        cod_html += `<div>Idade: ${pessoas[cont].idade}<br>Profissão: ${pessoas[cont].profissao}</div>`
        cod_html += "</div>"
    }
        saida.innerHTML = cod_html;
    }
maiorSalario();
}
function maiorSalario(){
    let saida = document.querySelector("#saidaI");
    let cod_html = "";
    cod_html += "<h2>Maior salario</h2>";
    let maior = -99999;
    for(let cont = 0; cont < pessoas.length; cont++){
         if(pessoas[cont].salario > maior){
             maior = pessoas[cont].salario;
         }
}
console.log("maior salário: "+maior);
for(let cont = 0; cont < pessoas.length; cont++){
    if(pessoas[cont].salario == maior){
        cod_html += "<div class='caixa'>"; 
        cod_html += `<div id='tituloU'>${pessoas[cont].nome}</div>`;
        cod_html += `<div><img src='${pessoas[cont].foto}' id='figura'></div><br><br><br>`;
        cod_html += `<div>Idade: ${pessoas[cont].idade}<br>Profissão: ${pessoas[cont].profissao}</div>`
        cod_html += "</div>"
    }
        saida.innerHTML = cod_html;
    }
}
// ====== fim parte 2 ======

$("#btnListar").click(listarDados);
$("#btnOutros").click(outrosDados);