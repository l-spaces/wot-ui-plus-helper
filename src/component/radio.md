# Radio 单选框

## 组件概述
单选框组件用于在一组选项中选择一个选项，通常用于表单、设置页、调查问卷等场景。wd-radio 组件提供了灵活的配置选项，支持多种形状、大小、颜色、禁用状态等功能，通常与 wd-radio-group 组件配合使用。

### 详细功能描述
- 支持多种形状：dot（圆点）、button（按钮）、check（勾选）
- 支持自定义选中颜色
- 支持禁用状态
- 支持单元格模式
- 支持不同大小
- 支持内联布局
- 支持自定义最大宽度
- 支持自定义图标位置
- 支持自定义样式和类名
- 与 radio-group 组件配合使用，实现完整的单选功能

### 适用业务场景
- 表单中的单选字段
- 设置页面的选项选择
- 调查问卷中的单选题
- 用户偏好设置
- 数据筛选选项

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| value | string / number / boolean | - | 是 | 选中时的值 |
| shape | string | - | 否 | 单选框的形状，可选值：dot / button / check |
| checkedColor | string | - | 否 | 选中的颜色 |
| disabled | boolean / null | null | 否 | 禁用状态，null 表示继承父组件的 disabled 属性 |
| cell | boolean / null | null | 否 | 是否为单元格模式，null 表示继承父组件的 cell 属性 |
| size | string | - | 否 | 大小，可选值：large / medium / small |
| inline | boolean / null | null | 否 | 是否为内联布局，null 表示继承父组件的 inline 属性 |
| maxWidth | string | - | 否 | 最大宽度 |
| iconPlacement | string | - | 否 | 图标位置，可选值：left / right / auto |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events

该组件没有定义事件，事件由 radio-group 组件统一管理。

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 单选框标签内容 |
