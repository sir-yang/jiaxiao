
Page({

    /**
     * 页面的初始数据
     */
    data: {
        times: 1,
        waiteTime: '00:00:00'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.timefuc();
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

    // 计时
    timefuc() {
        let that = this;
        setInterval(() => {
            let times = that.data.times;
            let waiteTime = that.data.waiteTime;
            let h = parseInt(times / (60 * 60));
            let m = parseInt(times % (60 * 60) / 60);
            let s = times % (60 * 60) % 60;
            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            waiteTime = h + ':' + m + ':' + s;
            that.setData({
                times: that.data.times + 1,
                waiteTime
            });
        }, 1000);
    }

})