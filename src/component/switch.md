# Switch 开关

## 组件概述
Switch 是开关组件，用于实现开关切换功能。它支持自定义开关颜色、大小、激活值和非激活值，支持禁用状态和切换前回调，适用于各种需要开关切换的场景。

### 详细功能描述
- 支持开关状态的双向绑定
- 支持自定义激活值和非激活值
- 支持自定义激活颜色和非激活颜色
- 支持自定义圆点颜色
- 支持自定义开关大小
- 支持禁用状态
- 支持切换前回调函数
- 支持自定义样式和类名
- 跨平台兼容

### 适用业务场景
- 表单中的开关选择
- 设置页面中的开关选项
- 功能开关控制
- 状态切换
- 任何需要开关切换的场景

## 完整API参考

### Props属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | boolean/string/number | false | 是 | 绑定值 |
| disabled | boolean | false | 否 | 是否禁用 |
| activeValue | boolean/string/number | true | 否 | 激活值 |
| inactiveValue | boolean/string/number | false | 否 | 非激活值 |
| activeColor | string | - | 否 | 激活颜色 |
| inactiveColor | string | - | 否 | 非激活颜色 |
| circleColor | string | - | 否 | 圆点颜色 |
| size | number/string | - | 否 | 开关大小 |
| beforeChange | function | - | 否 | 切换前的回调函数，返回false可以阻止切换 |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |

### Events事件

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| change | 开关状态改变时 | { value: 新的开关值 } |
| update:modelValue | 开关状态改变时 | value: 新的开关值 |

### Methods方法

该组件没有对外暴露的方法。

### Slots插槽

该组件没有可用的插槽。
