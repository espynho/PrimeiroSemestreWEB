"use strict";
//alert("Ola Mundo");
let resultado_html = document.querySelector("#resultado") ;
// ================= botão maiusculo ===================
document.querySelector("#btn_mai").addEventListener("click", function(){
    resultado_html.innerHTML = "";
    let entrada = document.querySelector("#cx_entrada").value ;
    resultado_html.innerHTML = entrada.toUpperCase() ;})
    
    // ================= botão separar =====================
    document.querySelector("#btn_sep").addEventListener("click", function(){
        resultado_html.innerHTML = "";
        let entrada = document.querySelector("#cx_entrada").value ;
        let palavras = entrada.split(" ");
        console.log(`por palavras ${palavras.length}`); // para teste 
        console.log(`por letras ${entrada.length}`); // para teste 
        separarPalavras(palavras); // função responsavel por separar as palavras em linhas
    })
    
    // =========== função para dividir em linhas ============
    function separarPalavras(palavras){
        for(let contagem = 0; contagem < palavras.length; contagem++){
        resultado_html.innerHTML += `${palavras[contagem]}<br>` ;
    }
}