// pages/search/search.js
import {
  network
} from "../../utils/network.js"
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
    var that = this;
    wx.getStorage({
      key: 'searched',
      success: function(res) {
        var data = res.data
        that.setData({
          histories: data
        })
        console.log(res)
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onSearchInputEvent: function(event) {
    var that = this;
    var value = event.detail.value;
    if(!value || value === ""){
      that.setData({
        subjects:[]
      })
      return;
    }
    network.getSeach({
      q: value,
      success: function(subjects) {
        that.setData({
          subjects: subjects
        })
      }
    })
  },
  onItemTapEvent: function(event) {
    var that = this;
    var id = event.currentTarget.dataset.id;
    var title = event.currentTarget.dataset.title;
    var histories = that.data.histories;
    var falg = false;
    if (histories){
      for (var i = 0; i <= histories.length; i++) {
        var movie = histories[i];
        if (movie.id === id) {
          falg = true;
          break;
        }
      }
    }

    if (!falg) {
      if (!histories){
        histories = [];
      }
      histories.push({
        title: title,
        id: id
      })

      wx.setStorage({
        key: 'searched',
        data: histories,
        success: function() {

        }
      })
    }

    wx.navigateTo({
      url: '/pages/detail/detail?type=movie&id=' + id,
    })
  },
  onClearEvent:function(event){
    var that = this;
    wx.removeStorage({
      key: 'searched',
      success: function(res) {},
    })
    that.setData({
      histories:null
    })
  }
})