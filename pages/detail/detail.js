// pages/detail/detail.js
import {
  network
} from "../../utils/network.js";
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
    var type = options.type;
    var id = options.id;
    var actorsArr = [];

    that.setData({
      type: type,
      id: id
    })
    network.getTtemDetail({
      type: type,
      id: id,
      success: function(item) {
        var genres = item.genres;
        var actors = item.actors.slice(0, 4);
        for (var i = 0; i < actors.length; i++) {
          actorsArr.push(actors[i].name);
        }
        item.actors = actorsArr.join(" / ");
        genres = genres.join("/");
        item.genres = genres;
        that.setData({
          item: item
        });
        console.log(item)
      }
    })

    network.getItemTages({
      type: type,
      id: id,
      success: function(tags) {
        that.setData({
          tags: tags
        })
      }
    })

    network.getItemComments({
      type: type,
      id: id,
      success: function(data) {
        console.log(data)
        var totalComments = data.total;
        var comments = data.interests;
        that.setData({
          totalComments: totalComments,
          comments: comments
        })
      }
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
    wx.pageScrollTo({
      scrollTop: 0,
    })
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

  }
})