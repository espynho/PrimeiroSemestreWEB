"use strict";

let div1 = document.querySelector("#box1");
let div2 = document.querySelector("#box2");

div1.addEventListener("click",    tratarEvento);
div1.addEventListener("dblclick", tratarEvento);

div2.addEventListener("mouseover", tratarEvento);
div2.addEventListener("mouseout",  tratarEvento);
div2.addEventListener("mousedown", tratarEvento);
div2.addEventListener("mouseup",   tratarEvento);
div2.addEventListener("mousemove", tratarEvento);

function tratarEvento(event){
    switch(event.type){
        case "click":     div1.style.backgroundColor = "green"; break;
        case "dblclick":  div1.style.backgroundColor = "blue"; break;
        case "mouseover": div2.style.backgroundColor = "red"; break;
        case "mouseout":  div2.style.backgroundColor = "yellow"; break;
        case "mousedown": div2.style.backgroundColor = "black"; break;
        case "mouseup":   div2.style.backgroundColor = "white"; break;
        case "mousemove": div2.innerHTML = `${event.clientX},${event.clientY}`; break;
 
    }
}