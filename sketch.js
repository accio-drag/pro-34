//Create variables here
var dogimg, dogimg1, dog;
var foodStock;
var database;
function preload()
{
  
  dogimg= loadImage("images/dogImg.png")
  dogimg1= loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,150,150);
dog.addImage(dogimg1);
dog.scale=0.2;
database = firebase.database();
var ref = database.ref("food");
ref.on("value",readOP)

}

function readOP(data){
foodStock=data.val();




}
function draw() {  
background(46, 139, 87)
  drawSprites();
  //add styles here
if (keyWentDown(UP_ARROW)){
writeStock(foodStock);
dog.addImage(dogimg);




}
}

function writeStock(x){
if(x<=0)
x=0;
else
x-=1;

database.ref("/").update(
{
food:x,

}

)





}

