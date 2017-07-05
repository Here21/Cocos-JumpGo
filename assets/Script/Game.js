// 模块化
var HeroPlayer = require("Hero");


cc.Class({
    extends: cc.Component,

    properties: {
        // 主角节点
        player: {
            default: null,
            type: cc.Node
        },
        // bgsprite1 节点，用于背景移动
        bgSprite1: {
            default: null,
            type: cc.Node
        },
        // bgsprite2 节点，用于背景移动
        bgSprite2: {
            default: null,
            type: cc.Node
        },
        // score label 的引用
        scoreDisplay: {
            default: null,
            type: cc.Label
        }
        
    },

    setEventControl: function () {
        var self = this;
        var hero = self.player.getComponent(HeroPlayer);
        console.log(hero);

        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log('Touch Moved: ' + event.getLocationX());
            console.log('Mouse start');
            hero.node.runAction(hero.initialAction());
        }, this);
        
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            console.log('Mouse end');
        }, this);
    },

    // use this for initialization
    onLoad: function () {
        this.setEventControl();
        this.score = 10;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
