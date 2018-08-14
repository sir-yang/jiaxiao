// student/pages/certification/certification.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasDriver: false
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

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    // 单选切换事件
    radioChange(e) {
        let va = e.detail.value;
        this.setData({
            hasDriver: va == 1 ? true : false
        });
    },
    
    // 提交表单数据
    submitEven(e) {
        console.log(e);
        wx.navigateTo({
            url: '/student/pages/certificationResult/certificationResult'
        });
    },

    // 上传图片
    chooseImage() {
        wx.chooseImage({
            count: 1,
            success: function(res) {
                console.log(res);
            },
        })
    }

})