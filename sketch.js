let theta;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("lightblue");
  frameRate(30);
  stroke("green");
  
 let a = (mouseX / width/2) * 25;
  theta = radians(a);
  translate(width/2,height);
  line(0,0,0,-120);
  translate(0,-120);
  branch(120);
}
function branch(h) {
 
  h *=0.6

  if (h > 2) {
    push();    
    
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  
  
  fill(130,200,60);
rotate(2*PI/7);
rotate(2*PI/7);
rotate(-2*PI/4);
bezier(0,0,-30,-80,-30,-240,0,-300);
bezier(0,0,30,-80,30,-240,0,-300);
  }  
 } 

