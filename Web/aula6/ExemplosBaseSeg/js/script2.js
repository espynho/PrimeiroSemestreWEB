"use strict";

let pessoa1 = { // objeto criado do primeiro jeito
    nome: "Fábio",
    altura: 1.70,
    idade: 33,
};

let pessoa2 = {
    nome: "Alcides",
    altura: 1.69,
    idade: 40,
};

let pessoas = [pessoa1, pessoa2];

let div = document.querySelector("#rel_pessoas"); // vetor de objeto
div.innerHTML = pessoas[0].nome + "<br>";
div.innerHTML += pessoas[1].nome + "<br>";

