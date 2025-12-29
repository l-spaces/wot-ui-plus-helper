# TabbarItem 标签栏项

## 组件概述
TabbarItem 是 Tabbar 组件的子组件，用于定义标签栏中的单个标签项。它支持图标、文字、徽标等多种元素组合，可灵活配置标签样式和行为。

### 详细功能描述
- 支持设置标签标题和图标
- 集成徽标功能，支持数字徽标和点状徽标
- 支持自定义徽标最大值
- 可通过插槽自定义图标内容
- 自动响应父组件 Tabbar 的激活状态
- 支持自定义样式和类名

### 适用业务场景
- 与 Tabbar 组件配合使用，构建应用底部导航
- 用于多模块功能切换的标签项
- 需要显示徽标的导航菜单

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| title | string | - | 否 | 标签页的标题 |
| name | number / string | - | 否 | 唯一标识符，用于区分不同标签页 |
| icon | string | - | 否 | 图标名称 |
| value | number / string / null | null | 否 | 徽标显示值 |
| isDot | boolean | undefined | 否 | 是否显示点状徽标 |
| max | number | 99 | 否 | 徽标最大值，超过最大值会显示 `${max}+` |
| badgeProps | object | - | 否 | 徽标属性，透传给 Badge 组件 |
| customStyle | string / object | - | 否 | 自定义样式 |
| customClass | string | - | 否 | 自定义类名 |

### Events

该组件没有定义任何事件。

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| icon | { active: boolean } | 自定义图标，active 表示当前标签是否激活 |
