"use strict";

let frutas = []; /// vetor
frutas[0] = "Morango";
frutas[1] = "uva";
frutas[2] = "Manga";
frutas[3] = "Lixia";

console.log(frutas); // todos os itens do vetor
console.log(frutas[2] + " com leite"); // apenas fruta 2 conctenado com texto

let meses = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
let data_hora = new Date(); // chamando data
let mes_atual = data_hora.getMonth(); // chamando mês
console.log(meses[mes_atual]);
for(let i=0; i < meses.length; i++){
    console.log(meses[i]);
}

//for..of
for(let mes of meses){
    console.log(mes);
}

//forEach
meses.forEach( (mes,i) => {
    console.log(`${i+1}-${mes}`);
})