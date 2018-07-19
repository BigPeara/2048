var app = getApp();

var GameManager = require('./game_manager.js');

var config = {
    data: {
        hidden: false,
        score: 0,
        highscore: 0
    },
    onLoad: function() {

    },
    onReady: function() {
        var that = this;

        // 页面渲染完毕隐藏loading
        that.setData({
            hidden: true
        });
    },
    onShow: function() {
        // 页面展示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    },

    // 更新视图数据
    updateView: function(data) {

    }

};

Page(config);