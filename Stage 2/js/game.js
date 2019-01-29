
var config = {
  type: Phaser.AUTO,
  width: 64*10,
  height: 64*16,
  pixelArt: false,
  physics: {
    default: 'matter',
    matter:{
      debug: true,
      gravity:{
        x:0,
        y:4
      }
    }
  },
  scene: [SceneA, SceneB],
  plugins: {
    scene: [{
        plugin: PhaserMatterCollisionPlugin, // The plugin class
        key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
        mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision
      }]
  }
}

var game = new Phaser.Game(config)
