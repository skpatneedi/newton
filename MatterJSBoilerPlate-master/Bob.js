class Bob{
    constructor(x,y){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.x = x
        this.y = y
        this.r = 50
        //this.image = loadImage("Images/paper.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        fill("black");
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}