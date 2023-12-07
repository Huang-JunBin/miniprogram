### 注册微信小程序账号

#### 注册账号

建议开发者在准备开发/学习小程序前都应该首先前往微信公众平台注册一个小程序账号。开发者可移步微信公众平台 https://mp.weixin.qq.com ，点击【账号分类】下的【小程序】，在小程序注册页面点击【前往注册】按照要求注册小程序账号。

详细流程请查看官方文档：https://kf.qq.com/faq/170109iQBJ3Q170109JbQfiu.html

#### 查看AppID

目前，我们需要打开微信公众平台 https://mp.weixin.qq.com/ 扫码登录小程序管理后台。

<img src="https://raw.githubusercontent.com/Huang-JunBin/miniprogram/main/README_IMAGE/登录.png" alt="登录" style="zoom: 33%;" />

点击小程序管理后台左侧【开发】，随后在右侧顶部点击【开发设置】，找到页面中的AppID(小程序ID)。

![查看AppID](https://raw.githubusercontent.com/Huang-JunBin/miniprogram/main/README_IMAGE/查看AppID.png)

AppID 是非常重要的小程序 ID 相当于小程序平台的一个身份证，后续你会在很多地方要用到 AppID （注意这里要区别于服务号或订阅号的 AppID），请开发者妥善保管和保存。 

### 安装微信开发者工具

小程序的开发工具官方名称为：“微信开发者工具”，其中并不包含“小程序”3个字。看来微信的这个 IDE 并不想仅仅只是用来开发小程序。事实上也确实如此，这款开发工具不仅仅可以用来开发小程序，还可以用来调试运行在微信上的网页以及微信小游戏。

现在，微信官方提供了4个不同用途的开发工具版本：

- 稳定版 （ Stable Build ）
- 预发布版（ RC Build )
- 开发版 ( Nightly Build )
- 小游戏版 ( Minigame Build )

每个版本下又分别提供了 Windows 64、Windows 32 和 MacOS 三个细分版本。

从稳定性上来说，稳定版 > 预发布版 > 开发版。这里选择下载（稳定版）开发者工具。

微信开发者工具的官方下载地址为：

https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

### 新建第一个项目

开发工具安装完成后，我们来新建第一个小程序项目。双击打开微信开发者工具，如果你是第一次打开或者长时间未打开微信开发者工具，开发工具都会弹出一个二维码，请使用微信“扫一扫”扫描该二维码。进入微信开发者工具后你将看到下图的微信开发者工具首选页面：

![开发者工具首页](https://raw.githubusercontent.com/Huang-JunBin/miniprogram/main/README_IMAGE/开发者工具首页.png)

选择第一个【小程序】，然后在右侧点击 + ，这将打开一个新建小程序的面板，如图所示：

![新建项目](https://raw.githubusercontent.com/Huang-JunBin/miniprogram/main/README_IMAGE/新建项目.png)

面板中需要填入的选项有：

1. 【项目名称】建议使用英文，如HelloWorld，中文可能会引起一些未知错误。注意，项目名称不可以重名。
2. 【目录】选择一个空的文件夹用于存放小程序的项目文件。
3. 【AppID】将前面获取的 AppID 在此处填入 AppID 即可。
4. 【开发模式】请选择“小程序”。
5. 【后端服务】选择“不使用云服务”。”云服务“和”云开发“均是腾讯提供的一种快速服务端解决方案，并不是我们开发小程序服务端的必备选择。
6. 【模板选择】选择“不使用模板”。

> 如果你没有申请AppID，在第二步中，你也可以点击【AppID】下的【测试号】这个选项。小程序将为你自动生成一个用于测试的AppID。这里不建议使用测试的 AppID，因为它也有许多的限制和缺陷，仅适用于快速查看/体验小程序。

成功创建项目后，将进入到如图所示的开发者工具主界面中。

![项目展示](https://raw.githubusercontent.com/Huang-JunBin/miniprogram/main/README_IMAGE/项目展示.png)

### 使用第三方组件库

#### 安装Vant组件库	

##### 步骤一 通过 npm 安装	

```bash
# 通过 npm 安装
npm i @vant/weapp -S --production

# 通过 yarn 安装
yarn add @vant/weapp --production

# 安装 0.x 版本
npm i vant-weapp -S --production
```

##### 步骤二 修改 app.json

将 app.json 中的 `"style": "v2"` 去除，小程序的新版基础组件强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。

##### 步骤三 构建 npm 包

打开微信开发者工具，点击 **工具 -> 构建 npm**，构建完成后，即可引入组件。

#### 使用 Vant 组件

##### 引入组件

以 Button 组件为例，只需要在`app.json`或`index.json`中配置 Button 对应的路径即可。

所有组件文档中的引入路径均以 npm 安装为例，如果你是通过下载源代码的方式使用 @vant/weapp，请将路径修改为项目中 @vant/weapp 所在的目录。

```json
// 通过 npm 安装
// app.json
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}
```

```json
// 通过下载源码使用 es6版本
// app.json
"usingComponents": {
  "van-button": "path/to/@vant/weapp/dist/button/index"
}
```

```json
// 通过下载源码使用 es5版本
// app.json
"usingComponents": {
  "van-button": "path/to/@vant/weapp/lib/button/index"
}
```

##### 使用组件

引入组件后，可以在 wxml 中直接使用组件

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`。

```html
<van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
```

效果如图所示：

![使用组件](https://raw.githubusercontent.com/Huang-JunBin/miniprogram/main/README_IMAGE/使用组件.png)

### 添加标签页面

在 app.json 中添加页面路径，并保存文件，即可在 pages 目录下自动生成对应的页面文件。

![添加页面](https://raw.githubusercontent.com/Huang-JunBin/miniprogram/main/README_IMAGE/添加页面.png)

### 设置小程序底部 tabBar 栏

#### 添加 tabBar 图标

在阿里图标库 https://www.iconfont.cn/ 下载项目需要的图标，保存在 static 文件夹下

![tabbar_icon](https://raw.githubusercontent.com/Huang-JunBin/miniprogram/main/README_IMAGE/tabbar_icon.png)

#### 修改配置

修改 app.json 文件添加 tabBar 相关配置

![设置tabbar](https://raw.githubusercontent.com/Huang-JunBin/miniprogram/main/README_IMAGE/设置tabbar.png)

```json
"tabBar": {
    "color": "#666666",
    "selectedColor": "#1677ff",
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "static/tarbar-icon/index.png",
      "selectedIconPath": "static/tarbar-icon/index_active.png"
    }, {
      "pagePath": "pages/page1/index",
      "text": "第一页",
      "iconPath": "static/tarbar-icon/page1.png",
      "selectedIconPath": "static/tarbar-icon/page1_active.png"
    }, {
      "pagePath": "pages/page2/index",
      "text": "第二页",
      "iconPath": "static/tarbar-icon/page2.png",
      "selectedIconPath": "static/tarbar-icon/page2_active.png"
    }, {
      "pagePath": "pages/page3/index",
      "text": "第三页",
      "iconPath": "static/tarbar-icon/page3.png",
      "selectedIconPath": "static/tarbar-icon/page3_active.png"
    }]
  }
```

###  自定义 tabBar

> 基础库 2.5.0 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

自定义 tabBar 可以让开发者更加灵活地设置 tabBar 样式，以满足更多个性化的场景。

在自定义 tabBar 模式下

- 为了保证低版本兼容以及区分哪些页面是 tab 页，tabBar 的相关配置项需完整声明，但这些字段不会作用于自定义 tabBar 的渲染。
- 此时需要开发者提供一个自定义组件来渲染 tabBar，所有 tabBar 的样式都由该自定义组件渲染。推荐用 fixed 在底部的 [cover-view](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html) + [cover-image](https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html) 组件渲染样式，以保证 tabBar 层级相对较高。
- 与 tabBar 样式相关的接口，如 [wx.setTabBarItem](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html) 等将失效。
- 每个 tab 页下的自定义 tabBar 组件实例是不同的，可通过自定义组件下的 `getTabBar` 接口，获取当前页面的自定义 tabBar 组件实例。

**注意：如需实现 tab 选中态，要在当前页面下，通过 `getTabBar` 接口获取组件实例，并调用 setData 更新选中态。可参考底部的代码示例。**

#### 配置信息

- 在 `app.json` 中的 `tabBar` 项指定 `custom` 字段为 `true`，同时其余 `tabBar` 相关配置也补充完整。
- 所有 tab 页的 json 里需声明 `usingComponents` 项，也可以在 `app.json` 全局开启。

```json
"tabBar": {
    "custom": true,
}
```

#### 添加 tabBar 代码文件

在**项目根目录**下添加入口文件:

**注意：命名不可随意改动**

```text
custom-tab-bar/index.js
custom-tab-bar/index.json
custom-tab-bar/index.wxml
custom-tab-bar/index.wxss
```

#### 编写 tabBar 代码

使用 Vant 组件库的 Tabbar 标签栏

```html
<!-- custom-tab-bar/index.wxml -->
<van-tabbar active="{{ active }}" bind:change="onChange">
  <van-tabbar-item wx:for="{{list}}" wx:key="index">
    <image class="icon" slot="icon" src="{{ item.iconPath }}" />
    <image slot="icon-active" src="{{ item.selectedIconPath }}" />
    {{item.text}}
  </van-tabbar-item>
</van-tabbar>
```

```css
/* custom-tab-bar/index.wxss */
.icon {
  width: 25px;
  height: 25px;
}
```

```json
// custom-tab-bar/index.json 
{
  "component": true,
  "usingComponents": {
    "van-tabbar": "@vant/weapp/tabbar/index",
    "van-tabbar-item": "@vant/weapp/tabbar-item/index"
  }
}
```

```js
// custom-tab-bar/index.js
Component({
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
```

#### 待解决的问题

这里有两个问题待解决：

1. TODO 解决微信小程序 自定义tabBar 切换时候闪烁问题。

2. TODO Skyline引擎渲染情况下，自定义tabBar显示异常。

### 使用分包

#### 何时需要分包

分包的目的在于加快用户下载小程序包的速度，改善用户体验，此处建议小程序所有页面在20个及以下，可以不用分包，超过则进行分包，并将用户高频访问的页面放在主包配置中；

特殊情况如页面少，但某些页面很重，也需要进行分包，具体结合具体页面数、页面数据大小、用户高频访问的页面等实际因素确定如何分包。

#### 目录结构

推荐的主包和分包的一种文件组织的目录结构如下：

```
├── subpackages
│   ├── index
│   │   ├── index-detail-1
│   │   └── index-detail-2
│   ├── page1
│   │   └── page1-detail
├── pages
│   ├── index
│   ├── page1
│   ├── page2
│   └── page3
└── utils
```

### 分包预下载

#### 使用场景

开发者可以通过配置，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。

#### 配置方法

预下载分包行为在进入某个页面时触发，通过在 `app.json` 增加 `preloadRule` 配置来控制。

```json
{
  "pages": [
    "pages/index/index",
    "pages/page1/index"
  ],
  "subpackages": [
    {
      "root": "subpackages/index",
      "pages": [
        "index-detail-1/index",
        "index-detail-2/index"
      ]
    }, {
      "name": "page1",
      "root": "subpackages/page1",
      "pages": [
        "page1-detail/index"
      ]
    }
  ],
  "preloadRule": {
    "pages/index/index": {
      "network": "all",
      "packages": ["subpackages/index"]
    },
    "pages/page1/index": {
      "packages": ["page1"]
    }
  }
}
```

`preloadRule` 中，`key` 是页面路径，`value` 是进入此页面的预下载配置，每个配置有以下几项：

| 字段     | 类型        | 必填 | 默认值 | 说明                                                         |
| :------- | :---------- | :--- | :----- | :----------------------------------------------------------- |
| packages | StringArray | 是   | 无     | 进入页面后预下载分包的 `root` 或 `name`。`__APP__` 表示主包  |
| network  | String      | 否   | wifi   | 在指定网络下预下载，可选值为： `all`: 不限网络 `wifi`: 仅wifi下预下载 |

#### 限制

同一个分包中的页面享有共同的预下载大小限额 2M，限额会在工具中打包时校验。

如，页面 A 和 B 都在同一个分包中，A 中预下载总大小 0.5M 的分包，B中最多只能预下载总大小 1.5M 的分包。

### WXML 模板（template）

#### 介绍

WXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。

#### 定义模板

使用 name 属性，作为模板的名字。然后在`<template/>`内定义代码片段，如：

```html
<!-- msgItem.wxml -->
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
```

#### 引用模板

WXML 提供两种文件引用方式`import`和`include`。

##### import

`import`可以在该文件中使用目标文件定义的`template`，如：

在 item.wxml 中定义了一个叫`item`的`template`：

```html
<!-- item.wxml -->
<template name="item">
  <text>{{text}}</text>
</template>
```

在 index.wxml 中引用了 item.wxml，就可以使用`item`模板：

```html
<!-- index.wxml -->
<import src="item.wxml"/>
<template is="item" data="{{text: 'forbar'}}"/>
```

##### import 的作用域

`import` 有作用域的概念，即只会 `import` 目标文件中定义的 `template`，而不会 `import` 目标文件 `import` 的 `template`。

**如：C import B，B import A，在C中可以使用B定义的`template`，在B中可以使用A定义的`template`，但是C不能使用A定义的`template`**。

```html
<!-- a.wxml -->
<template name="A">
  <text> A template </text>
</template>
<!-- b.wxml -->
<import src="a.wxml"/>
<template name="B">
  <text> B template </text>
</template>
<!-- c.wxml -->
<import src="b.wxml"/>
<template is="A"/>  <!-- Error! Can not use tempalte when not import A. -->
<template is="B"/>
```

##### include

`include` 可以将目标文件除了 `<template/>` `<wxs/>` 外的整个代码引入，相当于是拷贝到 `include` 位置，如：

```html
<!-- index.wxml -->
<include src="header.wxml"/>
<view> body </view>
<include src="footer.wxml"/>
<!-- header.wxml -->
<view> header </view>
<!-- footer.wxml -->
<view> footer </view>
```

#### 使用模板

使用 `is` 属性，声明需要的使用的模板，然后将模板所需要的 `data` 传入，如：

```html
<import src="msgItem.wxml"/>
<template is="msgItem" data="{{...item}}"/>
```

```js
// pages/index/index.js
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  }
})
```

`is` 属性可以使用 `Mustache` 语法，来动态决定具体需要渲染哪个模板：

```html
<!-- number.wxml -->
<template name="odd">
  <view> odd </view>
</template>
<template name="even">
  <view> even </view>
</template>
```

```html
<!-- pages/index/index.wxml -->
<import src="number.wxml"/>
<block wx:for="{{[1, 2, 3, 4, 5]}}">
  <template is="{{item % 2 == 0 ? 'even' : 'odd'}}"/>
</block>
```

#### 模板的作用域

模板拥有自己的作用域，只能使用 `data` 传入的数据以及模板定义文件中定义的 `<wxs />` 模块。

### 自定义页面加载动画模板

#### 创建 loading 文件

在项目根目录添加以下文件：

```
/templates/loading/loading.wxml
/templates/loading/loading.wxss
```

#### 定义 loading 模板

```html
<template name="loading">
  <view class="loading-container">
    <view class="set-one">
      <view class="circle"></view>
      <view class="circle"></view>
    </view>
    <view class="set-two">
      <view class="circle"></view>
      <view class="circle"></view>
    </view>
  </view>
</template>
```

```css
.loading-container {
  overflow: hidden;
  height: 100%;
  width: 100%;
  z-index: 999;
  background-color: #f2f2f2;
}

.loading-container .circle {
  width: 50rpx;
  height: 50rpx;
  position: absolute;
  background: #1677ff;
  border-radius: 50%;
  margin: -25rpx;
  animation: mesh 3s ease-in-out infinite -1.5s;
}

.loading-container>view .circle:last-child {
  animation-delay: 0s;
}

.loading-container>view {
  position: absolute;
  top: 50%;
  left: 50%;
}

.loading-container>view:last-child {
  transform: rotate(90deg);
}

@keyframes mesh {
  0% {
    transform-origin: 50% -100%;
    transform: rotate(0);
  }

  50% {
    transform-origin: 50% -100%;
    transform: rotate(360deg);
  }

  50.00001% {
    transform-origin: 50% 200%;
    transform: rotate(0deg);
  }

  100% {
    transform-origin: 50% 200%;
    transform: rotate(360deg);
  }
}
```

#### 使用 loading 模板

```html
<import src="/templates/loading/loading.wxml" />
<template wx:if="{{loading}}" is="loading" />
<view wx:else>内容</view>
```

#### 效果

<video src="https://raw.githubusercontent.com/Huang-JunBin/miniprogram/main/README_IMAGE/loading.mp4" controls>
    你的浏览器不支持 <code>video</code> 标签。 
</video>

