# CountDown 倒计时

## 组件概述
CountDown 倒计时组件是一个功能丰富的倒计时计时器，支持毫秒级精度、自定义时间格式、自动开始/暂停/重置等功能，适用于各种需要倒计时功能的场景。

### 详细功能描述
- 支持毫秒级精度倒计时
- 支持自定义时间格式
- 提供自动开始、暂停、重置等控制方法
- 支持自定义内容插槽
- 提供倒计时变化和结束事件
- 支持动态更新倒计时时长
- 轻量级实现，性能优化

### 适用业务场景
- 活动倒计时
- 限时抢购
- 验证码倒计时
- 考试剩余时间
- 订单支付倒计时
- 各种需要倒计时功能的场景

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| time | number | - | 是 | 倒计时时长，单位毫秒 |
| millisecond | boolean | false | 否 | 是否开启毫秒级精度 |
| format | string | 'HH:mm:ss' | 否 | 格式化时间，支持 DD: HH: mm: ss: SSS 格式 |
| autoStart | boolean | true | 否 | 是否自动开始倒计时 |
| customStyle | object | - | 否 | 自定义样式，对象形式 |
| customClass | string | '' | 否 | 自定义类名 |

### Events
| 名称 | 触发条件 | 参数说明 |
| --- | --- | --- |
| change | 倒计时变化时 | 当前时间对象，包含 days, hours, minutes, seconds, milliseconds |
| finish | 倒计时结束时 | 无 |

### Methods
| 名称 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| start | - | - | 开始倒计时 |
| pause | - | - | 暂停倒计时 |
| reset | - | - | 重设倒计时，若 autoStart 为 true，重设后会自动开始倒计时 |

### Slots
| 名称 | 作用域变量 | 说明 |
| --- | --- | --- |
| default | current | 自定义倒计时内容，current 为当前时间对象，包含 days, hours, minutes, seconds, milliseconds |
