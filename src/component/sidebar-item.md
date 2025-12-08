# Sidebar Item 侧边栏子项

## 组件概述
Sidebar Item组件是侧边栏的子项组件，用于配合Sidebar组件实现侧边导航功能。它支持图标、标题、徽标等功能，并能自动与父组件交互，实现选中状态管理。

### 详细功能描述
- 支持设置选项标题和唯一值
- 支持图标显示，可使用内置图标或自定义图标
- 支持徽标显示，包括数字徽标和点状徽标
- 支持徽标最大值限制
- 支持禁用状态
- 自动与父组件Sidebar交互，实现选中状态管理
- 支持自定义样式和类名
- 支持多端适配

### 适用业务场景
- 侧边导航菜单
- 分类选择器
- 步骤指示器
- 垂直选项卡

## 完整API参考

### Props
| 参数 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| label | string | - | 是 | 当前选项标题 |
| value | string / number | - | 是 | 当前选项的值，唯一标识 |
| badge | string / number / null | null | 否 | 徽标显示值 |
| badgeProps | object | - | 否 | 徽标属性，透传给 Badge 组件 |
| icon | string | - | 否 | 图标名称 |
| isDot | boolean | undefined | 否 | 是否点状徽标 |
| max | number | 99 | 否 | 徽标最大值 |
| disabled | boolean | false | 否 | 是否禁用 |
| customClass | string | - | 否 | 自定义类名 |
| customStyle | object | - | 否 | 自定义样式，对象形式 |

### Events
无直接事件，通过父组件Sidebar的change事件触发

### Methods
无

### Slots
| 插槽名 | 作用域变量 | 说明 |
|--------|------------|------|
| icon | - | 自定义图标插槽，用于替换默认图标 |
