class SceneB extends SceneBASE {
  constructor(){
    super("sceneB", "level2", "sceneA");
  }
  preload(){
    super.preload()
    this.load.tilemapTiledJSON('level2', 'assets/tiles/level2.json')
  }

}
