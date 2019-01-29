class SceneA extends Phaser.Scene {
  constructor(){
    super();
  }
  preload(){

  }
  create(){
    this.matter.world.setBounds()

    for(var i = 0; i < 100; i++){

      const x = Phaser.Math.Between(0,800)
      const y = Phaser.Math.Between(0,600)
      const r = Phaser.Math.Between(5,30)


      let circle = this.matter.add.circle(x,y,r)
      circle.restitution = 1
      // console.log(circle);
    }





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
