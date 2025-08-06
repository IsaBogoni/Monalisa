function setup() {
  createCanvas(400, 400);
}

let olhoX;
let olhoY;

function draw() {
  background('orange');
  fill('#D8B651'); // cor da orelha e
  circle(50, 200, 60); // orelha esquerda
  fill('#D8B651'); 
  circle(350, 200, 60); // orelha direita
  fill('#F0DFAE');
  circle(200, 200, 300); // rosto
  fill('white');
  circle(150, 150, 60); // olho esquerdo
  fill('white');
  circle(250, 150, 60); // olho direito
  line(150, 270, 250, 250); //boca
  fill('rgb(245,245,171)');
  triangle(200, 180, 170, 220, 220, 220); // nariz
  //fill('black');
  //circle(150, 150, 10); // pupila esquerda
  //fill('black');
  //circle(245, 150, 10); // pupila direita
  fill('black'); //começo cabelo
  circle(87, 95, 70);
  fill('black');
  circle(145, 60, 70);
  fill('black');
  circle(210, 50, 70);
  fill('black');
  circle(270, 75, 70);
  fill('black');
  circle(320, 105, 70); // fim cabelo
  
  olhoX = map(mouseX, 0, 400, 120, 170);
  olhoY = map(mouseY, 0, 400, 120, 170);
  
  
  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX+100, olhoY, 10); // nova pupila direita
  
  //if(mouseIsPressed) {
     //console.log(mouseX, mouseY);
     //}
}