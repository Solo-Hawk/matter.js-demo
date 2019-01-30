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

    this.matter.add.rectangle(400, 750, 800, 100, {
      isStatic: true
    });

    var bods = Phaser.Physics.Matter.Matter.Bodies;
    var rect1 = bods.rectangle(250,200,400,25)
    var circ1 = bods.circle(400,200,25)
    var circ2 = bods.circle(100,200,25);
    var rect2 = bods.rectangle(327,80,300,25,{angle:45})
    var rect3 = bods.rectangle(173,80,300,25,{angle:-45})


    var compoundBody = Phaser.Physics.Matter.Matter.Body.create({
      parts: [rect1, rect2, rect3, circ1, circ2]
    });
    compoundBody.collisionFilter.group = -1
    this.matter.world.add(compoundBody)

    var arm = Phaser.Physics.Matter.Matter.Bodies.rectangle(250,50,400,10,{
      collisionFilter:{group:-1}
    })
    this.matter.add.constraint(arm,compoundBody,0,0.9,{
      pointA:{x:50, y:0},
      pointB:{x:0,y:-170}
    })

    this.matter.world.add(arm)

    var cWeight = Phaser.Physics.Matter.Matter.Bodies.rectangle(450,50,50,50,{
      collisionFilter:{group:-1}
    })
    this.matter.add.constraint(cWeight,arm,100,0.9,{
      pointA:{x:0,y:0},
      pointB:{x:200,y:0}
    })

    this.matter.world.add(cWeight)
  }

  update(){

  }
}
var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 1000,
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
