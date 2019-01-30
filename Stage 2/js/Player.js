class Player {
    constructor(scene, x, y) {
      this.scene = scene;
      this.sprite = scene.matter.add
        .sprite(0, 0, "player", 0)
        .setBody({type: "circle", radius: 14})
        .setScale(2)
        .setFixedRotation()
        .setPosition(x, y)
        .setBounce(0.4)
        .setFriction(0.3);
      console.log(this.sprite);

        // Create the animations we need from the player spritesheet
        this.isTouching = false;
        this.keys = this.scene.input.keyboard.addKeys({
          space: Phaser.Input.Keyboard.KeyCodes.SPACE,
          left: Phaser.Input.Keyboard.KeyCodes.LEFT,
          right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
          a: Phaser.Input.Keyboard.KeyCodes.A,
          d: Phaser.Input.Keyboard.KeyCodes.D
        })

        this.scene.input.on('pointerdown', this.handlePointerDown, this)
        this.scene.input.on('pointerup', this.handlePointerUp, this)
        this.isTouching = false;
        this.touchData = {}
    }

    handlePointerDown(pointer){
      this.touchData.startX = pointer.x;
      this.touchData.startY = pointer.y
    }
    handlePointerUp(pointer){
      this.touchData.endX = pointer.x;
      this.touchData.endY = pointer.y
      this.handleTouch()
    }
    handleTouch(){

      var launchX = this.touchData.endX - this.touchData.startX
      var launchY = this.touchData.endY - this.touchData.startY
      console.log(launchX / 100000000, launchY / 100000000);
      this.sprite.applyForce({
        x: -launchX / 1000 ,
        y: -launchY / 1000
      })
    }

    freeze() {
        this.sprite.setStatic(true);
    }

    update() {
      if(Phaser.Input.Keyboard.JustDown(this.keys.space)){
        this.sprite.setVelocityY(-30)
      }
      if (this.keys.left.isDown || this.keys.a.isDown) {
          this.sprite.setVelocityX(-13)
      } else if (this.keys.right.isDown || this.keys.d.isDown) {
          this.sprite.setVelocityX(13)
      } else{

      }
    }

    destroy() {}
}
