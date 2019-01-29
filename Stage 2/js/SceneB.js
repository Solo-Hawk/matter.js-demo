class SceneB extends Phaser.Scene {
  constructor(){
    super("sceneB");
  }
  preload(){
    console.log("tileset");
    this.load.image('tileset', 'assets/tiles/kenney-tileset-64px-extruded.png')
    console.log("JSON Level");
    this.load.tilemapTiledJSON('level2', 'assets/tiles/level2.json')
    this.load.spritesheet(
      'player',
      'assets/sprites/0x72-industrial-player-32px-extruded.png',{
        frameWidth:32,
        frameHeight:32,
        margin:1,
        space:2
      }
    )
  }
  create(){
    console.log(this)

    this.map = this.make.tilemap({key: 'level2'})
    var tileset = this.map.addTilesetImage('kenney-tileset-64px-extruded', 'tileset');
    this.map.createStaticLayer('background', tileset, 0,0)
    this.platforms = this.map.createStaticLayer('platforms', tileset, 0,0)
    this.platforms.setCollisionByProperty({collides: true});
    this.matter.world.convertTilemapLayer(this.platforms)

    this.player = new Player(this, 64, this.map.heightInPixels - 128)


    this.matter.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)

    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.zoom = 1;
    this.cameras.main.startFollow(this.player.sprite);

    this.keys = this.input.keyboard.addKeys({
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      a: Phaser.Input.Keyboard.KeyCodes.A,
      d: Phaser.Input.Keyboard.KeyCodes.D
    })

  }
  update(){
    if(Phaser.Input.Keyboard.JustDown(this.keys.space)){
      this.scene.switch('sceneA')
    }
  }
}
