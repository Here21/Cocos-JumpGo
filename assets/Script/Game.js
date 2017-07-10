// 模块化
var HeroPlayer = require("Hero");
var BgMove = require("BgMove");


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
        // 绑定组件
        var hero = self.player.getComponent(HeroPlayer);
        var bg1 = self.bgSprite1.getComponent(BgMove);
        var bg2 = self.bgSprite2.getComponent(BgMove);

        // touch 开始
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            hero.node.runAction(hero.initialAction());
        }, this);
        // touch结束
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log('Mouse end');

            if (self.player.getPositionY() > 0) {
                // 背景需要移动的高度
                var height = self.player.getPositionY();
                // 设置精灵移动的高度
                self.player.setPositionY(height / 2);
                
                bg1.node.runAction(bg1.setMoveAction(height, hero.jumpDuration));
                bg2.node.runAction(bg2.setMoveAction(height, hero.jumpDuration));
            }
        }, this);
    },

    bgScrollAction: function () {
        // 要先通过背景的锚点，与素材的高度去判断位置与拼接的位置
        console.log("bg1 position :"+this.bgSprite1.getPositionY());
        if (this.bgSprite1.getPositionY() < -350) {
            // 1600是两个背景的锚点之间的距离
            this.bgSprite2.setPositionY(1600 + this.bgSprite1.getPositionY())
        }
        console.log("bg2 position :"+this.bgSprite2.getPositionY());
        if (this.bgSprite2.getPositionY() < -350) {
            this.bgSprite1.setPositionY(1600 + this.bgSprite2.getPositionY())
        }
    },

    // use this for initialization
    onLoad: function () {
        this.setEventControl();
        this.score = 10;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.bgScrollAction();
    },
});
