class Roof{
    constructor(){
      var options={
          isStatic:true
      }
      this.body=Bodies.rectangle(400,100,300,10,options);
    //this.width=width;
    //this.height=height;
    World.add(world,this.body);
    }

    display(){
    
     fill("yellow");
     rect(this.body.position.x,this.body.position.y,300,10);
     }
};