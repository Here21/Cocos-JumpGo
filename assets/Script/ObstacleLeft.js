cc.Class({
    extends: cc.Component,

    properties: {
        time: 0,
    },

    ObstacleLeftAction: function () {
        var obstacleLeftAction = cc.repeatForever(
            cc.sequence(
                cc.moveBy(this.time, cc.p(196, 0)),
                cc.moveBy(this.time, cc.p(-196, 0))
            )
        )
        this.node.runAction(obstacleLeftAction);
    },
    // use this for initialization
    onLoad: function () {
        this.ObstacleLeftAction();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
