//variavies da bolinha
let xBolinha = 100
let yBolinha = 200
let  diametro = 20
let raio= diametro/2


//velocidade da bolinha 
let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;

//variaiveis da raquete 
let xRaquete = 5;
let yRaquete = 150;
let Raquetecomprimento = 10; 
let Raquetealtura = 90;

//variavies do oponente 
let xraqueteoponente = 585;
let yraqueteoponente = 150;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrabolinha ();
  movimentabolinha ();
  verificacolisaoborda ();
  mostraraquete (xRaquete,yRaquete)
  movimentaminharaquete ();
  verificacolisaoraquete (xRaquete,yRaquete)
  
function mostrarBolinha (){
  circle(xBolinha,yBolinha,diametro)
  
  
  function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

  
  function verificaColisaoBorda() {
  if (xBolinha + raio > width ||
    xBolinha - raio <0) {
   velocidadeXBolinha *= -1;
 }
 if (yBolinha +raio> height ||
    yBolinha - raio < 0){
   velocidadeYBolinha *= -1;
 }
}


function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}


