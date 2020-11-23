"use strict";
$(function(){ // carregar pagina pelo jquery
    let btn1 = $('#btn1');
    btn1.click(function(){
        exibirConteudo();
    });
});

function exibirConteudo(){
    let p = $("p");
    console.log(p.html());

    let art = $("#artigo");
    console.log(art.html()); // parecido com innerHTML

    let caixas = $(".caixa");
    console.log(caixas.html());

}