  
class Chain{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY 
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
        }
        //this.pointB = pointB
        this.Chain= Constraint.create(options);
        World.add(world, this.Chain);
    }

      display(){
            var pointB= this.Chain.bodyB.position;

            var firstX =  this.Chain.bodyA.position.x;
            var firstY =  this.Chain.bodyA.position.y;
            var first2X = pointB.x+this.offsetX
            var first2Y = pointB.y+this.offsetY
            line (firstX,firstY,first2X,first2Y);
        
    }
    
}

