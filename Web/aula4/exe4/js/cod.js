"use strict";

function calculoArea (){
    let area, base, altura ;

    base = Number(document.getElementById("cxe0").value);
    altura = Number(document.getElementById("cxe1").value);

    area = (base * altura)/2;
    document.getElementById("cxs0").value = area;
}

document.getElementById("btn0").onclick = function acaoBotao(){
    calculoArea();
}