"use strict";
// ====================== aba cronometro ===================
function abaCronometro() {
    let relogio = new Date();
    let saida = document.querySelector("#caixa_conteudo");
    saida.style.backgroundColor = "#FFCC33";
    saida.innerHTML = relogio.getSeconds();
}

let n_img = 0

// ====================== aba slides ======================
function slideShow() {
    if (n_img == -1) {
        n_img = 0;
    }; // limite inicial
    if (n_img == 5) {
        n_img = 4;
    }; // limite final
    let saida = document.querySelector("#caixa_conteudo");
    saida.style.backgroundColor = "#CCFF99";
    let cod_html = `<img src ='img/img${n_img}.jpg' class='caixa_imagens'><br>`; // imagem inicial
    cod_html += `<input type="button" value="anterior" id="btn_a">&nbsp`; // botão voltar
    cod_html += `<input type="button" value="proximo" id="btn_p">`; // botão proximo
    saida.innerHTML = cod_html;
    // ===================== botão anteriror =====================
    document.querySelector("#btn_a").addEventListener("click", function () {
        n_img--;
        slideShow();
    })
    // ===================== botão proximo ======================
    document.querySelector("#btn_p").addEventListener("click", function () {
        n_img++;
        slideShow();
    })
}
// ====================== aba tabuada ======================
function tabuadaAba() {
    let saida = document.querySelector("#caixa_conteudo");
    saida.style.backgroundColor = "#66CCCC";
    saida.style.color = "white";
    let cod_html = `Digite o número da tabuada que deseja calcular:`; // Enunciado
    cod_html += `<input type="text" name="" id="cx_entrada"><br>`; // caixa de entrada de dados
    //let entrada = document.querySelector("#cx_entrada").value;

    cod_html += `<input type="button" value="calcular" id="btn_calc"><br><br>`; // botão calcular      
    saida.innerHTML = cod_html;
    //cod_html += `<input type="button" value="proximo" id="btn_p">`; // botão proximo
    document.querySelector("#btn_calc").addEventListener("click", function () {
        let entrada = Number(document.querySelector("#cx_entrada").value);
        let resultado;
        for (let numero = 0; numero <= 10; numero++) {
            resultado = entrada * numero;
            cod_html += `${entrada} * ${numero} = ${resultado}<br>`;
        }
        saida.innerHTML = cod_html;
    })
}

let cronometro = document.querySelector("#aba0").addEventListener("click", function () {
    setInterval(abaCronometro, 1000)
})

let slide = document.querySelector("#aba1").addEventListener("click", function () {
    slideShow();
})

let tabuada = document.querySelector("#aba2").addEventListener("click", function () {
    tabuadaAba();
})