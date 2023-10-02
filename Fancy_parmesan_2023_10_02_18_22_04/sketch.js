let cor;
let posicaoHori; //X
let posicaoVert; //Y

function setup() {
  
  createCanvas(700, 700);
  background("white");
  cor = color(random(0, 255), random(0,255), random(0, 255))
  posicaoHori = 200;
  posicaoVert = 200;
}

function draw() {
  
  fill(cor)
  circle(posicaoHori, posicaoVert, 60);
  
  
  if(mouseX < posicaoHori) {
    posicaoHori = posicaoHori - 1
  }
  
  if(mouseX > posicaoHori) {
    posicaoHori = posicaoHori + 1
  }
  
  if(mouseY < posicaoVert) {
    posicaoVert = posicaoVert - 1
  }
  
  if(mouseY >
     posicaoVert) {
    posicaoVert = posicaoVert + 1
  }
  
  
if (mouseIsPressed){

cor = color(random(255), random(255), random(255), random(255));

}

  
}