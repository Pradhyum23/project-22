var StarImg, FairyImg, BackgroundImg;
var Fairy , FairyVoice;
var Star, StarImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	StarImg = loadImage("images/Star.png");
	FairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	BackgroundImg = loadImage("images/starNight.png");
	FairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// FairyVoice.play();

	Fairy = createSprite(130, 520);
	Fairy.addAnimation("fairyflying",FairyImg);  
	Fairy.scale =0.25;

	Star = createSprite(650,30);
	Star.addImage(StarImg);
	Star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	StarImg = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, StarImg);
	
	Engine.run(engine);

}


function draw() {
  background(BackgroundImg);

  Star.x = starBody.position.x;
  Star.y = starBody.position.y;

  drawSprites();

}

function keyPressed() {
	//write code here
if (keyCode === DOWN_ARROW) {
	Matter.Star.setStatic(Fairy,false);		
 }

 if(keyCode === LEFT_ARROW) {
	 Fairy.velocityX = -5;
 }

 if(keyCode === RIGHT_ARROW) {
	Fairy.velocityX = 5;
 }

 if (starBody.position.y=470){
	star.position.x=470;
 }

 if (starBody.isTouching(star)){
    JoyMusic.mp3.play
 }
}
