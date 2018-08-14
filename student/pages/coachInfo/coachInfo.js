// student/pages/coachInfo/coachInfo.js
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

    // 事件处理
    coachInfoEven(e) {
        console.log(e);
        let dataset = e.currentTarget.dataset;
        if (dataset.types == 'collect') {//收藏
            console.log('收藏');
        } else if (dataset.types == 'call') {//联系
            console.log('联系');
        } else if (dataset.types == 'cancel') {//取消
            console.log('取消');
            this.setData({
                reserTk: 'show'
            });
        } else if (dataset.types == 'sure') {//确认取消
            console.log('确认取消');
        } else if (dataset.types == 'close') {//关闭弹框
            console.log('关闭弹框');
            this.setData({
                reserTk: 'hide'
            });
        }
    }
})