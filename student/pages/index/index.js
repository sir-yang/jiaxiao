// student/pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        reserTk: 'hide'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    indexEven(e) {
        let dataset = e.currentTarget.dataset;
        console.log(e);
        if (dataset.types == 'startReser') {
            this.setData({
                reserTk: 'show'
            });
        } else if (dataset.types == 'closeReser') {
            this.setData({
                reserTk: 'hide'
            });
        } else if (dataset.types == 'address') {
            wx.chooseLocation({
                success(res) {
                    console.log(res);
                },
                fail(err) {
                    console.log(err);
                }
            });
        }
    },

    // 提交预约
    submitDeposit(event) {
        console.log(event);
        let vals = event.detail.value;
        wx.navigateTo({
            url: '/student/pages/findCoach/findCoach',
        });
    }
})