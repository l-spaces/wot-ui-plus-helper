# Badge 徽章

## 组件概述
Badge 徽章组件用于在元素右上角显示徽标，支持数字、圆点等多种形式，常用于消息提示、未读数量显示、状态标记等场景。

### 详细功能描述
- 支持数字徽标和圆点徽标两种形式
- 支持自定义最大值，超过最大值显示 "{max}+"
- 支持自定义背景色和徽标类型（primary/success/warning/danger/info）
- 支持数值为0时是否显示徽标
- 支持自定义徽标的位置偏移
- 支持隐藏徽标
- 支持嵌套在各种元素内部使用

### 适用业务场景
- 消息中心的未读消息数量
- 购物车的商品数量
- 通知提醒标记
- 新功能上线标记
- 状态指示标记

## 完整API参考

### Props属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | string/number | - | 否 | 显示值 |
| showZero | boolean | false | 否 | 当数值为 0 时，是否展示徽标 |
| bgColor | string | - | 否 | 自定义背景色 |
| max | number | - | 否 | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型 |
| isDot | boolean | - | 否 | 是否为红色点状标注 |
| hidden | boolean | - | 否 | 是否隐藏 badge |
| type | string | - | 否 | badge类型，可选值：primary / success / warning / danger / info |
| top | string/number | - | 否 | 为正时，角标向下偏移对应的像素 |
| right | string/number | - | 否 | 为正时，角标向左偏移对应的像素 |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |

### Events事件

该组件没有定义任何事件。

### Methods方法

该组件没有对外暴露的方法。

### Slots插槽

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 需要显示徽章的内容 |
