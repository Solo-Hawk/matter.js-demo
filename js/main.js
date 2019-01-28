class SceneA extends Phaser.Scene {
  constructor(){
    super();
  }
  preload(){

  }
  create(){
    this.matter.world.setBounds()

    const x = Phaser.Math.Between(0,800)
    const y = Phaser.Math.Between(0,600)
    
    let box = this.matter.add.sprite(x,y,'')
    box.setBounce(0.99);
    box.setMass(10);
    box.setFriction(0.5);

    let circle = this.matter.add.circle(x,y,10)
    circle.restitution = 0.9
    console.log(circle);





    this.matter.add.mouseSpring();


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
