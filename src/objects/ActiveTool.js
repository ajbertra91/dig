class ActiveTool {

    constructor(game,tool){
        //Do something
        this.button = game.add.button(game.world.centerX - 95, 400, tool, this.actionOnClick, this, 1, 0, 2);

        this.button.onInputOver.add(this.over, this);
        this.button.onInputOut.add(this.out, this);
        this.button.onInputUp.add(this.up, this);
    }

    up() {
        console.log('button up', arguments);
    }

    over() {
        console.log('button over');
    }

    out() {
        console.log('button out');
    }

    actionOnClick() {
        console.log('actionOnClick Fired');
    }

}

export default ActiveTool;