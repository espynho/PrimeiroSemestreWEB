"use strict";

let degrau, objetivo, calculo;

degrau = parseInt(prompt("Entre com a altura do degrau (em cm/s)"));
objetivo = parseInt(prompt("Entre com a altura da escada desejada (em mt/s)"));

calculo = (objetivo / (degrau / 100));

document.write(calculo);


