# InputNumber 数字输入框

## 组件概述
InputNumber 是一个带有加减按钮的数字输入组件，用于精确控制数值输入。它支持步进值、最大最小值限制、精度控制、严格步进模式等功能，适用于需要精确数值输入的场景，如数量选择、价格输入、评分等。

### 核心功能
- 支持加减按钮控制数值
- 支持自定义步进值
- 支持最大最小值限制
- 支持数值精度控制
- 支持严格步进模式
- 支持禁用输入框或按钮
- 支持长按加减手势
- 支持自定义输入框宽度
- 支持允许为空
- 支持值变化前的拦截

### 适用业务场景
- 商品数量选择
- 价格输入
- 评分选择
- 年龄输入
- 身高体重输入
- 任何需要精确数值输入的场景

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填项 | 描述 |
| --- | --- | --- | --- | --- |
| modelValue | number / string | - | 是 | 绑定值 |
| min | number | 1 | 否 | 最小值 |
| max | number | Number.MAX_SAFE_INTEGER | 否 | 最大值 |
| step | number | 1 | 否 | 步进值 |
| stepStrictly | boolean | false | 否 | 是否严格按照步进值递增或递减 |
| precision | number / string | 0 | 否 | 数值精度 |
| disabled | boolean | false | 否 | 是否禁用 |
| disableInput | boolean | false | 否 | 是否禁用输入框 |
| disableMinus | boolean | false | 否 | 是否禁用减号按钮 |
| disablePlus | boolean | false | 否 | 是否禁用加号按钮 |
| withoutInput | boolean | false | 否 | 是否不显示输入框 |
| inputWidth | number / string | 36 | 否 | 输入框宽度 |
| allowNull | boolean | false | 否 | 是否允许为空 |
| placeholder | string | '' | 否 | 输入框占位符 |
| adjustPosition | boolean | true | 否 | 键盘弹起时，是否自动上推页面 |
| beforeChange | function | - | 否 | 输入值变化前的回调函数，返回 false 可阻止输入，支持返回 Promise |
| longPress | boolean | false | 否 | 是否开启长按加减手势 |
| immediateChange | boolean | true | 否 | 是否立即响应输入变化，false 时仅在失焦和按钮点击时更新 |
| updateOnInit | boolean | true | 否 | 是否在初始化时更新 v-model 为修正后的值 |
| inputType | string | 'digit' | 否 | 输入框类型，可选值：number / digit |
| customStyle | string | '' | 否 | 自定义样式，对象格式 |
| customClass | string | '' | 否 | 自定义类名 |

### Events
| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| change | 数值变化时触发 | value: { value: 输入框的当前值 } |
| focus | 输入框聚焦时触发 | detail: 事件对象 |
| blur | 输入框失焦时触发 | value: { value: 输入框的当前值 } |
| update:modelValue | 数值变化时触发 | value: 输入框的当前值 |

### Methods
InputNumber 组件不直接对外暴露方法。

### Slots
InputNumber 组件不包含插槽。

