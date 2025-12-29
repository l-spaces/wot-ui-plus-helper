# Text 文本

## 组件概述
文本组件是用于展示和格式化文本内容的基础UI组件，提供了丰富的文本样式和处理选项。wd-text组件支持多种文本类型、大小、颜色、装饰效果，以及日期、电话、姓名、金额等特殊格式的处理，适用于各种文本展示场景。

### 详细功能描述
- 支持5种文本类型：default、primary、success、warning、error
- 支持自定义文本大小、颜色和行高
- 支持文本装饰：下划线、中划线、上划线
- 支持文本格式化：普通文本、日期、手机号、姓名、金额
- 支持手机号和姓名脱敏处理
- 支持手机号点击拨号功能
- 支持文本行数限制和自动省略
- 支持粗体文本
- 支持前缀和后缀文本或插槽
- 支持点击事件

### 适用业务场景
- 普通文本展示
- 状态文本展示
- 日期格式化展示
- 手机号展示和脱敏
- 姓名脱敏展示
- 金额格式化展示
- 需要特殊样式的文本
- 可点击的文本

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| type | 'default' / 'primary' / 'success' / 'warning' / 'error' | default | 否 | 主题类型 |
| text | string / number | '' | 否 | 文字内容 |
| size | number / string | '' | 否 | 字体大小 |
| mode | 'text' / 'date' / 'phone' / 'name' / 'price' | text | 否 | 文本处理的匹配模式 |
| decoration | 'none' / 'underline' / 'line-through' / 'overline' | none | 否 | 文字装饰 |
| call | boolean | false | 否 | mode=phone时，点击文本是否拨打电话 |
| bold | boolean | false | 否 | 是否粗体 |
| format | boolean | false | 否 | 是否脱敏，当mode为phone和name时生效 |
| color | string | '' | 否 | 文本颜色 |
| prefix | string | '' | 否 | 前置文本 |
| suffix | string | '' | 否 | 后置文本 |
| lines | number | - | 否 | 文本显示的行数，超出此行数显示省略号，最大值为5 |
| lineHeight | string | '' | 否 | 文本行高 |
| customStyle | string / object | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| click | 点击文本时触发 | event - 点击事件对象 |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| prefix | - | 前置内容插槽 |
| suffix | - | 后置内容插槽 |

