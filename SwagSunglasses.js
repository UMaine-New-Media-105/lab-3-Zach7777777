function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  swagSunglasses()

  
  fill(300, 0, 300);
  rect(70, 300, 50);
  fill("lightslategrey");
  rect(170, 300, 50);
  fill("salmon");
  rect(270, 300, 50);
  

  if (mouseX >= 70 && mouseX <= 120 && mouseY >= 300 && mouseY <= 350 && mouseIsPressed) {
       fill(300,0,300)
     ellipse(130,170,40)
     ellipse(210,170,40)
  } else if (mouseX >= 170 && mouseX <= 220 && mouseY >= 300 && mouseY <= 350 && mouseIsPressed){
    fill("lightslategrey")
    ellipse(130,170,40)
    ellipse(210,170,40)
  } else if (mouseX >= 270 && mouseX <= 320 && mouseY >= 300 && mouseY <= 350 && mouseIsPressed){
    fill("salmon")
    ellipse(130,170,40)
    ellipse(210,170,40)
  } else {
    fill(50)
    ellipse(130,170,40)
    ellipse(210,170,40)
  }
}

  function swagSunglasses (x,y,size,color){
  translate(x,y)
  scale(size)
  
  push();
  translate(30, 70);
  fill(0);
  ellipse(100, 100, 60);
  ellipse(180, 100, 60);
  push();
  noFill();
  strokeWeight(17);
  arc(140, 100, 50, 50, 180, 0);
  line(190, 100, 270, 50);
  line(180, 40, 80, 100);
  pop();
  pop();
  
}
