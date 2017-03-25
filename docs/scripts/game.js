(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesBoot = require('states/Boot');

var _statesBoot2 = _interopRequireDefault(_statesBoot);

var _statesPreload = require('states/Preload');

var _statesPreload2 = _interopRequireDefault(_statesPreload);

var _statesGameTitle = require('states/GameTitle');

var _statesGameTitle2 = _interopRequireDefault(_statesGameTitle);

var _statesMain = require('states/Main');

var _statesMain2 = _interopRequireDefault(_statesMain);

var _statesGameOver = require('states/GameOver');

var _statesGameOver2 = _interopRequireDefault(_statesGameOver);

var Game = (function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		// super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO);
		_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, 800 * window.devicePixelRatio, 600 * window.devicePixelRatio, Phaser.AUTO);

		this.state.add('Boot', _statesBoot2['default'], false);
		this.state.add('Preload', _statesPreload2['default'], false);
		this.state.add('GameTitle', _statesGameTitle2['default'], false);
		this.state.add('Main', _statesMain2['default'], false);
		this.state.add('GameOver', _statesGameOver2['default'], false);

		this.state.start('Boot');
	}

	return Game;
})(Phaser.Game);

new Game();

},{"states/Boot":3,"states/GameOver":4,"states/GameTitle":5,"states/Main":6,"states/Preload":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ActiveTool = (function () {
    function ActiveTool(game, tool) {
        _classCallCheck(this, ActiveTool);

        //Do something
        this.button = game.add.button(game.world.centerX - 95, 400, tool, this.actionOnClick, this, 1, 0, 2);

        this.button.onInputOver.add(this.over, this);
        this.button.onInputOut.add(this.out, this);
        this.button.onInputUp.add(this.up, this);
    }

    _createClass(ActiveTool, [{
        key: 'up',
        value: function up() {
            console.log('button up', arguments);
        }
    }, {
        key: 'over',
        value: function over() {
            console.log('button over');
        }
    }, {
        key: 'out',
        value: function out() {
            console.log('button out');
        }
    }, {
        key: 'actionOnClick',
        value: function actionOnClick() {
            console.log('actionOnClick Fired');
        }
    }]);

    return ActiveTool;
})();

exports['default'] = ActiveTool;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = (function (_Phaser$State) {
    _inherits(Boot, _Phaser$State);

    function Boot() {
        _classCallCheck(this, Boot);

        _get(Object.getPrototypeOf(Boot.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Boot, [{
        key: "preload",
        value: function preload() {}
    }, {
        key: "create",
        value: function create() {
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.start("Preload");
        }
    }]);

    return Boot;
})(Phaser.State);

exports["default"] = Boot;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameOver = (function (_Phaser$State) {
	_inherits(GameOver, _Phaser$State);

	function GameOver() {
		_classCallCheck(this, GameOver);

		_get(Object.getPrototypeOf(GameOver.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(GameOver, [{
		key: "create",
		value: function create() {}
	}, {
		key: "restartGame",
		value: function restartGame() {
			this.game.state.start("Main");
		}
	}]);

	return GameOver;
})(Phaser.State);

exports["default"] = GameOver;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameTitle = (function (_Phaser$State) {
    _inherits(GameTitle, _Phaser$State);

    function GameTitle() {
        _classCallCheck(this, GameTitle);

        _get(Object.getPrototypeOf(GameTitle.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(GameTitle, [{
        key: "create",
        value: function create() {}
    }, {
        key: "startGame",
        value: function startGame() {
            this.game.state.start("Main");
        }
    }]);

    return GameTitle;
})(Phaser.State);

exports["default"] = GameTitle;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
// import ExampleObject from 'objects/ExampleObject';
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsActiveTool = require('objects/ActiveTool');

var _objectsActiveTool2 = _interopRequireDefault(_objectsActiveTool);

var Main = (function (_Phaser$State) {
    _inherits(Main, _Phaser$State);

    function Main(props) {
        _classCallCheck(this, Main);

        _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).call(this, props);

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

    _createClass(Main, [{
        key: 'create',
        value: function create() {

            //Enable Arcade Physics
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            //Set the games background colour
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
            this.map.createFromObjects('objectLayer', 26, '', 0, true, false, this.respawnGrp);
            // resizes the game world to match the layer dimensions
            this.backgroundlayer.resizeWorld();

            this.createDigSites();

            this.player = this.game.add.sprite(0, 0, 'player');
            this.spawn();
            this.player.animations.add('up', [9, 10, 11], 10, true);
            this.player.animations.add('down', [0, 1, 2], 10, true);
            this.player.animations.add('left', [3, 4, 5], 10, true);
            this.player.animations.add('right', [6, 7, 8], 10, true);
            this.player.scale.setTo(0.75, 0.75);

            this.game.physics.arcade.enable(this.player);
            this.player.body.collideWorldBounds = true;
            this.game.physics.arcade.collide(this.player, this.treeGroup);

            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.game.camera.follow(this.player);

            this.activeTool = new _objectsActiveTool2['default'](this.game, 'hammer-pick');

            //Example of including an object
            //let exampleObject = new ExampleObject(this.game);
        }
    }, {
        key: 'update',
        value: function update() {
            var VELOCITY = 200;
            var MAX_VELOCITY = 200;
            this.player.body.maxVelocity.x = MAX_VELOCITY;
            this.player.body.maxVelocity.y = MAX_VELOCITY;
            if (this.cursors.left.isDown) {
                this.player.body.velocity.x -= VELOCITY;
                this.player.body.velocity.y = 0;
                this.player.animations.play('left');
            } else if (this.cursors.right.isDown) {
                this.player.body.velocity.x += VELOCITY;
                this.player.body.velocity.y = 0;
                this.player.animations.play('right');
            } else if (this.cursors.up.isDown) {
                this.player.body.velocity.y -= VELOCITY;
                this.player.body.velocity.x = 0;
                this.player.animations.play('up');
            } else if (this.cursors.down.isDown) {
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
    }, {
        key: 'spawn',
        value: function spawn() {
            var _this = this;

            this.respawnGrp.forEach(function (spawnPoint) {
                _this.player.reset(spawnPoint.x, spawnPoint.y);
            });
        }
    }, {
        key: 'createDigSites',
        value: function createDigSites() {
            var _this2 = this;

            //create items
            this.digSitesGrp = this.game.add.group();
            this.digSitesGrp.enableBody = true;
            var digSitesArray = this.findObjectsByType('sprite', this.map, 'objectLayer');
            digSitesArray.forEach(function (digSite) {
                _this2.createFromTiledObject(digSite, _this2.digSitesGrp);
            }, this);
        }

        //find objects in a Tiled layer that containt a property called "type" equal to a certain value
    }, {
        key: 'findObjectsByType',
        value: function findObjectsByType(type, map, layer) {
            var result = [];
            map.objects[layer].forEach(function (element) {
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
    }, {
        key: 'createFromTiledObject',
        value: function createFromTiledObject(element, group) {
            var sprite = group.create(element.x, element.y, element.properties.imageKey);

            //copy all properties to the sprite
            Object.keys(element.properties).forEach(function (key) {
                sprite[key] = element.properties[key];
            });
        }
    }]);

    return Main;
})(Phaser.State);

exports['default'] = Main;
module.exports = exports['default'];

},{"objects/ActiveTool":2}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = (function (_Phaser$State) {
    _inherits(Preload, _Phaser$State);

    function Preload() {
        _classCallCheck(this, Preload);

        _get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Preload, [{
        key: 'preload',
        value: function preload() {
            // this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
            // this.preloadBar.anchor.setTo(0.5);

            // this.load.setPreloadSprite(this.preloadBar);

            /* Preload required assets */
            // player
            this.game.load.spritesheet('player', '/assets/dig_joshua.png', 48, 48);
            // tools
            this.game.load.spritesheet('hammer-pick', '/assets/hammer_pick.png', 48, 48);
            // maps stuff
            this.game.load.tilemap('tilemapJson_map1', '/assets/map1.json', null, Phaser.Tilemap.TILED_JSON);
            this.game.load.image('tiles_map1', '/assets/forest_tileset_16x16.png');
            this.game.load.image('stones1', '/assets/stones1.png');
            this.game.load.image('stones2', '/assets/stones2.png');

            //this.game.load.audio('myAudio', '/assets/my-audio.wav');
            //this.game.load.atlas('myAtlas', '/assets/my-atlas.png', 'assets/my-atlas.json');
        }
    }, {
        key: 'create',
        value: function create() {
            //NOTE: Change to GameTitle if required
            this.game.state.start("Main");
        }
    }]);

    return Preload;
})(Phaser.State);

exports['default'] = Preload;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=game.js.map
