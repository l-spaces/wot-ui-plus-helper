# SwiperNav 轮播指示器

## 组件概述
SwiperNav 是轮播指示器组件，用于配合 Swiper 组件使用，提供轮播图的导航功能。它支持多种指示器样式（点状、点条状、分式），支持水平和垂直方向，支持自定义位置和样式，适用于各种轮播图的导航场景。

### 详细功能描述
- 支持三种指示器类型：点状（dots）、点条状（dots-bar）、分式（fraction）
- 支持水平和垂直两种方向
- 支持自定义指示器位置
- 支持显示两侧控制按钮
- 支持自定义样式和类名
- 支持根据轮播项数量自动显示或隐藏
- 跨平台兼容

### 适用业务场景
- 轮播图导航指示器
- 滑块导航指示器
- 任何需要导航指示器的场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| current | number | 0 | 否 | 当前轮播在哪一项（下标） |
| direction | string | horizontal | 否 | 轮播滑动方向，可选值：horizontal（水平）、vertical（垂直） |
| minShowNum | number | 2 | 否 | 小于这个数字不会显示导航器 |
| indicatorPosition | string | bottom | 否 | 指示器位置，可选值：left、top-left、top、top-right、bottom-left、bottom、bottom-right、right |
| showControls | boolean | false | 否 | 是否显示两侧的控制按钮 |
| total | number | 0 | 否 | 总共的项数 |
| type | string | dots | 否 | 指示器类型，可选值：dots（点状）、dots-bar（点条状）、fraction（分式） |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| change | 点击控制按钮时 | `{ dir: 点击方向（prev、next）, source: 切换方式（nav） }` |

### Methods

该组件没有对外暴露的方法。

### Slots

该组件没有可用的插槽。
