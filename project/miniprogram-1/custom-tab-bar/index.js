// custom-tab-bar/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: [{
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "/static/tarbar-icon/index.png",
      "selectedIconPath": "/static/tarbar-icon/index_active.png"
    }, {
      "pagePath": "pages/page1/index",
      "text": "第一页",
      "iconPath": "/static/tarbar-icon/page1.png",
      "selectedIconPath": "/static/tarbar-icon/page1_active.png"
    }, {
      "pagePath": "pages/page2/index",
      "text": "第二页",
      "iconPath": "/static/tarbar-icon/page2.png",
      "selectedIconPath": "/static/tarbar-icon/page2_active.png"
    }, {
      "pagePath": "pages/page3/index",
      "text": "第三页",
      "iconPath": "/static/tarbar-icon/page3.png",
      "selectedIconPath": "/static/tarbar-icon/page3_active.png"
    }]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // this.setData({
      //   active: event.detail
      // });
      wx.switchTab({
        url: '/' + this.data.list[event.detail].pagePath
      });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.pagePath === page.route)
      });
    },
  }
})