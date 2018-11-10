PVector leftEye;
PVector rightEye;
PVector newEye;

void setup(){
size(720, 900);

int r=0;
int g=147;
int b=0;

for (int i = 0; i<height; i++){
  for (int c = 0; c<height; c++){
    stroke(b, b, i);
    line(0,i,width, i);
  }
}
//background(162,213,255);

rectMode(CENTER);
ellipseMode(CENTER);

noStroke();

//mountine
fill(170, 191, 213);
triangle(0, 900, 300, 900, 0, 400);

fill(121, 150, 154);
triangle(-80, 900, 300, 900, 170, 400 );

fill(54, 149, 163);
triangle(30, 900, 400, 900,320, 440 );

fill(170, 191, 213);
triangle(180, 900, 560, 900, 440, 400);

fill(54, 149, 163);
triangle(500, 900, 800, 900, 660, 440 );

fill(121, 150, 154);
triangle(400, 900, 750, 900, 560, 450 );

//face
fill(255, 224, 140);
ellipse(360, 300, 500, 500);
  
  
//body
fill(0);
rect(360, 901, 420, 600, 300, 1000, 420, 1000);

//pocket
fill(213);
rect(460, 718, 84, 18);

stroke(213,213,213);
line(360,690,360,900);
  
  
//neck
noStroke();
fill(255);
triangle(400, 600, 320, 600, 360,700 );

fill(255,0,0);
arc(360, 360, 80, 50, 0, 3.14);
line(60, 125, 140, 125);
}

void boring(){
fill(255);

//draw the eyes
ellipse(touchX-25, touchY, 30, 20);
ellipse(touchX+25, touchY, 30, 20);

//black
fill(0);

//draw the pupils
ellipse(touchX-25, touchY, 30, 5);
ellipse(touchX+25, touchY, 30, 5);


fill(0);

//draw the mouth

line(touchX-20, touchY+30, touchX+20, touchY+30 );

}

void fool(){

//white
fill(255);

//draw the eyes
ellipse(touchX+25, touchY, 30, 30);
ellipse(touchX-25, touchY, 30, 30);

//black
fill(0);

//draw the pupils
ellipse(touchX+25, ptouchY-3, 15, 15);
ellipse(touchX-28, ptouchY+2, 15, 15);

//red
fill(255, 0, 0);

//draw the mouth
arc(touchX, touchY+30, 50, 80, 0, 3.14);
line(60, 125, 140, 125);
}

void angry(){
//white
fill(255);

//draw the eyes
ellipse(touchX+25, touchY, 30, 30);
ellipse(touchX-25, touchY, 30, 30);

//black
fill(0);

rect(touchX+25, touchY, 25, 2);
rect(touchX-25, touchY, 25, 2);

//red
fill(255, 0, 0);

//draw the mouth
rect(touchX, touchY+30, 30, 10, 5, 5, 5, 5);
}

void sad(){
//white
fill(255);

//draw the eyes
ellipse(touchX+25, touchY, 30, 30);
ellipse(touchX-25, touchY, 30, 30);

//black
fill(0);

rect(touchX+25, touchY-5, 25, 2);
rect(touchX-25, touchY-5, 25, 2);

fill(54, 255, 255);
rect(touchX+25, touchY+16, 20, 40);
rect(touchX-25, touchY+16, 20, 40);

//red
fill(255, 0, 0);

//draw the mouth
triangle(touchX, touchY+30, touchX+20, touchY+40, touchX-20, touchY+40);
}

void shock(){
//white
fill(255);

//draw the eyes
ellipse(touchX+25, touchY, 30, 30);
ellipse(touchX-25, touchY, 30, 30);

//black
fill(0);

//draw the pupils
ellipse(touchX+25, ptouchY+2, 5, 5);
ellipse(touchX-25, ptouchY+2, 5, 5);

//red
fill(255, 0, 0);

//draw the mouth
rect(touchX, touchY+30, 20, 20);

}

void draw(){
  
fill(255);

leftEye = new PVector(width*.45, height*.3);
rightEye = new PVector(width*.55, height*.3);

PVector mouseVector = new PVector(touchX, touchY);

PVector leftPupil = leftEye.copy().add(mouseVector.copy().sub(leftEye).setMag(10));
PVector rightPupil = rightEye.copy().add(mouseVector.copy().sub(rightEye).setMag(10));

ellipse(leftEye.x, leftEye.y, 50, 50);
ellipse(rightEye.x, rightEye.y, 50, 50);

fill(touchX/2, 0, touchY/2);
ellipse(leftPupil.x, leftPupil.y, 20, 20);
ellipse(rightPupil.x, rightPupil.y, 20, 20);

}

void touchStarted(){
rectMode(CENTER);
ellipseMode(CENTER);


fool();
/*
boring();
angry();
shock();
sad();
*/
}
/*newEye = new PVector(touchX, touchY);

PVector mouseVector = new PVector(touchX, touchY);

PVector newPupil = newEye.copy().add(mouseVector.copy().sub(newEye).setMag(10));

ellipse(newEye.x, newEye.y, 50, 50);

ellipse(newPupil.x, newPupil.y, 20, 20);
*/