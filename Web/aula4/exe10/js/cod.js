"use strict";
// ==================== formula ===========================
function calcularFatorial(){
    let entrada = Number(document.querySelector("#cx_entrada").value);
    //console.log(entrada);
    let fatorial = 1;
    for(let cont=1;cont<=entrada;cont++){// acrescenta valor até chegar no número digitado pelo usuario
        console.log(fatorial);
        fatorial *= cont;// reserva o valor anterior de (fatorial) e multiplica pelo valor de (cont) e atualiza o valor do (fatorial) para o novo valor resultante da multiplicação.
    }
    document.querySelector("#cx_saida").value = fatorial ;
}
// ==================== botão =============================
document.querySelector("#btn0").addEventListener("click" , function(){
    calcularFatorial();
})