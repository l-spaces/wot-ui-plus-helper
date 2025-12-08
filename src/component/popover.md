# Popover 弹出层

## 组件概述
Popover 组件是一种弹出式组件，用于在目标元素附近显示相关内容，通常用于菜单、提示、说明、操作选项等场景。wd-popover 组件提供了灵活的配置选项，支持多种放置位置、普通模式和菜单模式、自定义内容、显示/隐藏控制等功能。

### 详细功能描述
- 支持多种放置位置：top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end
- 支持普通模式和菜单模式两种显示模式
- 支持自定义内容，可通过 content 属性或 slot#content 传入
- 支持显示/隐藏箭头
- 支持偏移量设置
- 支持禁用状态
- 支持显示关闭按钮
- 支持双向绑定显示状态
- 支持手动控制显示/隐藏
- 支持自定义样式和类名
- 支持点击外部关闭

### 适用业务场景
- 下拉菜单
- 操作选项
- 提示框
- 说明文字
- 上下文菜单
- 工具提示

## 完整API参考

### Props属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| customArrow | string | '' | 否 | 自定义箭头样式类 |
| customPop | string | '' | 否 | 自定义弹出框样式类 |
| visibleArrow | boolean | true | 否 | 是否显示 popover 箭头 |
| content | string / array | - | 否 | 显示的内容，也可以通过 slot#content 传入 |
| placement | string | 'bottom' | 否 | 指定 popover 的放置位置：top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end |
| offset | number | 0 | 否 | 偏移量 |
| useContentSlot | boolean | false | 否 | 是否使用内容插槽 |
| disabled | boolean | false | 否 | 是否禁用 popover |
| showClose | boolean | false | 否 | 是否显示关闭按钮 |
| modelValue | boolean | false | 否 | 控制 popover 的显示状态 |
| mode | string | 'normal' | 否 | 当前显示的模式，决定内容的展现形式，可选值：normal（普通模式）/ menu（菜单模式） |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events事件

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| update:modelValue | 显示状态改变时 | value: boolean - 显示状态 |
| menuclick | 菜单模式下点击菜单项时 | { item: any, index: number } - 点击的菜单项和索引 |
| change | 显示状态改变时 | { show: boolean } - 显示状态 |
| open | 打开时 | - |
| close | 关闭时 | - |

### Methods方法

| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| open | - | - | 打开popover |
| close | - | - | 关闭popover |

### Slots插槽

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 触发元素内容 |
| content | - | 自定义弹出内容 |
