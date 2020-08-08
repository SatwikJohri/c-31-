class Box  {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1.0,
        'friction':0.1,
        'density':0.3
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.red = loadImage("red.png");
    this.width = width;
    this.height = height;
    this.Visibility=255;
    World.add(world, this.body);
  }
  
    
  display(){
  if(this.body.speed<6){
    push();
    imageMode(CENTER);
    image(this.red,this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
  }
  else{
    World.remove(world,this.body)
    push();
    this.Visibility = this.Visibility - 5;
    tint(255,this.Visibility);
    imageMode(CENTER);
    image(this.red,this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
  
  }
  }

  score(){
    if(this.Visibility<0 && this.Visibility>-105){
      score++
    }
  }
}

  
