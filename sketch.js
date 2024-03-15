let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(400, 400);
   background(color(50,0,0));
  cor = color(random(0,100), random(0,500), random(0,400));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
 
  fill("pink");
  circle(posicaoHorizontal,posicaoVertical,20);
 
 
 
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
 
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
 
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
   
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
 
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
   
}