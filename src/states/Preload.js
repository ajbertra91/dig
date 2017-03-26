class Preload extends Phaser.State {

    preload() {
        // this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
        // this.preloadBar.anchor.setTo(0.5);

        // this.load.setPreloadSprite(this.preloadBar);

        /* Preload required assets */
        // player
        this.game.load.spritesheet('player', '/assets/dig_joshua.png', 48,48);
        // tools
        this.game.load.image('tool_menu', '/assets/tool_menu.png');
        this.game.load.spritesheet('hammer-pick', '/assets/hammer_pick.png', 48,48);
        // maps stuff
        this.game.load.tilemap('tilemapJson_map1', '/assets/map1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles_map1', '/assets/forest_tileset_16x16.png');
        this.game.load.image('stones1', '/assets/stones1.png');
        this.game.load.image('stones2', '/assets/stones2.png');

        //this.game.load.audio('myAudio', '/assets/my-audio.wav');
        //this.game.load.atlas('myAtlas', '/assets/my-atlas.png', 'assets/my-atlas.json');
    }

    create() {
        //NOTE: Change to GameTitle if required
        this.game.state.start("Main");
    }

}

export default Preload;
