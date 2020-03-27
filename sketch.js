var xPositions=[0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400];
var yPositions=[20,30,20,40,50,40,60,70,60,80,90,80,110,120,110,140,150,140,170,180];

//for( var count=0; count<20; count++){
  //xPositions.push(Random(0,400));
  //yPositions.push(Random(0,400));
//}

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);

  for(var i=0; i<xPositions.length; i++){
  noStroke();
  fill(0,200,255);
  ellipse(xPositions[i], yPositions[i],10,10);
  yPositions[i]+=5;

  if(yPositions[i]>400){
  yPositions[i]=0;
  }
  }
 drawSprites();
}