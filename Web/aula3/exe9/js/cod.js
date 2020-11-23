"use strict";
//alert("Hello world !");
let nome, idade, atual;

nome = prompt("Entre com seu nome");
idade = parseInt(prompt("Entre com o ano de nascimento com 4 digitos"));
atual = parseInt(prompt("Entre com o ano atual com 4 digitos"));

console.log(`Olá ${nome}`);
console.log(`Você tem atualmente ${atual-idade}, anos de idade`);

document.write(`Olá ${nome}<br>`);
document.write(`Você tem ${atual-idade}, anos de idade`);


