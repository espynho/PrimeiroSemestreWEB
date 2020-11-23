"use strict";
//alert("Ola Mundo");
let nome = [];
let rgm = [];
let nota_parcial = [];
let nota_exercicio = [];
let nota_projeto = [];
let nota_regimental = [];
let contador = 0;

// ================== limpeza das caixas =========================
function limparCaixa(){
    document.querySelector("#cx_nome").value = "";
    document.querySelector("#cx_rgm").value = "";
    document.querySelector("#cx_parcial").value = "";
    document.querySelector("#cx_exercicio").value = "";
    document.querySelector("#cx_projeto").value = "";
    document.querySelector("#cx_regimental").value = "";
}

function cadastro(){
    let cx_nome = document.querySelector("#cx_nome").value ;
    let cx_rgm = Number(document.querySelector("#cx_rgm").value) ;
    let cx_parcial = Number(document.querySelector("#cx_parcial").value) ;
    let cx_exercicio = Number(document.querySelector("#cx_exercicio").value);
    let cx_projeto = Number(document.querySelector("#cx_projeto").value) ;
    let cx_regimental = Number(document.querySelector("#cx_regimental").value) ;

    if(cx_nome == "" || cx_rgm == ""){// || cx_parcial == "" || cx_exercicio == "" || cx_projeto == "" || cx_regimental == ""){ problema quando digita 0 o código entende que a caixa está vazia, sem nada digitado
        console.log("Vazio");

    }else if(cx_parcial < 0 || cx_parcial > 2){
        alert("Nota parcial maximo 2")
    }else if(cx_exercicio < 0 || cx_exercicio > 1){
        alert("Nota exercicios maximo 1")   
    }else if(cx_projeto < 0 || cx_projeto > 2){
        alert("Nota projeto maximo 2")   
    }else if(cx_regimental < 0 || cx_regimental > 5){
        alert("Nota regimental maximo 5")   
    }else{
        nome[contador] = cx_nome;
        rgm[contador] = cx_rgm;
        nota_parcial[contador] = cx_parcial;
        nota_exercicio[contador] = cx_exercicio;
        nota_projeto[contador] = cx_projeto;
        nota_regimental[contador] = cx_regimental;
        console.log(nome[contador]);
        console.log(rgm[contador]);
        console.log(nota_exercicio[contador]);
        console.log(nota_projeto[contador]);
        console.log(nota_regimental[contador]);
        contador++;
        console.log(contador);
        limparCaixa();
        
    }
   
}

function mostrarDados(){
    if(contador == 0){
        alert("Sem dados para mostrar")
    }else{
    let notaFinal ;
    let resultado ;
    let saida = document.querySelector("#saida");
    let codHTML = "";
    codHTML += "<table border ='1'><tr><td>Nome</td><td>RGM</td><td>Nota Parcial</td><td>Nota Exercícios</td><td>Nota Projeto</td><td>Nota Regimental</td><td>Nota Final</td><td>Resultado</td></tr>";
    for(let i = 0; i < contador; i++){
        notaFinal = nota_exercicio[i]+nota_parcial[i]+nota_projeto[i]+nota_regimental[i];
        if(notaFinal == 0){
            resultado = "<td id='reprovado'>Reprovado";
        }else if(notaFinal >= 6){
            resultado = "<td id='aprovado'>Aprovado";
        }else{
            resultado = "<td id='avaliacaoFinal'>Avaliação final"
        }
        codHTML += `<td>${nome[i]}</td><td>${rgm[i]}</td><td>${nota_parcial[i]}</td><td>${nota_exercicio[i]}</td><td>${nota_projeto[i]}</td><td>${nota_regimental[i]}</td><td>${notaFinal}</td>${resultado}</td></tr>`;
    }
    codHTML += "</table>";
    saida.innerHTML = codHTML;
    }
}
document.querySelector("#btn_cad").addEventListener("click", function(){
    cadastro();
})

document.querySelector("#btn_exibir").addEventListener("click", function(){
    mostrarDados();
})
