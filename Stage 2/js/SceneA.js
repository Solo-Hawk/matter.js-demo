class SceneA extends SceneBASE {
  constructor(){
    super("sceneA", "level1", "sceneB");
  }
  preload(){
    super.preload()
    this.load.tilemapTiledJSON('level1', 'assets/tiles/level1.json')
  }
  
}
