class bobObject{
   constructor(x,y,radius){ 
    var options={
        //'isStatic':true,
        restitution:0.9,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;

    World.add(world,this.body);
   }

   display(){
    push();
    fill('blue');
    ellipse(this.body.position.x,this.body.position.y,this.radius);
    
   pop();

   }


}