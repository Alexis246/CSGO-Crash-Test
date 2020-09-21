var car1,car2,car3,car4,car5,wall;
var success1,success2,success3,success4,success5;
var color1,color2,color3,color4,color5;
var line1,line2,line3,line4;

function setup(){
    var canvas = createCanvas(1600,400);

    car1 = createSprite(50,50,40,15);
    line1 = createSprite(650,175/2,1300,5);
    line1.shapeColor = "black";

    car2 = createSprite(50,125,40,15);
    line2 = createSprite(650,325/2,1300,5);
    line2.shapeColor = "black";

    car3 = createSprite(50,200,40,15);
    line3 = createSprite(650,475/2,1300,5);
    line3.shapeColor = "black";

    car4 = createSprite(50,275,40,15);
    line4 = createSprite(650,625/2,1300,5);
    line4.shapeColor = "black";
    
    car5 = createSprite(50,350,40,15);

    wall = createSprite(1300,200,100,400);
}
function draw(){
    background(170);
    textSize(30);

    createCar1();
    fill("" + color1);
    text(success1,500,50);
    createCar2();
    fill("" + color2);
    text(success2,500,125);
    createCar3();
    fill("" + color3);
    text(success3,500,200);
    createCar4();
    fill("" + color4);
    text(success4,500,275);
    createCar5();
    fill("" + color5);
    text(success5,500,350);
    
    car1.display();
    car2.display();
    car3.display();
    car4.display();
    car5.display();
    wall.display();
    drawSprites();
}

function createCar1(){
    var speed = random(55,90);
    var weight = random(400,1500);
    var deformation;
    
    if (frameCount === 1){
    car1.velocityX = speed;
    }
    if (car1.collide(wall)){

        deformation = (0.5 * weight * speed * speed) / 22500;

        if (deformation < 80){
        car1.shapeColor = "green";
        textSize(30);
        success1 = "Good";
        color1 = "green";
        }
        if (deformation >=80 && deformation <= 180){
            car1.shapeColor = "yellow";
            textSize(30);
            success1 = "Average";
            color1 = "yellow";
        }
        if (deformation > 180){
            car1.shapeColor = "red";
            textSize(30);
            success1 = "Lethal";
            color1 = "red";
        }
    }
}

function createCar2(){
    var speed = random(55,90);
    var weight = random(400,1500);
    var deformation;
    
    if (frameCount === 1){
        car2.velocityX = speed;
        }
    if (car2.collide(wall)){

        deformation = (0.5 * weight * speed * speed) / 22500;

        if (deformation < 80){
        car2.shapeColor = "green";
        textSize(30);
        success2 = "Good";
        color2 = "green";
        }
        if (deformation >=80 && deformation <= 180){
            car2.shapeColor = "yellow";
            textSize(30);
            success2 = "Average";
            color2 = "yellow";
        }
        if (deformation > 180){
            car2.shapeColor = "red";
            textSize(30);
            success2 = "Lethal";
            color2 = "red";
        }
    }
}

function createCar3(){
    var speed = random(55,90);
    var weight = random(400,1500);
    var deformation;
    
    if (frameCount === 1){
        car3.velocityX = speed;
        }
    if (car3.collide(wall)){

        deformation = (0.5 * weight * speed * speed) / 22500;

        if (deformation < 80){
        car3.shapeColor = "green";
        textSize(30);
        success3 = "Good";
        color3 = "green";
        }
        if (deformation >=80 && deformation <= 180){
            car3.shapeColor = "yellow";
            textSize(30);
            success3 = "Average";
            color3 = "yellow";
        }
        if (deformation > 180){
            car3.shapeColor = "red";
            textSize(30);
            success3 = "Lethal";
            color3 = "red";
        }
    }
}

function createCar4(){
    var speed = random(55,90);
    var weight = random(400,1500);
    var deformation;
    
    if (frameCount === 1){
        car4.velocityX = speed;
        }
    if (car4.collide(wall)){

        deformation = (0.5 * weight * speed * speed) / 22500;

        if (deformation < 80){
        car4.shapeColor = "green";
        textSize(30);
        success4 = "Good";
        color4 = "green";
        }
        if (deformation >=80 && deformation <= 180){
            car4.shapeColor = "yellow";
            textSize(30);
            success4 = "Average";
            color4 = "yellow";
        }
        if (deformation > 180){
            car4.shapeColor = "red";
            textSize(30);
            success4 = "Lethal";
            color4 = "red";
        }
    }
}

function createCar5(){
    var speed = random(55,90);
    var weight = random(400,1500);
    var deformation;
    
    if (frameCount === 1){
        car5.velocityX = speed;
        }
    if (car5.collide(wall)){

        deformation = (0.5 * weight * speed * speed) / 22500;

        if (deformation < 80){
        car5.shapeColor = "green";
        textSize(30);
        success5 = "Good";
        color5 = "green";
        }
        if (deformation >=80 && deformation <= 180){
            car5.shapeColor = "yellow";
            textSize(30);
            success5 = "Average";
            color5 = "yellow";
        }
        if (deformation > 180){
            car5.shapeColor = "red";
            textSize(30);
            success5 = "Lethal";
            color5 = "red";
        }
    }
}