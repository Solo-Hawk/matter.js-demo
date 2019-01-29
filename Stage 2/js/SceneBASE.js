class SceneBASE extends Phaser.Scene{
  constructor(id, levelKey, nextLevel){
    super(id);
    this.id = id;
    this.levelKey = levelKey;
    this.nextLevel = nextLevel;
  }
  preload(){
    this.load.image('tileset', 'assets/tiles/kenney-tileset-64px-extruded.png')
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

    this.map = this.make.tilemap({key: this.levelKey})
    var tileset = this.map.addTilesetImage('kenney-tileset-64px-extruded', 'tileset');
    this.map.createStaticLayer('background', tileset, 0,0)
    this.platforms = this.map.createStaticLayer('platforms', tileset, 0,0)
    this.platforms.setCollisionByProperty({collides: true});
    this.matter.world.convertTilemapLayer(this.platforms)

    var end = this.map.getObjectLayer("endpoint").objects[0]

    this.endpoint = this.matter.add.rectangle(end.x + (end.width / 2), end.y + (end.height / 2), end.width,end.height, { isStatic: true, isSensor: true });

    console.log("endpoint", this.endpoint);

    this.player = new Player(this, this.map.widthInPixels/2 , this.map.heightInPixels - 128)


    this.matter.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)

    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.zoom = 1.2;
    this.cameras.main.startFollow(this.player.sprite);

    this.keys = this.input.keyboard.addKeys({
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      a: Phaser.Input.Keyboard.KeyCodes.A,
      d: Phaser.Input.Keyboard.KeyCodes.D
    })
    console.log(this.player);
    this.matterCollision.addOnCollideStart({
      objectA: this.player.sprite,
      objectB: this.endpoint,
      callback: eventData => {

        this.scene.restart()
        this.scene.switch(this.nextLevel)
      }

  })
}
  update(){
    if(Phaser.Input.Keyboard.JustDown(this.keys.space)){
      this.player.sprite.setVelocityY(-30)
    }
    if (this.keys.left.isDown || this.keys.a.isDown) {

        this.player.sprite.setVelocityX(-13)
    } else if (this.keys.right.isDown || this.keys.d.isDown) {

        this.player.sprite.setVelocityX(13)
    } else{

    }

  }
}
