# Tag 标签

## 组件概述
标签组件是用于对信息进行分类或标记的常用UI元素，支持多种样式和交互方式。wd-tag组件提供了丰富的配置选项，包括不同类型、尺寸、颜色、可关闭等特性，适用于各种标签展示场景。

### 详细功能描述
- 支持5种标签类型：default、primary、success、warning、danger
- 支持左侧图标配置
- 支持图标插槽自定义
- 支持可关闭标签（只对圆角类型支持）
- 支持幽灵类型标签
- 支持新增标签（动态标签）
- 支持自定义文字颜色
- 支持自定义背景色和边框色
- 支持圆角类型标签
- 支持标记类型标签
- 支持点击事件
- 支持关闭事件
- 支持确认事件（动态标签）

### 适用业务场景
- 内容分类标签
- 状态标记
- 筛选条件标签
- 动态标签添加
- 标签云展示
- 任何需要分类或标记信息的场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| useIconSlot | boolean | false | 否 | 是否开启图标插槽 |
| type | 'default' / 'primary' / 'success' / 'warning' / 'danger' | default | 否 | 标签类型 |
| icon | string | '' | 否 | 左侧图标 |
| closable | boolean | false | 否 | 是否可关闭（只对圆角类型支持） |
| plain | boolean | false | 否 | 幽灵类型 |
| dynamic | boolean | false | 否 | 是否为新增标签 |
| color | string | '' | 否 | 文字颜色 |
| bgColor | string | '' | 否 | 背景色和边框色 |
| round | boolean | false | 否 | 圆角类型 |
| mark | boolean | false | 否 | 标记类型 |
| customStyle | string / object | - | 否 | 自定义样式 |
| customClass | string | - | 否 | 自定义类名 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| click | 点击标签时触发 | event - 点击事件对象 |
| close | 关闭标签时触发 | event - 关闭事件对象 |
| confirm | 动态标签确认时触发 | { value: string } - 输入的标签值 |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 标签内容 |
| icon | - | 自定义图标 |
| add | - | 自定义动态标签的添加按钮 |

