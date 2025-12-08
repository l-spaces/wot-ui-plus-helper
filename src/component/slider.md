# Slider 滑块选择器

## 组件概述
Slider组件是一个滑块选择组件，支持单滑块和双滑块两种模式，用于在指定范围内选择数值。它提供了丰富的自定义选项，包括颜色、样式、步长等，适用于各种需要数值选择的场景。

### 详细功能描述
- 支持单滑块和双滑块两种模式，通过modelValue的类型自动切换
- 支持自定义最小值、最大值和步长
- 支持自定义滑块颜色、轨道颜色和激活颜色
- 支持禁用状态
- 支持隐藏最大值、最小值和当前值显示
- 支持拖动事件监听（dragstart、dragmove、dragend）
- 支持双向数据绑定
- 支持自定义样式和类名
- 支持多端适配

### 适用业务场景
- 价格范围选择
- 音量调节
- 亮度调节
- 进度控制
- 筛选条件设置
- 参数配置

## 完整API参考

### Props
| 参数 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | number / array | 0 | 否 | 滑块的值，如果为数组，则为双向滑块 |
| min | number | 0 | 否 | 滑块的最小值 |
| max | number | 100 | 否 | 滑块的最大值 |
| step | number | 1 | 否 | 滑块的步进值 |
| disabled | boolean | false | 否 | 是否禁用滑块 |
| inactiveColor | string | '#e5e5e5' | 否 | 进度条未激活的背景颜色 |
| activeColor | string | '' | 否 | 进度条激活的背景颜色 |
| hideMinMax | boolean | false | 否 | 是否隐藏左右的最大最小值 |
| hideLabel | boolean | false | 否 | 是否隐藏当前滑块值 |
| customMinClass | string | '' | 否 | 自定义最小值的样式类名 |
| customMaxClass | string | '' | 否 | 自定义最大值的样式类名 |
| customClass | string | - | 否 | 自定义类名 |
| customStyle | object | - | 否 | 自定义样式，对象形式 |

### Events
| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| dragstart | 开始拖动滑块时 | { value: number / array } 当前滑块的值 |
| dragmove | 拖动滑块过程中 | { value: number / array } 当前滑块的值 |
| dragend | 结束拖动滑块时 | { value: number / array } 当前滑块的值 |
| update:modelValue | 滑块值变化时 | number / array 滑块的新值 |

### Methods
| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| initSlider | 无 | void | 初始化slider宽度 |

### Slots
无
