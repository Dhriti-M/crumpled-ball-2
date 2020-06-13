class Dustbin {
    constructor(x, y, width, height) {
     // var options = {
          // isStatic:true,
          //'restitution':0.8,
          //'friction':0.3,
          //'density':1.0
     // }
      //this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;

      
      //World.add(world, this.body);
      this.image=loadImage("dustbin.png");
    }
    display(){
      
     /* var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      stroke("white");
      strokeWeight(2);*/
      imageMode(CENTER);
      image(this.image,this.x,this.y, this.width, this.height);
      
      pop();
    }
  };
  
  
  