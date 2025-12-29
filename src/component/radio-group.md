# RadioGroup 单选框组

## 组件概述
RadioGroup 组件用于管理一组单选框，实现完整的单选功能，通常用于表单、设置页、调查问卷等场景。wd-radio-group 组件提供了灵活的配置选项，支持统一设置单选框的形状、大小、颜色、禁用状态等功能，与 wd-radio 组件配合使用，实现完整的单选功能。

### 详细功能描述
- 支持双向绑定选中值
- 支持统一设置单选框形状
- 支持统一设置选中颜色
- 支持统一设置禁用状态
- 支持单元格模式
- 支持不同大小
- 支持内联布局
- 支持自定义图标位置
- 支持自定义样式和类名
- 支持 change 事件

### 适用业务场景
- 表单中的单选字段组
- 设置页面的选项选择组
- 调查问卷中的单选题组
- 用户偏好设置组
- 数据筛选选项组

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | string / number / boolean | - | 否 | 会自动选中value对应的单选框 |
| shape | string | 'check' | 否 | 单选框形状，可选值：dot / button / check |
| checkedColor | string | - | 否 | 选中的颜色，默认为 #4D80F0 |
| disabled | boolean | false | 否 | 是否禁用所有单选框 |
| cell | boolean | false | 否 | 表单模式，所有单选框使用单元格样式 |
| size | string | '' | 否 | 设置所有单选框大小，可选值：large / medium / small |
| inline | boolean | false | 否 | 所有单选框同行展示 |
| iconPlacement | string | 'auto' | 否 | 图标位置，可选值：left / right / auto |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| change | 选中值改变时 | { value: any } - 选中值 |
| update:modelValue | 选中值改变时 | value: any - 选中值 |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 包含的 wd-radio 组件 |
