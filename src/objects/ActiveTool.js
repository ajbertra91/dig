function ActiveTool(game,tool,obj={}) {
    obj.button = game.add.button(100, 400, tool, obj.actionOnClick, this, 1, 0, 2);

    obj.destroy = function destroy() {
        obj.button.destroy();
    }

    obj.up = function up() {
        console.log('button up', arguments);
    }

    obj.over = function over() {
        console.log('button over');
    }

    obj.out = function out() {
        console.log('button out');
    }

    obj.actionOnClick = function actionOnClick() {
        console.log('actionOnClick Fired');
    }

    obj.button.onInputOver.add(obj.over);
    obj.button.onInputOut.add(obj.out);
    obj.button.onInputUp.add(obj.up);

    return obj;
}

export default ActiveTool;