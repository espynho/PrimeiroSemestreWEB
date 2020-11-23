"use strict";

function lerDados(){
    $("#saida").html("");
    let codHTML = "";
    codHTML += "<table border='1'>";
    codHTML += `<tr><td>ID</td><td>Titulo</td><td>Autor</td><td>Assunto</td>
            <td>Ano de Lançamento</td><td>Edição</td><td>Editora</td>
            <td>Local de publicação</td><td>Classificação</td><td>Código</td></tr>`
    let titulo = $("#cx_entradaT").val();
    let classificacao = $("#cx_entradaC").val();
    //for(let livro of livros){
        for(let i = 0; i < livros.length ; i++){
            if(livros[i].Classificacao == classificacao || livros[i].Titulo == titulo){
                //$("#saida").append(`${livro.id} ${livro.Autor}  <br>`);
                        codHTML += `<tr><td>${livros[i].id}</td><td>${livros[i].Titulo}</td><td>${livros[i].Autor}</td>
                        <td>${livros[i].Assunto}</td><td>${livros[i]["Ano de lancamento"]}</td>
                        <td>${livros[i].Edição}</td><td>${livros[i].Editora}</td>
                        <td>${livros[i]["Local de publicacao"]}</td><td>${livros[i].Classificacao}</td>
                        <td>${livros[i].Codigo}</td></tr>`
        }
    }
    codHTML += "</table>"
    $("#saida").append(codHTML);
    
}
function teste(){
    let classificacao = $("#cx_entradaC").val();
    console.log(classificacao);
}

$("#btn").click(lerDados);