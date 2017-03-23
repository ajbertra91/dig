import ExampleObject from 'objects/ExampleObject';

class Main extends Phaser.State {

    constructor(props) {
        super(props);
        this.player;
        this.cursors;

        this.ground;
        this.treesGroup;
    }

    create() {

        //Enable Arcade Physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //Set the games background colour
        this.game.stage.backgroundColor = '#357736';

        this.ground = this.game.add.tileSprite(0,0, this.game.width, this.game.height, 'groundTile1');
        this.ground.scale.setTo(1,1);

        this.treesGroup = this.game.add.group();
        this.treesGroup.enableBody = true;
        for (let i=0;i<25;i++) {
            let x = this.game.rnd.integerInRange(32, this.game.width - 32);
            let y = this.game.rnd.integerInRange(64, this.game.height - 64);
            let tree = this.treesGroup.create(x,y,'tree1').scale.setTo(2,2);
            this.game.physics.enable(tree);
            tree.body.immovable = true;
        }

        this.player = this.game.add.sprite(0, 0, 'player');
        this.player.animations.add('up',    [9], 10, true);
        this.player.animations.add('down',  [0,1,2], 10, true);
        this.player.animations.add('left',  [3,4,5], 10, true);
        this.player.animations.add('right', [6,7,8], 10, true);
        this.player.scale.setTo(1,1);

        this.game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        this.game.physics.arcade.collide(this.player, this.treesGroup);

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
