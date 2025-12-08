# Input 输入框


## 组件概述
Input 是一个功能丰富的输入框组件，基于原生 input 组件封装，提供了多种输入类型、表单验证、前缀后缀图标、清空按钮、密码可见性切换等增强功能。它支持与 Form 组件配合使用，实现表单验证逻辑，同时提供了丰富的样式定制选项。

### 核心功能
- 支持多种输入类型（文本、数字、密码、身份证等）
- 支持表单验证集成
- 支持前缀和后缀图标/插槽
- 支持清空按钮
- 支持密码可见性切换
- 支持字数统计
- 支持只读和禁用状态
- 支持错误状态显示
- 支持自定义键盘类型
- 支持自定义样式

### 适用业务场景
- 登录注册表单
- 用户信息编辑
- 搜索框
- 密码输入
- 验证码输入
- 金额输入
- 带图标的输入框

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填项 | 描述 |
| --- | --- | --- | --- | --- |
| customInputClass | string | '' | 否 | 自定义输入框样式类 |
| customLabelClass | string | '' | 否 | 自定义标签样式类 |
| placeholder | string | - | 否 | 占位文本 |
| placeholderStyle | string | - | 否 | 原生属性，指定 placeholder 的样式，目前仅支持color,font-size和font-weight |
| placeholderClass | string | '' | 否 | 原生属性，指定 placeholder 的样式类 |
| cursorSpacing | number | 0 | 否 | 原生属性，指定光标与键盘的距离 |
| cursor | number | -1 | 否 | 原生属性，指定focus时的光标位置 |
| selectionStart | number | -1 | 否 | 原生属性，光标起始位置 |
| selectionEnd | number | -1 | 否 | 原生属性，光标结束位置 |
| adjustPosition | boolean | true | 否 | 原生属性，键盘弹起时，是否自动上推页面 |
| holdKeyboard | boolean | false | 否 | focus时，点击页面的时候不收起键盘 |
| confirmType | string | 'done' | 否 | 设置键盘右下角按钮的文字，可选值：done / go / next / search / send |
| confirmHold | boolean | false | 否 | 点击键盘右下角按钮时是否保持键盘不收起 |
| focus | boolean | false | 否 | 原生属性，获取焦点 |
| type | string | 'text' | 否 | 输入框类型，可选值：text / number / digit / idcard / safe-password / nickname / tel |
| maxlength | number | -1 | 否 | 原生属性，最大长度 |
| disabled | boolean | false | 否 | 原生属性，禁用 |
| alwaysEmbed | boolean | false | 否 | 微信小程序原生属性，强制 input 处于同层状态 |
| alignRight | boolean | false | 否 | 输入框的值靠右展示 |
| modelValue | number / string | '' | 否 | 绑定值 |
| showPassword | boolean | false | 否 | 显示为密码框 |
| clearable | boolean | false | 否 | 显示清空按钮 |
| readonly | boolean | false | 否 | 只读 |
| prefixIcon | string | - | 否 | 前置图标，可选值见 wd-icon 组件 |
| suffixIcon | string | - | 否 | 后置图标，可选值见 wd-icon 组件 |
| showWordLimit | boolean | false | 否 | 显示字数限制 |
| label | string | - | 否 | 设置左侧标题 |
| labelWidth | string | - | 否 | 设置左侧标题宽度 |
| size | string | - | 否 | 设置输入框大小，可选值：large |
| error | boolean | false | 否 | 设置输入框错误状态 |
| center | boolean | false | 否 | 当有label属性时，设置标题和输入框垂直居中 |
| noBorder | boolean | false | 否 | 非 cell 类型下是否隐藏下划线 |
| required | boolean | false | 否 | 是否必填 |
| prop | string | - | 否 | 表单域 model 字段名，在使用表单校验功能的情况下，该属性是必填的 |
| rules | array | [] | 否 | 表单验证规则，结合wd-form组件使用 |
| clearTrigger | string | 'always' | 否 | 显示清除图标的时机，可选值：focus / always |
| focusWhenClear | boolean | true | 否 | 是否在点击清除按钮时聚焦输入框 |
| ignoreCompositionEvent | boolean | true | 否 | 是否忽略组件内对文本合成系统事件的处理 |
| inputmode | string | 'text' | 否 | 输入模式提示，可选值：none / text / decimal / numeric / tel / search / email / url |
| markerSide | string | 'before' | 否 | 必填标记位置，可选值：before（标签前）、after（标签后） |
| inputBorder | string | 'underline' | 否 | 边框类型，可选值：border（边框）、underline（下划线）、none（无） |
| customStyle | string | '' | 否 | 自定义样式，对象格式 |
| customClass | string | '' | 否 | 自定义类名 |

### Events
| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| update:modelValue | 输入框值变化时触发 | value: 输入框的当前值 |
| clear | 点击清空按钮时触发 | - |
| blur | 输入框失焦时触发 | detail: { value: 输入框的当前值 } |
| focus | 输入框聚焦时触发 | detail: 事件对象 |
| input | 输入框值变化时触发 | detail: 事件对象 |
| keyboardheightchange | 键盘高度变化时触发 | detail: 事件对象 |
| confirm | 点击键盘确认按钮时触发 | detail: 事件对象 |
| clicksuffixicon | 点击后缀图标时触发 | - |
| clickprefixicon | 点击前缀图标时触发 | - |
| click | 点击输入框时触发 | event: 事件对象 |

### Methods
Input 组件不直接对外暴露方法。

### Slots
| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| prefix | - | 输入框前置内容，优先级高于 prefixIcon |
| suffix | - | 输入框后置内容，优先级高于 suffixIcon 和 clear 按钮 |
| label | - | 自定义标签内容，优先级高于 label 属性 |

