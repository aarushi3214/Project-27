class Rope{
    constructor(bodyA, bodyB,offsetX){
        
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            //stiffness:0.04,
            //length: 10
            pointB: {x:offsetX,y:0}
        }
        this.rope=Constraint.create(option);
        this.offsetX=offsetX;
        World.add(world,this.rope);
    }

    display(){
        //var ba= this.rope.bodyA.position;
        //var bb=this.rope.bodyB.position;
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        stroke("white");
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
        }
};