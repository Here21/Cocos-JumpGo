cc.Class({
    extends: cc.Component,

    properties: {
        time: 0,
    },

    ObstacleRightAction: function () {
        var obstacleRightAction = cc.repeatForever(
            cc.sequence(
                cc.moveBy(this.time, cc.p(-196, 0)),
                cc.moveBy(this.time, cc.p(196, 0))
            )
        )
        this.node.runAction(obstacleRightAction);
    },
    // use this for initialization
    onLoad: function () {
        this.ObstacleRightAction();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
