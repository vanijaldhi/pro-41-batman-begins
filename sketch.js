const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drop, umbrella, ground;

var drops = [];

function preload(){
    thunder1_image = loadImage("images/thunderbolt/1.png");
    thunder2_image = loadImage("images/thunderbolt/2.png");
    thunder3_image = loadImage("images/thunderbolt/3.png");
    thunder4_image = loadImage("images/thunderbolt/4.png");
 
    boy1_image = loadImage("images/Walking Frame/walking_1.png");
    boy2_image = loadImage("images/Walking Frame/walking_2.png");
    boy3_image = loadImage("images/Walking Frame/walking_3.png");
    boy4_image = loadImage("images/Walking Frame/walking_4.png");
    boy5_image = loadImage("images/Walking Frame/walking_5.png");
    boy6_image = loadImage("images/Walking Frame/walking_6.png");
    boy7_image = loadImage("images/Walking Frame/walking_7.png");
    boy8_image = loadImage("images/Walking Frame/walking_8.png");
}

function setup(){
   var canvas = createCanvas(650,800);
    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0 ){
        for(i = 0 ; i <100 ; i++ ){
            drops.push( new Drop(random(0,600), random(0,5)));
        }
    }
    
}

function draw(){
    background(0,24,96);
    Engine.run(engine);

     for(i = 0; i<100 ; i++){
         drops[i].display();
         drops[i].update();
     }
}   

