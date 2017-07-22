var x=0;
var speedX=40;

function setup (){
createCanvas(700,500);

}

function draw(){
clear()
background(0,0,0);
ellipse(x,300,30,30);
x=x+speedX;

if (x>width){
speedX=-40;



}
if (x<0){
speedX=40;



}



}
