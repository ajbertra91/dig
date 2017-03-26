function Player(game, obj={}) {
    obj.player = game.add.sprite(0, 0, 'player');
    obj.player.animations.add('up',    [9,10,11], 10, true);
    obj.player.animations.add('down',  [0,1,2], 10, true);
    obj.player.animations.add('left',  [3,4,5], 10, true);
    obj.player.animations.add('right', [6,7,8], 10, true);
    obj.player.scale.setTo(0.75,0.75);
    game.physics.arcade.enable(obj.player);
    obj.player.body.collideWorldBounds = true;

    return obj.player;
}

export default Player;