# Checkbox 复选框

## 组件概述
Checkbox 复选框组件用于多选场景，支持多种形状样式和状态，可单独使用也可与 CheckboxGroup 组件结合使用，实现复杂的多选功能。

### 详细功能描述
- 支持三种形状：圆形（circle）、方形（square）、按钮（button）
- 支持半选中状态（indeterminate）
- 支持自定义选中颜色
- 支持禁用状态
- 支持不同大小设置（默认、large）
- 支持内联排列和单元格样式
- 支持与 CheckboxGroup 组件结合使用，实现组内多选
- 支持自定义 trueValue 和 falseValue
- 支持自定义样式和类名
- 支持最大宽度限制

### 适用业务场景
- 表单中的多选选项
- 列表项的多选功能
- 筛选条件的多选设置
- 任何需要用户选择多个选项的场景

## 完整API参考

### Props属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | string/number/boolean | - | 是 | 复选框的值，必须提供 |
| shape | string | circle | 否 | 复选框形状，可选值：circle / square / button |
| checkedColor | string | - | 否 | 选中时的颜色 |
| disabled | boolean/null | null | 否 | 禁用状态，null表示继承父组件状态 |
| trueValue | string/number/boolean | true | 否 | 选中时的值，在checkbox-group中使用无效 |
| falseValue | string/number/boolean | false | 否 | 非选中时的值，在checkbox-group中使用无效 |
| indeterminate | boolean | false | 否 | 半选中状态 |
| size | string | - | 否 | 设置大小，可选值：large |
| maxWidth | string | - | 否 | 文字位置最大宽度 |
| customLabelClass | string | - | 否 | 自定义标签样式类 |
| customShapeClass | string | - | 否 | 自定义形状样式类 |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |

### Events事件

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| change | 选中状态变化时 | value: 当前选中状态值 |
| update:modelValue | 选中状态变化时 | newVal: 新的选中值 |

### Methods方法

| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| toggle | - | - | 切换当前选中状态 |

### Slots插槽

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 复选框标签文本 |
