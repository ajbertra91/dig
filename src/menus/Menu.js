import Inventory from '../objects/Inventory';
import ActiveTool from '../objects/ActiveTool';

function Menu(game,menuLabel,sprite,inventory,obj = {}) {
    const w = game.canvas.width;
    const h = game.canvas.height;
    let toolsArray = Inventory().tools;

    obj.pKey = game.input.keyboard.addKey(80);

    obj.pKey.onUp.add((event) => {
        const game = event.game;
        if (game.paused === true) {
            obj.hideMenu(event);
        } else {
            obj.showMenu(event);
        }
    });

    obj.showMenu = function showMenu(event) {
        const game = event.game;
        const gameWidth = game.width;
        const gameHeight = game.height;
        const worldWidth = game.world.width;
        const worldHeight = game.world.height;
        const calcWidth = worldWidth - gameWidth / 2;
        const calcHeight = worldHeight - gameHeight / 2;
        const menuX =  game.camera.target.x < gameWidth/2 ? gameWidth/2 : (game.camera.target.x > calcWidth ? calcWidth : game.camera.target.x);
        const menuY =  game.camera.target.y < gameHeight/2 ? gameHeight/2 : (game.camera.target.y > calcHeight ? calcHeight : game.camera.target.y);
        game.paused = true;
        // add the menu
        obj.menu = game.add.sprite(menuX, menuY, sprite);
        obj.menu.anchor.setTo(0.5, 0.5);

        obj.addToolsToMenu(toolsArray);

        // And a label to illustrate which menu item was chosen. (This is not necessary)
        // obj.choiceLabel = game.add.text(x, game.camera.target.y, 'Click outside menu to continue', {font:'20px Arial',fill:'#fff'});
        // obj.choiceLabel.setShadow(2, 2, 'rgba(0,0,0,1)', 0);
        // obj.choiceLabel.anchor.setTo(0.5, 0.5);
    }

    obj.hideMenu = function hideMenu(event) {
        if (!obj.menu) return;
        const game = event.game;
        obj.menu.destroy();
        obj.activeTool.destroy();
        // obj.choiceLabel.destroy();
        game.paused = false;
    }

    obj.addToolsToMenu = function addToolsToMenu(tools) {
        obj.activeTool = ActiveTool(game, 'hammer-pick');
    }

    return obj;

}

export default Menu;