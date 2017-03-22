import ExampleObject from 'objects/ExampleObject';

class Main extends Phaser.State {

    constructor(props) {
        super(props);
        this.player;
        this.cursors;
    }

    create() {

        //Enable Arcade Physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        // this.game.physics.arcade.enable(this.player);
        //Set the games background colour
        this.game.stage.backgroundColor = '#cecece';

        this.player = this.game.add.sprite(0, 0, 'player');
        this.player.animations.add('up',    [0,1,2], 10, true);
        this.player.animations.add('down',  [0,1,2], 10, true);
        this.player.animations.add('left',  [3,4,5], 10, true);
        this.player.animations.add('right', [6,7,8], 10, true);
        // this.player.body.collideWorldBounds = true;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.camera.follow(this.player);

        //Example of including an object
        //let exampleObject = new ExampleObject(this.game);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.x -= 4;
            this.player.animations.play('left');
        } else if (this.cursors.right.isDown) {
            this.player.x += 4;
            this.player.animations.play('right');
        } else if (this.cursors.up.isDown) {
            this.player.y -= 4;
            this.player.animations.play('up');
        } else if (this.cursors.down.isDown) {
            this.player.y += 4;
            this.player.animations.play('down');
        } else {
            this.player.animations.stop();
            this.player.frame = 1;
        }
    }

}

export default Main;
