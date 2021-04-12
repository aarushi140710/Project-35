var dog,dogHappy,database,foodS,foodStock;

function preload(){
	 dog = loadImage("Dog.png");
   dogHappy = loadImage("happydog.png");
}

function setup() {
	createCanvas(700, 700);
  dog1 = createSprite(380,380,10,10);
  dog1.addImage(dog);
  dog1.scale = 0.3;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyIsDown(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(dogHappy);
  }
  else{
    dog1.addImage(dog);
  }

  drawSprites();

  textSize(20);
  fill("white");
  stroke("black");
  text("Note: Press UP_ARROW Key To Feed Drago Milk",150,50);
  text("Food Remaining: "+foodS,270,230);


}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  
  /*database.ref('/').update({
    food:x
  })*/
}
