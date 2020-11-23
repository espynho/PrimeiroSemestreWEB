"use strict";

let parcela, juros1, juros2 ;
// ==================== função principal ========================
function calcularJuros(){
let pagamento = parseInt(document.getElementById("caixa1").value);
console.log(pagamento);
// ==================== pagamento a vista =======================
if(parcela == 1){  
document.getElementById("caixa2").value = (`Total da compra:${pagamento} dividido em ${parcela} parcela de ${pagamento}`);
}
// ==================== pagamento em 2 vezes ====================
if(parcela == 2){
    juros1 = (((pagamento*3)/100)+pagamento);
    document.getElementById("caixa2").value =(`Total da compra: ${juros1} dividido em ${parcela} parcelas de ${juros1/parcela}`);
}
// =================== pagamento em 4 vezes =====================
if(parcela == 4){
    juros2 = (((pagamento*7)/100)+pagamento);
    document.getElementById("caixa2").value =(`Total da compra ${juros2} dividido em ${parcela} parcelas de ${juros2/parcela}`);
    }
}
// ================== botões de parcelamento ===================    
document.getElementById("botao_1").onclick = function(){
   parcela = 1;
}

document.getElementById("botao_2").onclick = function(){
   parcela = 2;
}

document.getElementById("botao_4").onclick = function(){
   parcela = 4;
}
// ================== botão calcular ==========================
document.getElementById("botao1").onclick = function(){
    calcularJuros();
}
