class Drop{
    constructor(x,y){
        var options = {
            'restitution' : 0.4,
            'friction' : 0.2,
            'density': 1
        }
    this.body = Bodies.circle(x,y,5,options);
    World.add(world,this.body);
    }

    display(){
        push();
        ellipseMode(CENTER);
        fill (102,204,255);
        ellipse(this.body.position.x,this.body.position.y,5,5);
        pop ();
    }

    update(){
        if(this.body.position.y > 800){
            Matter.Body.setPosition(this.body, {x:random(0,650), y:random(0,650)});
        }
    }
}
