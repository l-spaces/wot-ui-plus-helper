# navbar 导航栏组件

## 组件概述
导航栏组件是一个用于页面顶部的导航栏，支持自定义标题、左侧和右侧内容，提供了固定定位、安全区域适配、底部边框控制等功能，可通过插槽自定义导航栏内容，适用于各种页面的顶部导航场景。

### 详细功能描述
- 支持自定义标题、左侧文字和右侧文字
- 支持显示左侧箭头
- 可控制是否显示底部边框
- 支持固定到顶部
- 固定时支持生成等高占位元素
- 支持顶部安全区域适配
- 支持禁用左侧和右侧按钮
- 提供了丰富的插槽，支持自定义导航栏内容
- 支持自定义样式和类名

### 适用业务场景
- 页面顶部导航
- 带返回按钮的页面
- 带右侧操作按钮的页面
- 需要自定义导航栏内容的页面
- 全面屏设备的安全区域适配

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| title | string | - | 否 | 标题文字 |
| leftText | string | - | 否 | 左侧文案 |
| rightText | string | - | 否 | 右侧文案 |
| leftArrow | boolean | false | 否 | 是否显示左侧箭头 |
| bordered | boolean | true | 否 | 是否显示下边框 |
| fixed | boolean | false | 否 | 是否固定到顶部 |
| placeholder | boolean | false | 否 | 固定在顶部时，是否在标签位置生成一个等高的占位元素 |
| zIndex | number | 500 | 否 | 导航栏 z-index |
| safeAreaInsetTop | boolean | false | 否 | 是否开启顶部安全区适配 |
| leftDisabled | boolean | false | 否 | 是否禁用左侧按钮，禁用时透明度降低，且无法点击 |
| rightDisabled | boolean | false | 否 | 是否禁用右侧按钮，禁用时透明度降低，且无法点击 |
| customStyle | string | - | 否 | 自定义样式 |
| customClass | string | - | 否 | 自定义类名 |

### Events

| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| click-left | 点击左侧区域时 | - |
| click-right | 点击右侧区域时 | - |

### Methods

无

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| title | - | 自定义标题内容 |
| left | - | 自定义左侧内容，优先级高于leftText和leftArrow |
| right | - | 自定义右侧内容，优先级高于rightText |
| capsule | - | 自定义胶囊按钮内容 |
