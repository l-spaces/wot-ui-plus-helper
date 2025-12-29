# CheckboxGroup 复选框组

## 组件概述
CheckboxGroup 复选框组组件用于管理多个 Checkbox 组件，实现组内多选功能，支持设置最大和最小选中数量、不同形状样式和排列方式，是实现复杂多选功能的核心组件。

### 详细功能描述
- 管理组内 Checkbox 的选中状态
- 支持设置最大选中数量（max）
- 支持设置最小选中数量（min）
- 支持三种形状：圆形（circle）、方形（square）、按钮（button）
- 支持内联排列（inline）
- 支持单元格样式（cell）
- 支持禁用状态
- 支持自定义选中颜色
- 支持不同大小设置（默认、large）
- 提供选中状态变化事件

### 适用业务场景
- 表单中的多选选项组
- 筛选条件的多选设置
- 列表项的批量选择
- 任何需要限制选择数量的多选场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | array | [] | 否 | 绑定值，数组类型，存储选中的复选框值 |
| cell | boolean | false | 否 | 是否为单元格样式 |
| shape | string | circle | 否 | 复选框形状，可选值：circle / square / button |
| checkedColor | string | - | 否 | 选中时的颜色 |
| disabled | boolean | false | 否 | 是否禁用整个组 |
| min | number | 0 | 否 | 最小选中数量 |
| max | number | 0 | 否 | 最大选中数量，0为无限数量 |
| inline | boolean | false | 否 | 是否内联排列 |
| size | string | - | 否 | 设置大小，可选值：large |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| change | 组内复选框选中状态变化时 | value: 当前选中的值数组 |
| update:modelValue | 组内复选框选中状态变化时 | newValue: 新的选中值数组 |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 放置 wd-checkbox 组件 |
