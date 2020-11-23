"use strict";
let peso, altura, sexo ;

let resultado = document.getElementById("resultado");

    // ==================== Calculo do IMC ========================
    function calcularImc(){
    sexo = document.getElementById("cx2").value;
    peso = Number(document.getElementById("cx1").value);
    altura = Number(document.getElementById("cx0").value);
    let imc = peso / (altura * altura);
    if(sexo == "mulher"){
        mulheres(imc);}
        else{
            if(sexo == "homem"){
                homens(imc);}
                else{(alert("Favor digite o sexo, homem ou mulher"))}
    }

    // ==================== Mulheres ===============================
    function mulheres(imc_mulher){
    if(imc_mulher < 19.1){
        resultado.innerText = "Abaixo do peso"}
        else{ 
            if(imc_mulher >= 19.1 && imc_mulher < 25.8){
            resultado.innerText = "No peso normal"}
            else{
                if(imc_mulher >= 25.8 && imc_mulher < 27.3){
                resultado.innerText = "Marginalmente acima do peso"}
                else{
                    if(imc_mulher >= 27.3 && imc_mulher <= 32.3){
                    resultado.innerText = "Acima do peso ideal"}
                    else{
                        if(imc_mulher > 32.3){
                        resultado.innerText = "Obesidade"}
    }}}}}}

    // ==================== Homens ===============================
    function homens(imc_homem){
    if(imc_homem < 20.7){
        resultado.innerText = "Abaixo do peso"}
        else{ 
            if(imc_homem >= 20.7 && imc_homem < 26.4){
            resultado.innerText = "No peso normal"}
            else{
                if(imc_homem >= 26.4 && imc_homem < 27.8){
                resultado.innerText = "Marginalmente acima do peso"}
                else{
                    if(imc_homem >= 27.8 && imc_homem <= 31.1){
                    resultado.innerText = "Acima do peso ideal"}
                    else{
                        if(imc_homem > 31.1){
                        resultado.innerText = "Obesidade"}
    }}}}}
   
    // =================== Botão ===============================
    document.getElementById("btn").onclick = function(){
    calcularImc();
    }
