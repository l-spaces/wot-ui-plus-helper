# CountTo 数字动画


## 组件概述
CountTo 数字动画组件是一个用于数字从起始值平滑过渡到目标值的动画组件，支持自定义动画时长、小数位数、格式以及前缀后缀等，适用于各种需要数字动画效果的场景。

### 详细功能描述
- 支持从起始值到结束值的平滑动画过渡
- 可自定义动画时长
- 支持自定义小数位数
- 支持自定义数字格式（千位分隔符、小数点）
- 支持前缀和后缀
- 支持自动开始和手动控制
- 支持缓动效果
- 提供多种主题类型
- 支持自定义样式

### 适用业务场景
- 数据统计展示
- 数字增长动画
- 倒计时数字变化
- 价格变动展示
- 加载进度展示
- 各种需要数字动画效果的场景

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| fontSize | number | 16 | 否 | 字体大小 |
| color | string | '' | 否 | 文本颜色 |
| type | string | 'default' | 否 | 主题类型，可选值：'default' / 'primary' / 'error' / 'warning' / 'success' |
| startVal | number | 0 | 否 | 起始值 |
| endVal | number | 2024 | 否 | 最终值 |
| duration | number | 3000 | 否 | 从起始值到结束值数字变动的时间，单位毫秒 |
| autoStart | boolean | true | 否 | 是否自动开始 |
| decimals | number | 0 | 否 | 保留的小数位数，大于等于0 |
| decimal | string | '.' | 否 | 小数点符号 |
| separator | string | ',' | 否 | 千位分隔符 |
| prefix | string | '' | 否 | 前缀 |
| suffix | string | '' | 否 | 后缀 |
| useEasing | boolean | true | 否 | 是否使用缓动效果 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events
| 名称 | 触发条件 | 参数说明 |
| --- | --- | --- |
| mounted | 组件挂载时 | 无 |
| finish | 数字动画结束时 | 无 |

### Methods
| 名称 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| start | - | - | 开始数字动画 |
| pause | - | - | 暂停数字动画 |
| reset | - | - | 重置数字动画，若 autoStart 为 true，重置后会自动开始 |

### Slots
| 名称 | 作用域变量 | 说明 |
| --- | --- | --- |
| default | - | 自定义数字内容 |
| prefix | - | 自定义前缀内容 |
| suffix | - | 自定义后缀内容 |

