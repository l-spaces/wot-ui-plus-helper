# Swiper 轮播

## 组件概述
Swiper 是轮播组件，用于实现图片、视频等内容的轮播展示。它支持自动播放、循环播放、自定义指示器、垂直轮播等功能，支持图片和视频混合轮播，适用于各种需要轮播展示的场景。

### 详细功能描述
- 支持图片和视频轮播
- 支持自动播放和手动切换
- 支持循环播放
- 支持水平和垂直两种方向
- 支持自定义指示器样式和位置
- 支持前后边距设置
- 支持同时显示多个轮播项
- 支持视频自动播放和静音播放
- 支持自定义样式和类名
- 支持自定义内容插槽
- 跨平台兼容

### 适用业务场景
- 首页轮播图
- 商品详情页轮播图
- 视频轮播展示
- 图片画廊
- 广告轮播
- 任何需要轮播展示的场景

## 完整API参考

### Props

| 名称                      | 类型           | 默认值     | 必填 | 描述                                                                                               |
| ------------------------- | -------------- | ---------- | ---- | -------------------------------------------------------------------------------------------------- |
| autoplay                  | boolean        | true       | 否   | 是否自动播放轮播图                                                                                 |
| current                   | number         | 0          | 否   | 当前轮播在哪一项（下标）                                                                           |
| direction                 | string         | horizontal | 否   | 轮播滑动方向，可选值：horizontal（水平）、vertical（垂直）                                         |
| displayMultipleItems      | number         | 1          | 否   | 同时显示的滑块数量                                                                                 |
| duration                  | number         | 300        | 否   | 滑动动画时长，单位为毫秒                                                                           |
| easingFunction            | string         | default    | 否   | 指定 swiper 切换缓动动画类型，可选值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic   |
| height                    | number/string  | 192        | 否   | 轮播的高度                                                                                         |
| interval                  | number         | 5000       | 否   | 轮播间隔时间，单位为毫秒                                                                           |
| list                      | array          | []         | 否   | 轮播项列表，可以是字符串数组或对象数组                                                             |
| loop                      | boolean        | true       | 否   | 是否循环播放轮播图                                                                                 |
| videoLoop                 | boolean        | true       | 否   | 视频是否循环播放                                                                                   |
| muted                     | boolean        | true       | 否   | 视频是否静音播放                                                                                   |
| nextMargin                | number/string  | 0          | 否   | 后边距                                                                                             |
| indicatorPosition         | string         | bottom     | 否   | 页码信息展示位置，可选值：left、top-left、top、top-right、bottom-left、bottom、bottom-right、right |
| previousMargin            | number/string  | 0          | 否   | 前边距                                                                                             |
| snapToEdge                | boolean        | false      | 否   | 是否应用边距到第一个、最后一个元素                                                                 |
| indicator                 | boolean/object | true       | 否   | 指示器全部配置，可以是布尔值或指示器配置对象                                                       |
| imageMode                 | string         | aspectFill | 否   | 图片裁剪、缩放的模式                                                                               |
| valueKey                  | string         | value      | 否   | 选项对象中，value 对应的 key                                                                       |
| textKey                   | string         | text       | 否   | 选项对象中，标题 text 对应的 key                                                                   |
| autoplayVideo             | boolean        | true       | 否   | 视频是否自动播放                                                                                   |
| stopPreviousVideo         | boolean        | true       | 否   | 切换轮播项时是否停止上一个视频的播放                                                               |
| stopAutoplayWhenVideoPlay | boolean        | false      | 否   | 视频播放时是否停止自动轮播                                                                         |
| adjustHeight              | string         | highest    | 否   | 自动以指定滑块的高度为整个容器的高度，仅支付宝小程序支持，可选值：first、current、highest、none    |
| adjustVerticalHeight      | boolean        | false      | 否   | vertical 为 true 时强制使 adjust-height 生效，仅支付宝小程序支持                                   |
| customIndicatorClass      | string         | -          | 否   | 自定义指示器类名                                                                                   |
| customImageClass          | string         | -          | 否   | 自定义图片类名                                                                                     |
| customPrevImageClass      | string         | -          | 否   | 自定义上一个图片类名                                                                               |
| customNextImageClass      | string         | -          | 否   | 自定义下一个图片类名                                                                               |
| customItemClass           | string         | -          | 否   | 自定义swiper子项类名                                                                               |
| customPrevClass           | string         | -          | 否   | 自定义上一个子项类名                                                                               |
| customNextClass           | string         | -          | 否   | 自定义下一个子项类名                                                                               |
| customTextClass           | string         | -          | 否   | 自定义文字标题类名                                                                                 |
| customTextStyle           | string         | -          | 否   | 自定义文字标题样式                                                                                 |
| customStyle               | string         | -          | 否   | 自定义根节点样式                                                                                   |
| customClass               | string         | -          | 否   | 自定义根节点样式类                                                                                 |

### Events

| 事件名          | 触发条件             | 参数说明                                                                   |
| --------------- | -------------------- | -------------------------------------------------------------------------- |
| click           | 点击轮播项时         | `{ index: 点击的滑块下标, item: 点击的滑块内容 }`                            |
| change          | 轮播项切换时         | `{ current: 当前轮播项索引, source: 切换方式（autoplay、touch、navigate） }` |
| animationfinish | 轮播项切换动画结束时 | `{ current: 当前轮播项索引, source: 切换方式（autoplay、touch、navigate） }` |
| update:current  | 轮播项索引变化时     | value: 新的轮播项索引                                                      |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名    | 作用域变量         | 使用说明                                                  |
| --------- | ------------------ | --------------------------------------------------------- |
| default   | `{ item, index }`    | 自定义轮播项内容，item 为当前轮播项数据，index 为当前索引 |
| indicator | `{ current, total }` | 自定义指示器，current 为当前索引，total 为总数量          |
