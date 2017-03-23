class Preload extends Phaser.State {

    preload() {
        /* Preload required assets */
        //this.game.load.image('myImage', 'assets/my-image.png');
        this.game.load.spritesheet('player', '/assets/dig_joshua.png', 48,48);
        this.game.load.image('groundTile1', '/assets/ground_tile1.png');
        this.game.load.image('tree1', '/assets/tree1.png');

        //this.game.load.audio('myAudio', 'assets/my-audio.wav');
        //this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
    }

    create() {
        //NOTE: Change to GameTitle if required
        this.game.state.start("Main");
    }

}

export default Preload;
