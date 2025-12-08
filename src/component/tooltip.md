# Tooltip 提示

## 组件概述
Tooltip 是一种轻量级的信息提示组件，用于在用户交互时展示额外信息。它通常以气泡形式出现在目标元素附近，提供简洁明了的上下文帮助或说明。

### 详细功能描述
- 支持多种定位方式（12种不同位置）
- 可自定义箭头显示与样式
- 支持文本内容和自定义插槽内容
- 支持通过v-model控制显隐状态
- 提供open/close方法手动控制
- 支持点击触发切换
- 支持关闭按钮
- 支持出现位置偏移量
- 支持样式自定义

### 适用业务场景
- 表单字段的辅助说明
- 操作按钮的功能提示
- 数据项的详细信息展示
- 复杂交互控件的使用指南
- 图标或缩写的解释说明

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| content | `string / Array<Record<string, any>>` | - | 否 | 显示的内容，也可以通过`slot#content`传入 |
| placement | string | 'bottom' | 否 | Tooltip的出现位置，可选值：top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |
| visibleArrow | boolean | true | 否 | 是否显示Tooltip箭头 |
| offset | `number / Array<number> / Record<'x' \| 'y', number>` | 0 | 否 | 出现位置的偏移量 |
| useContentSlot | boolean | false | 否 | 是否使用slot来传入content内容 |
| disabled | boolean | false | 否 | Tooltip是否可用 |
| showClose | boolean | false | 否 | 是否显示Tooltip内部的关闭按钮 |
| modelValue | boolean | false | 否 | Tooltip的状态是否可见，通过v-model绑定 |
| customArrow | string | '' | 否 | 自定义箭头内容 |
| customPop | string | '' | 否 | 自定义弹出内容 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| update:modelValue | Tooltip状态变化时 | 新的状态值（boolean） |
| change | Tooltip状态变化时 | 包含show属性的对象，如：{ show: true } |
| open | Tooltip打开时 | 无 |
| close | Tooltip关闭时 | 无 |

### Methods

| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| open | 无 | 无 | 打开Tooltip |
| close | 无 | 无 | 关闭Tooltip |

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | 无 | 触发Tooltip显示的目标元素 |
| content | 无 | 自定义Tooltip的内容 |

