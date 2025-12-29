# ActionSheet 动作面板

## 组件概述
ActionSheet 动作面板组件是从底部弹出的操作菜单，用于展示一系列可选择的操作选项，支持普通操作列表和带图标面板两种形式，常用于确认操作、选择选项等场景。

### 详细功能描述
- 支持两种展示形式：普通操作列表和带图标面板
- 支持标题和关闭按钮
- 支持取消按钮
- 支持选项禁用和加载状态
- 支持多行面板展示
- 支持自定义样式和类名
- 支持点击遮罩关闭
- 支持点击选项后自动关闭
- 支持底部安全距离适配
- 支持懒渲染
- 支持从页面中脱离（解决fixed失效问题）

### 适用业务场景
- 确认删除、分享等操作
- 选择图片来源（拍照/从相册选择）
- 选择支付方式
- 选择商品规格
- 任何需要从底部弹出选择菜单的场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | boolean | - | 是 | 设置菜单显示隐藏 |
| actions | array | [] | 否 | 菜单选项，数组元素为Action对象 |
| panels | array | [] | 否 | 自定义面板项，可为字符串数组、对象数组或二维数组（多行展示） |
| title | string | - | 否 | 标题 |
| cancelText | string | - | 否 | 取消按钮文案 |
| closeOnClickAction | boolean | true | 否 | 点击选项后是否关闭菜单 |
| closeOnClickModal | boolean | true | 否 | 点击遮罩是否关闭菜单 |
| duration | number | 200 | 否 | 弹框动画持续时间（毫秒） |
| zIndex | number | 10 | 否 | 菜单层级 |
| lazyRender | boolean | true | 否 | 弹层内容懒渲染，触发展示时才渲染内容 |
| safeAreaInsetBottom | boolean | true | 否 | 是否设置底部安全距离（适配iPhone X等机型） |
| rootPortal | boolean | false | 否 | 是否从页面中脱离出来，解决fixed失效问题 |
| customHeaderClass | string | - | 否 | 自定义头部样式类 |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| select | 选择菜单选项时 | item: 选中的选项对象, index: 选中的索引, rowIndex?: 行索引（多行面板时）, colIndex?: 列索引（面板时） |
| click-modal | 点击遮罩时 | - |
| cancel | 点击取消按钮时 | - |
| closed | 菜单关闭动画结束后 | - |
| close | 菜单开始关闭时 | - |
| open | 菜单开始打开时 | - |
| opened | 菜单打开动画结束后 | - |
| update:modelValue | 菜单显示状态变化时 | newValue: 新的显示状态 |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 自定义内容区域，位于actions/panels和cancel按钮之间 |
