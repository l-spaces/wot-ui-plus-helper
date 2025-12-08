# CodeInput 验证码输入

## 组件概述
CodeInput 验证码输入组件是一个专门用于验证码、密码等短数字或字符输入的组件，提供了美观的输入框样式和流畅的交互体验，支持多种自定义配置。

### 详细功能描述
- 支持自定义输入框长度（默认6位）
- 提供盒子模式和线条模式两种显示样式
- 支持密码式圆点显示
- 支持自定义字体大小、颜色和粗细
- 支持自定义输入框大小和间距
- 提供焦点状态指示和光标动画
- 支持自动获取焦点
- 支持禁止原生键盘，便于自定义键盘集成
- 支持输入完成事件回调
- 支持细边框样式
- 支持自动调整位置以适应键盘

### 适用业务场景
- 手机验证码输入
- 邮箱验证码输入
- 支付密码输入
- 邀请码输入
- 身份验证码输入
- 各种需要短数字/字符输入的场景

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | string | 'number' | 否 | 输入框类型，目前只支持number |
| confirmType | string | 'done' | 否 | 设置右下角按钮的文字，有效值：send|search|next|go|done |
| confirmHold | boolean | false | 否 | 点击键盘右下角按钮时是否保持键盘不收起，H5无效 |
| adjustPosition | boolean | true | 否 | 键盘弹起时，是否自动上推页面 |
| maxlength | number | 6 | 否 | 最大输入长度 |
| dot | boolean | false | 否 | 是否用圆点填充（密码模式） |
| mode | string | 'box' | 否 | 显示模式，box-盒子模式，line-底部横线模式 |
| hairline | boolean | false | 否 | 是否细边框 |
| space | string \| number | 10 | 否 | 字符间的距离，单位px |
| modelValue | string \| number | '' | 否 | 预置值 |
| focus | boolean | false | 否 | 是否自动获取焦点 |
| bold | boolean | false | 否 | 字体是否加粗 |
| color | string | '#606266' | 否 | 字体颜色 |
| fontSize | string \| number | 18 | 否 | 字体大小，单位px |
| size | string \| number | 35 | 否 | 输入框的大小，宽等于高，单位px |
| disabledKeyboard | boolean | false | 否 | 是否隐藏原生键盘，如果想用自定义键盘的话，需设置此参数为true |
| borderColor | string | '#e4e7ed' | 否 | 边框和线条颜色 |
| disabledDot | boolean | true | 否 | 是否禁止输入"."符号 |
| bgColor | string | '' | 否 | 背景颜色 |
| round | string \| number | 4 | 否 | 设置圆角值，单位px |
| customStyle | object | - | 否 | 自定义样式，对象形式 |
| customClass | string | - | 否 | 自定义类名 |

### Events
| 名称 | 触发条件 | 参数说明 |
| --- | --- | --- |
| change | 输入内容变化时 | 当前输入的验证码字符串 |
| finish | 输入达到最大长度时 | 完整的验证码字符串 |
| update:modelValue | 输入内容变化时 | 当前输入的验证码字符串（用于v-model双向绑定） |

### Methods
该组件没有对外暴露的方法。

### Slots
该组件不包含任何插槽。
