var dog
var happydog
var database
var foodS
var foodStock
var doggy


function preload()
{
  dog = loadImage ("images/dogImg.png");
  happydog = loadImage ("images/dogImg1.png")
}

function setup() {
	createCanvas(1000,1000);
  
    database = firebase.database();
    console.log(database);

    doggy = createSprite (550,600,50,50)
    doggy.addImage(dog);
    doggy.scale = 0.5;

    foodStock = database.ref("food")
    foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87)
 
 
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    doggy.addImage(happydog)
  }

  drawSprites();
  //add styles here
  text("PRESS UP_ARROW KEY TO FEED DRAGO MILK");
  fill("blue");
  textSize(20);
  stroke(3);

}

function readStock(data) {
  foodS = data.val();
}
function writeStock(x) {
  if(x <= 0) {
    x = 0;
  }
  else {
    x = x-1;
  }
  database.ref('/').update({
    food:x
  })
}


