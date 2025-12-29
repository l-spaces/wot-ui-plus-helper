# Textarea 文本域

## 组件概述
文本域组件是用于多行文本输入的基础UI组件，提供了丰富的配置选项和交互功能。wd-textarea组件支持自动增高、字数限制、清空按钮、前缀图标、表单验证等特性，适用于各种需要多行文本输入的场景。

### 详细功能描述
- 支持双向数据绑定
- 支持自动增高功能
- 支持最大输入长度限制和字数统计
- 支持清空按钮
- 支持前缀图标
- 支持左侧标签和自定义标签宽度
- 支持禁用和只读状态
- 支持密码输入模式
- 支持错误状态
- 支持必填标记
- 支持表单验证集成
- 支持自定义样式和类名
- 支持多种键盘配置
- 支持点击前缀图标事件

### 适用业务场景
- 表单中的多行文本输入
- 评论输入框
- 描述信息输入
- 反馈内容输入
- 任何需要多行文本输入的场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | string / number | '' | 否 | 绑定值 |
| placeholder | string | 请输入... | 否 | 占位文本 |
| placeholderStyle | string | - | 否 | 指定placeholder的样式 |
| placeholderClass | string | '' | 否 | 指定placeholder的样式类 |
| disabled | boolean | false | 否 | 禁用输入框 |
| maxlength | number | -1 | 否 | 最大输入长度，设置为-1表示不限制最大长度 |
| autoFocus | boolean | false | 否 | 自动聚焦并拉起键盘 |
| focus | boolean | false | 否 | 获取焦点 |
| autoHeight | boolean | false | 否 | 是否自动增高输入框高度 |
| fixed | boolean | false | 否 | 如果textarea处于position:fixed区域，需要设置此属性为true |
| cursorSpacing | number | 0 | 否 | 指定光标与键盘的距离 |
| cursor | number | -1 | 否 | 指定focus时的光标位置 |
| confirmType | 'send' / 'search' / 'next' / 'go' / 'done' | done | 否 | 设置键盘右下角按钮的文字 |
| confirmHold | boolean | false | 否 | 点击键盘右下角按钮时是否保持键盘不收起 |
| showConfirmBar | boolean | true | 否 | 是否显示键盘上方带有“完成”按钮那一栏 |
| selectionStart | number | -1 | 否 | 光标起始位置，自动聚集时有效 |
| selectionEnd | number | -1 | 否 | 光标结束位置，自动聚集时有效 |
| adjustPosition | boolean | true | 否 | 键盘弹起时是否自动上推页面 |
| disableDefaultPadding | boolean | false | 否 | 是否去掉iOS下的默认内边距 |
| holdKeyboard | boolean | false | 否 | focus状态下点击页面时是否不收起键盘 |
| showPassword | boolean | false | 否 | 显示为密码框 |
| clearable | boolean | false | 否 | 是否显示清空按钮 |
| readonly | boolean | false | 否 | 输入框只读状态 |
| prefixIcon | string | - | 否 | 前置图标，icon组件中的图标类名 |
| showWordLimit | boolean | false | 否 | 是否显示字数限制，需要同时设置maxlength |
| label | string | - | 否 | 设置左侧标题 |
| labelWidth | string | '' | 否 | 设置左侧标题宽度 |
| size | string | - | 否 | 设置输入框大小 |
| error | boolean | false | 否 | 设置输入框错误状态（红色） |
| center | boolean | false | 否 | 当存在label属性时，设置标题和输入框垂直居中 |
| noBorder | boolean | false | 否 | 非cell类型下是否隐藏下划线 |
| required | boolean | false | 否 | cell类型下必填样式 |
| prop | string | '' | 否 | 表单域model字段名，在使用表单校验功能的情况下，该属性是必填的 |
| rules | FormItemRule[] | [] | 否 | 表单验证规则 |
| clearTrigger | 'focus' / 'always' | always | 否 | 显示清除图标的时机 |
| focusWhenClear | boolean | true | 否 | 是否在点击清除按钮时聚焦输入框 |
| ignoreCompositionEvent | boolean | true | 否 | 是否忽略组件内对文本合成系统事件的处理 |
| inputmode | 'none' / 'text' / 'tel' / 'url' / 'email' / 'numeric' / 'decimal' / 'search' / 'password' | text | 否 | 用户在编辑元素或其内容时可能输入的数据类型的提示 |
| markerSide | 'before' / 'after' | before | 否 | 必填标记位置 |
| customTextareaContainerClass | string | '' | 否 | 自定义文本域容器class名称 |
| customTextareaClass | string | '' | 否 | 自定义文本域class名称 |
| customLabelClass | string | '' | 否 | 自定义标签class名称 |
| customStyle | string / object | '' | 否 | 自定义样式 |
| customClass | string | '' | 否 | 自定义类名 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| update:modelValue | 输入值变化时触发 | string / number - 输入框的值 |
| clear | 点击清空按钮时触发 | - |
| blur | 输入框失去焦点时触发 | { value: string / number, cursor: number } - 输入框的值和光标位置 |
| focus | 输入框获得焦点时触发 | event - 聚焦事件对象 |
| input | 输入框内容变化时触发 | event - 输入事件对象 |
| keyboardheightchange | 键盘高度变化时触发 | event - 键盘高度变化事件对象 |
| confirm | 点击键盘右下角按钮时触发 | event - 确认事件对象 |
| linechange | 输入框行数变化时触发 | event - 行变化事件对象 |
| clickprefixicon | 点击前缀图标时触发 | - |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| prefix | - | 自定义前缀内容 |
| label | - | 自定义标签内容 |

