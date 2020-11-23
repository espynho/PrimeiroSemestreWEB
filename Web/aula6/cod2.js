"use strict";
let alunos = [];
let contador = 0;

function guardarDados(n, r, m){
//function guardarDados(){

   localStorage.setItem("nome"+contador,n);
    localStorage.setItem("rgm"+contador,r);
    localStorage.setItem("media"+contador,m); 
    //localStorage.setItem("aluno"+contador,alunos);
 
 //localStorage.setItem("nome"+contador,n,r,m);
}

function Aluno(nome,rgm,media){
this.nome = nome;
this.rgm = rgm;
this.media = media;
this.exibir = function (){
    console.log("Nome" , this.nome);
}
guardarDados(this.nome, this.rgm, this.media)
//guardarDados()

}

function cadastro(n,r,m){
    
    alunos[contador] = new Aluno(n,r,m);
    console.log(contador);
    alunos[contador].exibir();
   // guardarDados()
    contador++;
}
function exibirDados(){  
    let saida = document.querySelector("#saida");
    let tabela = "" ;
    tabela = "<table border='1' class='tabela'>"; // valores em HTML
    tabela += `<tr class='titulo'><td>Nome</td><td>RGM</td><td>Resultado</td></tr>`; 
    //for(let cont = 0; cont < nome.length; cont++){
    let divisao;
    divisao = localStorage.length / 3 ;
    console.log("total é de: " +divisao);
    for(let cont = 0; cont < divisao; cont++){
       tabela += `<tr class='itens'><td>${localStorage.getItem("nome" +cont)}</td><td>${localStorage.getItem("rgm"+cont)}</td><td>${localStorage.getItem("media"+cont)}</td></tr>`;
    }
    tabela += "</table>";
    saida.innerHTML = tabela;
    /*console.log(nome);
    console.log(rgm);
    console.log(media);*/
}


document.querySelector("#btn_cadastrar").addEventListener("click", function(){
    let nome = document.querySelector("#cx_nome").value; // método JavaScript puro 
    let rgm = document.querySelector("#cx_rgm").value; // método JavaScript puro 
    let media = document.querySelector("#cx_media").value; // método JavaScript puro 
    cadastro(nome,rgm,media);
})
document.querySelector("#btn_exibir").addEventListener("click", function(){ // método com JavaScript puro
    exibirDados();
})
