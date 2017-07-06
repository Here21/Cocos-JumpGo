cc.Class({
    extends: cc.Component,

    properties: {
      jumpHeight: 0,
      jumpDuration: 0,
      dropSpeed: 0,
    },

    // 跳跃
    setJumpAction:function () {
        // 跳跃上升阶段 moveBy ( duration  deltaPos  [deltaY ] )  return ActionInterval
        // cc.p 创建 cc.Vec2 对象 (表示 2D 向量和坐标)
        var jump = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight));
        return jump;
    },

    // 下落
    setDropAction: function () {
        var drop = cc.moveBy(this.jumpDuration, cc.p(0, -this.dropSpeed));
        return drop;
    },

    // 初始化状态
    initialAction: function () {
        this.jumpAction = this.setJumpAction();
        this.dropAction = this.setDropAction();
        // 包装动作 cc.sequence 顺序执行动作，创建的动作将按顺序依次运行。
        var seq = cc.sequence(this.jumpAction, this.dropAction);
        return seq;
    },

    heroDrop: function () {
        var heroDrop = cc.moveBy(0.8, cc.p(0, -1));
        return heroDrop;
    },
    
     // use this for initialization
    onLoad: function () {
        this.initialAction();
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        // 执行并返回该执行的动作。该节点将会变成动作的目标。
        this.node.runAction(this.heroDrop());
    },
    
});
