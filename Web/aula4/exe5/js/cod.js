"use strict";
function mediaAluno(){
let nota1,nota2, nota3, media ;

    nota1 = Number(document.getElementById("cxe0").value);
    nota2 = Number(document.getElementById("cxe1").value);
    nota3 = Number(document.getElementById("cxe2").value);
    media = (nota1+nota2+nota3)/3;

    if(media >= 6){
        document.getElementById("cxs0").value = "Aprovado";
    }
    if(media >= 3 && media < 6){
        document.getElementById("cxs0").value = "Exame";
    }
    if(media < 3){
        document.getElementById("cxs0").value = "Reprovado";
    }
}

document.getElementById("btn").onclick = function (){
    mediaAluno();
}