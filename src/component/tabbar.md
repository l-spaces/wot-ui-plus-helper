# Tabbar 标签栏

## 组件概述
Tabbar 标签栏是一个底部导航组件，用于在应用的不同页面或功能模块之间进行快速切换。它支持固定定位、安全区域适配、自定义形状和样式，是移动应用中常见的导航解决方案。

### 详细功能描述
- 支持固定在底部显示，可配置占位元素避免内容被遮挡
- 支持 iPhone X 等机型的底部安全区域适配
- 可配置顶部边框显示
- 支持默认和圆形两种形状样式
- 可自定义激活和未激活状态的颜色
- 支持设置组件层级
- 支持自定义样式和类名

### 适用业务场景
- 应用底部主导航栏
- 多模块功能切换
- 需要固定在底部的导航菜单

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| modelValue | number / string | 0 | 否 | 选中标签的索引值或者名称 |
| fixed | boolean | false | 否 | 是否固定在底部 |
| safeAreaInsetBottom | boolean | false | 否 | 是否设置底部安全距离（iPhone X 类型的机型） |
| bordered | boolean | true | 否 | 是否显示顶部边框 |
| shape | 'default' / 'round' | 'default' | 否 | 标签栏的形状 |
| activeColor | string | - | 否 | 激活标签的颜色 |
| inactiveColor | string | - | 否 | 未激活标签的颜色 |
| placeholder | boolean | false | 否 | 固定在底部时，是否在标签位置生成一个等高的占位元素 |
| zIndex | number | 99 | 否 | 自定义组件的层级 |
| customStyle | string / object | - | 否 | 自定义样式 |
| customClass | string | - | 否 | 自定义类名 |

### Events

| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| change | 标签切换时触发 | { value: number / string } - 切换后的标签索引值或名称 |
| update:modelValue | 标签切换时触发 | number / string - 切换后的标签索引值或名称 |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| default | - | 用于放置 TabbarItem 组件 |
