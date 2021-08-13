var garden;
var rabbit;
var gardenImg;
var rabbitImg;
var appleImg;
var orangeLeafImg;
var leafImg;
var apple;
var orangeLeaf;
var leaf;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  leafImg = loadImage("leaf.png");
}
function setup(){
  createCanvas(400,400);
garden=createSprite(200,200);
garden.addImage(gardenImg);
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
apple = createSprite(350, 340, 20, 20);
apple.addImage(appleImg);
apple.scale = 0.09;
orangeLeaf = createSprite(270, 340, 20, 20);
orangeLeaf.addImage(orangeLeafImg);
orangeLeaf.scale = 0.10;
leaf = createSprite(50, 340, 20, 20);
leaf.addImage(leafImg);
leaf.scale = 0.15;
}
function draw() {
  background(0);
 drawSprites();
}