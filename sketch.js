var car , wall;
var Weight , Speed;


function setup() {
  createCanvas(1600,400);
  
  car = createSprite(200,200,250,100);
  wall = createSprite(1500,200,40,300);

  Speed = Math.round(random(55,90));
  Weight = Math.round(random(400,1500));

  car.velocityX = Speed;
}


function draw() {
  background(0,0,0);  
  

  if(wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0;

    var deformation= 0.5*Weight*Speed*Speed/22500;
    
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }

    if(deformation>100 && deformation<180){
      car.shapeColor=color(255,255,0);
    }

    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
  }
  
  drawSprites();
}