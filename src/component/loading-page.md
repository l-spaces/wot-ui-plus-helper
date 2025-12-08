# LoadingPage 页面加载


## 组件概述
页面加载组件是一个全屏级别的加载状态指示器，用于表示整个页面或主要内容区域正在加载中。它提供了自定义加载图标、文本和样式的能力，支持全屏覆盖显示。

### 详细功能描述
- 全屏覆盖的加载状态显示
- 支持自定义加载图标或使用内置加载动画
- 支持自定义加载文本
- 支持两种内置加载动画类型
- 支持自定义背景颜色、文本颜色和字体大小
- 支持自定义加载图标大小和颜色
- 支持设置加载层级
- 提供过渡动画效果

### 适用业务场景
- 页面初始化加载状态
- 页面内容刷新时的过渡状态
- 复杂数据加载过程
- 网络请求耗时较长的场景
- 需要阻止用户交互的加载状态

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| text | string | '加载中' | 否 | 加载提示文本 |
| image | string | '' | 否 | 自定义加载图标URL，优先级高于内置加载动画 |
| type | 'outline' \| 'ring' | 'ring' | 否 | 内置加载动画类型 |
| loading | boolean | false | 否 | 是否显示加载动画 |
| bgColor | string | '#ffffff' | 否 | 背景颜色 |
| color | string | '#C8C8C8' | 否 | 文本颜色 |
| fontSize | number \| string | 19 | 否 | 文本字体大小，单位rpx |
| iconSize | number \| string | 28 | 否 | 自定义加载图标大小，单位rpx |
| loadingColor | string | '#C8C8C8' | 否 | 内置加载动画颜色 |
| zIndex | number \| string | 10 | 否 | 加载动画层级 |
| customStyle | string | - | 否 | 自定义样式 |
| customClass | string | - | 否 | 自定义类名 |

### Events

无

### Methods

无

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| default | - | 自定义加载提示内容，替代默认文本 |
