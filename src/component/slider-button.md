# Slider Button 滑块解锁按钮

## 组件概述
Slider Button组件是一个滑动解锁组件，用于验证用户操作，防止机器人恶意操作。它提供了丰富的自定义选项，包括样式、文字、自动重置等功能，适用于各种需要用户交互验证的场景。

### 详细功能描述
- 支持滑动解锁功能，验证用户操作
- 支持自定义按钮文字、宽度、高度、颜色等样式
- 支持成功状态和自动重置功能
- 支持事件回调（滑动过程、滑动成功、重置）
- 支持自定义阈值，控制解锁难度
- 支持禁用状态
- 支持自定义滑块内容
- 支持自定义按钮文字
- 支持多端适配

### 适用业务场景
- 登录页面的滑动验证
- 表单提交前的验证
- 防止机器人恶意操作的验证
- 内容访问前的验证
- 资源下载前的验证

## 完整API参考

### Props
| 参数 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| text | string | '滑动解锁' | 否 | 按钮文字 |
| width | string / number | '' | 否 | 按钮宽度 |
| round | string / number | 100 | 否 | 圆角 |
| height | string / number | 45 | 否 | 按钮高度 |
| bgColor | string | '#e0e0e0' | 否 | 背景颜色 |
| railColor | string | '#4d80f0' | 否 | 滑道背景颜色 |
| railIndex | string / number | '' | 否 | 滑道层级 |
| railRadius | string / number | 100 | 否 | 轨道圆角 |
| textColor | string | '#c2c2c2' | 否 | 文字颜色 |
| fontSize | string / number | 16 | 否 | 文字大小 |
| textBold | boolean | false | 否 | 文字是否加粗 |
| activeTextColor | string | '#ffffff' | 否 | 激活文字颜色 |
| disabled | boolean | false | 否 | 是否禁用 |
| successText | string | '验证成功' | 否 | 成功文字 |
| autoReset | boolean | false | 否 | 是否自动重置 |
| resetDelay | number | 300 | 否 | 重置延迟时间（毫秒） |
| threshold | string / number | '' | 否 | 阈值 |
| customClass | string | - | 否 | 自定义类名 |
| customStyle | object | - | 否 | 自定义样式，对象形式 |

### Events
| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| change | 滑动过程中触发 | percent: number 当前进度百分比（0-1） |
| success | 滑动成功时触发 | 无 |
| reset | 重置时触发 | 无 |

### Methods
| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| init | 无 | void | 初始化组件 |
| reset | 无 | void | 重置组件状态 |
| handleSuccess | 无 | void | 手动触发成功状态 |

### Slots
| 插槽名 | 作用域变量 | 说明 |
|--------|------------|------|
| thumb | - | 自定义滑块内容，默认显示双箭头图标 |
| default | - | 自定义按钮文字，默认显示滑动解锁文字 |
