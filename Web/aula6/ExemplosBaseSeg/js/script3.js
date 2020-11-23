var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function Bolinha(cor,x,y,raio){
	this.cor = cor; 
	this.x = x;
	this.y = y;
	this.raio = raio; 
	this.exibir = function(){ 
	   console.log("Cor da bolinha: ", this.cor);
	}
}

function desenhar(bola){
	ctx.beginPath();
	ctx.arc(bola.x, bola.y, bola.raio, 0, 2 * Math.PI);
	ctx.fillStyle = bola.cor;
	ctx.fill();
}

let qtd_bolinhas = 10;
let vet_bolinhas = [];
let cores = ['red', 'blue', 'green', 'yellow'];

for (let i=1; i <= qtd_bolinhas; i++){
	let bola = new Bolinha(cores[Math.round(Math.random()*(cores.length-1))], // cores=vetor, length=todas posições 
							Math.round(Math.random()*500),
							Math.round(Math.random()*500),
							Math.round(Math.random()*50)+10); // +10 para ter o minimo de raio da bolinha, senão pode ter bolinha com raio 0, pois 50*0 = 0
	vet_bolinhas.push(bola);	
}
console.log(vet_bolinhas);

for (let b of vet_bolinhas){ // b é cada bolinha do vetor de bolinha(vet_bolinhas), pega cada b e aplica as funções 
	b.exibir();
	setTimeout(function(){
		desenhar(b);		
	}, Math.round(Math.random()*3000)+1000);
}

