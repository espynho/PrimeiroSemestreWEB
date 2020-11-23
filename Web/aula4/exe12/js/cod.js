"use strict";
//alert("Ola mundo");
let numero_aleatorio;
let tentativas = 1;

inicio();// início do jogo (direto no carregamento da pagina)

// função que gera números aleatrios
function inicio(){
    numero_aleatorio = Math.round(Math.random()*100);
}

// função que compara número digitado com número gerado 
function comparacao(numero_do_botao){// recebeu do botão
    let numero_digitado = document.querySelector("#cx_entrada").value ;
    console.log(numero_digitado);
    if(numero_digitado < 0 || numero_digitado == ""){
        document.querySelector("#saida").innerHTML = " ";
        alert("Número invalido");}else{

    if(numero_do_botao == numero_digitado){
        let resposta;
        alert(`Parabens você acertou e usou ${tentativas}, tentativas para descobrir`);
        resposta = prompt("Deseja tentar de novo? S para sim e N para não")
        if(resposta == "s" || resposta == "S"){
            document.querySelector("#saida").innerHTML = " ";
            numero_digitado = document.querySelector("#cx_entrada").value =" ";
            inicio();}
            else{
                botaoSemAcao();
                numero_digitado = document.querySelector("#cx_entrada").value =" ";
                document.querySelector("#saida").innerHTML =`<br>Parabens você acertou e usou ${tentativas}, tentativas para descobrir`;
            }
        }else{
            tentativas++ ;
            maiorMenor(numero_digitado, numero_do_botao); // mandando valores para função maiorMenor
        }
    }}
    
    // função para verificar se o  número digitado é maior ou menor que o sorteado
    function maiorMenor(nd,nb){ // valores recebidos da função comparação
        if(nd > nb){
            document.querySelector("#saida").innerHTML = "<br>O número secreto é menor que o digitado"
        }
        if(nd < nb){
            document.querySelector("#saida").innerHTML = "<br>O número secreto é maior que o digitado"
        }
    }
    // botão de checagem do número digitado pelo usuário
    document.querySelector("#btn0").addEventListener("click" , function (){ // recebeu do inicio
        comparacao(numero_aleatorio);
    })
    
    // botão sem ação
    function botaoSemAcao(){
        document.querySelector("#btn0").addEventListener("click" , function (){ // recebeu do inicio   
            document.querySelector("#saida").innerHTML = " ";
        })}
        
        