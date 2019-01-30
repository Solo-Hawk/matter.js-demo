class SceneLoading extends Phaser.Scene{
  constructor(){
    super()
    console.log("Scene Loading")
  }

  preload(){
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);
    this.load.on('progress', function (value) {
      console.log(value);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
  }

  create(){

  }

  update(){

  }


}
