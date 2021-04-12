var hr, mn, sc;
var hourAngle;
var minuteAngle;
var secondAngle;

function setup() {
  createCanvas(400,400);
  //to change the angle to degree
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);//adjust according to the timezone
  //calculating time using predefined functions to see the time at different zones
  hr=hour();
  mn=minute();
  sc=second();
  //to do the rotation
  hourAngle=map(hr%12,0,12,0,360);
  minuteAngle=map(mn,0,60,0,360);
  secondAngle=map(sc,0,60,0,360);
  //drawing second hand
  push();
  rotate(secondAngle);
  stroke(255,0,0);//255,0,0=red;0,255,0=green;0,0,255=blue;
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(minuteAngle);
  stroke(0,255,0);//255,0,0=red;0,255,0=green;0,0,255=blue;
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hourAngle);
  stroke(0,0,255);//255,0,0=red;0,255,0=green;0,0,255=blue;
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  
  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,secondAngle);
  stroke(0,255,0);
  arc(0,0,280,280,0,minuteAngle);
  stroke(0,0,255);
  arc(0,0,260,260,0,hourAngle);
  drawSprites();
}