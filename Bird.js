class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/Blue Ball.png");
    //this.smokeImage = loadImage("sprites/smoke.png");
    //this is an array//
    this.trajectory =[];
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    super.display();
    if(keyIsDown(UP_ARROW)){
       clear();
       
    }
   

  }
}
