// student/pages/certificationResult/certificationResult.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    navitoPage(e) {
        let types = e.currentTarget.dataset.types;
        if (types == 'tutorial') {
            wx.navigateTo({
                url: '/student/pages/index/index',
            });
        } else if (types == 'index') {
            wx.navigateTo({
                url: '/student/pages/index/index',
            });
        }
    }
})