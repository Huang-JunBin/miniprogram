// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.hideTarBar()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getData()
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
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  /**
   * 自定义方法
   */
  open(e) {
    let uri = e.currentTarget.dataset.uri
    wx.navigateTo({
      url: '/subpackages/index/' + uri + '/index?current=首页详情页' + uri,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          data: '首页数据'
        })
      }
    })
  },
  hideTarBar() {
    console.log(222);
    wx.hideTabBar()
  },
  showTarBar() {
    console.log(111);
    wx.showTabBar()
  },
  getData() {
    setTimeout(() => {
      this.setData({
        loading: false
      })
      this.showTarBar()
    }, 5000)
  }
})