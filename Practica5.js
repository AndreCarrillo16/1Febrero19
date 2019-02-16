var x=200;
var vel=3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
	mostrar();
  mover();
  funciones();
}

function mostrar(){
	background(220);
  ellipse(x,200,100,100);
}

function mover(){
	x=x+vel;
}

function funciones(){
	if(x>350 || x<50){
  	vel=vel*-1;
  }
}
