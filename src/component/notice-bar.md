# noticeBar 通知栏组件

## 组件概述
通知栏组件是一个用于展示重要通知信息的组件，支持横向滚动和纵向滚动两种模式，提供了多种预设类型样式，可自定义图标、颜色、背景色等。组件支持点击关闭、自动滚动和手动控制，适用于各种需要展示通知信息的场景。

### 详细功能描述
- 支持横向滚动和纵向滚动两种滚动方向
- 支持多种类型样式：warning（警告）、info（信息）、danger（危险）
- 可自定义通知文本，支持字符串和字符串数组
- 支持设置滚动延迟和滚动速度
- 支持点击关闭通知
- 支持自定义左侧图标和右侧内容
- 支持自动换行显示
- 支持自定义颜色和背景色
- 提供重置动画方法
- 支持点击事件
- 跨平台兼容

### 适用业务场景
- 系统通知展示
- 活动公告展示
- 重要信息提示
- 状态变更通知
- 促销信息展示
- 任何需要展示通知信息的场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| text | string \| string[] | '' | 否 | 设置通知栏文案，支持字符串或字符串数组 |
| type | 'warning' \| 'info' \| 'danger' \| '' | 'warning' | 否 | 设置通知栏类型 |
| scrollable | boolean | true | 否 | 是否可滚动 |
| delay | number | 1 | 否 | 滚动延迟时间（秒） |
| speed | number | 50 | 否 | 滚动速度（px/s） |
| closable | boolean | false | 否 | 是否可关闭 |
| wrapable | boolean | false | 否 | 是否换行显示 |
| prefix | string | - | 否 | 设置左侧图标，使用 icon 章节中的图标名 |
| color | string | - | 否 | 文字、图标颜色 |
| backgroundColor | string | - | 否 | 背景颜色 |
| direction | 'horizontal' \| 'vertical' | 'horizontal' | 否 | 滚动方向 |
| customStyle | string | - | 否 | 自定义样式 |
| customClass | string | - | 否 | 自定义类名 |

### Events

| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| close | 点击关闭按钮时 | - |
| next | 纵向滚动切换到下一条时 | 当前索引值 |
| click | 点击通知栏内容时 | 点击的文本内容和索引值 |

### Methods

| 方法名 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| reset | - | void | 重置通知栏动画，重新开始滚动 |

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| prefix | - | 自定义左侧图标，优先级高于prefix属性 |
| suffix | - | 自定义右侧内容，优先级高于closable属性 |
| default | - | 自定义通知内容，优先级高于text属性 |
