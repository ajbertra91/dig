// import ExampleObject from 'objects/ExampleObject';
import Player from 'objects/Player';
import Menu from 'menus/Menu';

class Main extends Phaser.State {

    constructor(props) {
        super(props);

        this.player;
        this.cursors;

        this.map;
        this.backgroundlayer;
        this.treeLayer;
        this.dirtLayer;
        this.lakeLayer;
        this.shrubsLayer;
        this.objectLayer;
        this.respawnGrp;
        this.digSitesGrp;
    }

    create() {

        // Enable Arcade Physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        // Set the games background colour
        this.game.stage.backgroundColor = '#357736';

        this.respawnGrp = this.game.add.group();

        this.map = this.game.add.tilemap('tilemapJson_map1');
        // the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
        this.map.addTilesetImage('dig_terrainTileset', 'tiles_map1');
        // create layer
        this.backgroundlayer = this.map.createLayer('background');
        this.treeLayer = this.map.createLayer('trees');
        this.dirtLayer = this.map.createLayer('dirt');
        this.lakeLayer = this.map.createLayer('lake');
        this.shrubsLayer = this.map.createLayer('shrubs');
        // this.objectLayer = this.map.createLayer('objectLayer');
        // collision on blockedLayer
        this.map.setCollisionBetween(0, 400, true, 'trees');
        this.map.setCollisionBetween(0, 400, true, 'lake');
        // creat the spawn point
        this.map.createFromObjects('objectLayer',26,'',0,true,false,this.respawnGrp);
        // resizes the game world to match the layer dimensions
        this.backgroundlayer.resizeWorld();

        this.createDigSites();

        this.player = Player(this.game, {});
        this.spawn();
        this.game.physics.arcade.collide(this.player, this.treeGroup);

        // Setup Keyboard Controls
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.cursors.w = this.game.input.keyboard.addKey(87);
        this.cursors.a = this.game.input.keyboard.addKey(65);
        this.cursors.s = this.game.input.keyboard.addKey(83);
        this.cursors.d = this.game.input.keyboard.addKey(68);
        this.game.camera.follow(this.player);

        this.PauseMenu = Menu(this.game, 'Tools', 'tool_menu', {});

    }

    update() {
        let VELOCITY = 200;
        let MAX_VELOCITY = 200;
        this.player.body.maxVelocity.x = MAX_VELOCITY;
        this.player.body.maxVelocity.y = MAX_VELOCITY;
        if (this.cursors.left.isDown || this.cursors.a.isDown) {
            this.player.body.velocity.x -= VELOCITY;
            this.player.body.velocity.y = 0;
            this.player.animations.play('left');
        } else if (this.cursors.right.isDown || this.cursors.d.isDown) {
            this.player.body.velocity.x += VELOCITY;
            this.player.body.velocity.y = 0;
            this.player.animations.play('right');
        } else if (this.cursors.up.isDown || this.cursors.w.isDown) {
            this.player.body.velocity.y -= VELOCITY;
            this.player.body.velocity.x = 0;
            this.player.animations.play('up');
        } else if (this.cursors.down.isDown || this.cursors.s.isDown) {
            this.player.body.velocity.y += VELOCITY;
            this.player.body.velocity.x = 0;
            this.player.animations.play('down');
        } else {
            this.player.animations.stop();
            this.player.frame = 1;
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
        }
        this.game.physics.arcade.collide(this.player, this.treeLayer);
        this.game.physics.arcade.collide(this.player, this.lakeLayer);
    }

    spawn() {
        this.respawnGrp.forEach(spawnPoint => {
            this.player.reset(spawnPoint.x, spawnPoint.y);
        })
    }

    createDigSites() {
        //create items
        this.digSitesGrp = this.game.add.group();
        this.digSitesGrp.enableBody = true;
        let digSitesArray = this.findObjectsByType('sprite', this.map, 'objectLayer');
        digSitesArray.forEach(digSite => {
            this.createFromTiledObject(digSite, this.digSitesGrp);
        }, this);
    }

    //find objects in a Tiled layer that containt a property called "type" equal to a certain value
    findObjectsByType(type,map,layer) {
        let result = [];
        map.objects[layer].forEach(element => {
            if (element.properties && element.properties.type === type) {
                //Phaser uses top left, Tiled bottom left so we have to adjust
                //also keep in mind that the cup images are a bit smaller than the tile which is 16x16
                //so they might not be placed in the exact position as in Tiled
                element.y -= map.tileHeight;
                result.push(element);
            }
        });
        return result;
    }

    //create a sprite from an object
    createFromTiledObject(element, group) {
        let sprite = group.create(element.x, element.y, element.properties.imageKey);

        //copy all properties to the sprite
        Object.keys(element.properties).forEach(key =>{
            sprite[key] = element.properties[key];
        });
    }

}

export default Main;
