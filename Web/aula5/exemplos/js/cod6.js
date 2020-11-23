"use strict";

function anima(){

let posX = Math.round(Math.random() * 800);
let posY = Math.round(Math.random() * 500);

document.querySelector("#personagem").style.left = posX + "px";
document.querySelector("#personagem").style.top = posY + "px";
}

let tempo = setInterval(anima, 100)