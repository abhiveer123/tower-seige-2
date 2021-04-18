class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255
        this.image=loadImage("block.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed>3){
          push();
          
World.remove(world,this.body);
this.visibility-=5
tint(255,this.visibility)
imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
        pop();
        }

        else{

        
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
    }
}
