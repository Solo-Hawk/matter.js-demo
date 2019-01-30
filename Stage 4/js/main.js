class SceneA extends Phaser.Scene {
  constructor(){
    super();
    this.gameBodies = []
  }
  preload(){

  }
  create(){
    console.log(this);
    // this.matter.world.setBounds();

    this.matter.add.mouseSpring();

    this.matter.add.rectangle(700, 490, 220, 800, {
      isStatic: true,
      chamfer: {radius:20}
    });

    this.matter.add.rectangle(100, 490, 220, 800, {
      isStatic: true,
      chamfer: {radius:20}
    });
    for(var x = 0; x < 300; x++){
      var rect1 = Phaser.Physics.Matter.Matter.Bodies.rectangle(Phaser.Math.Between(150,650),400,20,20, {
        chamfer: {radius:10}
      })
      this.matter.world.add(rect1)
      this.gameBodies.push(rect1)
    }

    //creating compound Body
    var bods = Phaser.Physics.Matter.Matter.Bodies;
    var rect = bods.rectangle(200,200,50,50)
    var circ1 = bods.circle(250,200,25)
    var circ2 = bods.circle(150,200,25);

    var compoundBody = Phaser.Physics.Matter.Matter.Body.create({
      parts: [rect, circ1, circ2]
    });

    this.matter.add.worldConstraint(compoundBody,100,0.5,{
      pointA:{x:400,y:150},
      pointB:{x:50,y:0}
    })
    this.matter.add.worldConstraint(compoundBody,100,0.5,{
      pointA:{x:400,y:150},
      pointB:{x:-50,y:0}
    })

    this.matter.world.add(compoundBody)

    this.gameBodies.push(compoundBody)
  }

  update(){
    this.gameBodies.forEach(body=>{
      if(body.position.y > 600) Phaser.Physics.Matter.Matter.Body.setPosition(body, {x: body.position.x, y: 0})
    })
  }
}
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {
                y: 1
            }
        }
    },
    scene: [SceneA]
};


var game = new Phaser.Game(config);
