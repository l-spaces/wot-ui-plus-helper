# Search 搜索框

## 组件概述
Search组件是一个功能丰富的搜索框组件，提供了输入、清除、搜索等核心功能，并支持自定义样式、占位符、前后缀等扩展功能。它适用于各种需要搜索功能的场景，如商品搜索、内容搜索等。

### 详细功能描述
- 支持双向数据绑定（v-model）
- 自动显示/隐藏清除按钮
- 支持自定义占位符文本
- 支持自定义取消按钮文本
- 支持浅色/深色主题切换
- 支持禁用状态
- 支持最大输入长度限制
- 支持自动聚焦
- 支持自定义前后缀插槽
- 支持多种事件触发（focus、blur、input、search等）
- 支持多端适配

### 适用业务场景
- 搜索页面的核心搜索框
- 商品列表顶部的搜索栏
- 文章、新闻等内容的搜索功能
- 应用内的全局搜索入口
- 表单中的搜索输入框

## 完整API参考

### Props
| 参数 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | string | '' | 否 | 输入框内容，双向绑定 |
| clearabled | boolean | true | 否 | 是否显示清除按钮 |
| placeholder | string | - | 否 | 搜索框占位文本 |
| cancelTxt | string | - | 否 | 搜索框右侧文本 |
| light | boolean | false | 否 | 是否使用亮色（白色）主题 |
| hideCancel | boolean | false | 否 | 是否隐藏右侧文本 |
| disabled | boolean | false | 否 | 是否禁用搜索框 |
| maxlength | number | -1 | 否 | 原生属性，设置最大长度。-1 表示无限制 |
| placeholderLeft | boolean | false | 否 | placeholder 居左边 |
| focus | boolean | false | 否 | 是否自动聚焦 |
| focusWhenClear | boolean | false | 否 | 是否在点击清除按钮时聚焦输入框 |
| placeholderStyle | string | - | 否 | 原生属性，指定 placeholder 的样式，目前仅支持color,font-size和font-weight |
| placeholderClass | string | '' | 否 | 原生属性，指定 placeholder 的样式类 |
| customInputClass | string | '' | 否 | 输入框自定义类名 |
| customClass | string | - | 否 | 自定义类名 |
| customStyle | object | - | 否 | 自定义样式，对象形式 |
| useSuffixSlot | boolean | false | 否 | 是否使用输入框右侧插槽（已废弃，直接使用插槽即可） |

### Events
| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| update:modelValue | 输入框内容变化时 | { value: string } 输入框当前值 |
| change | 输入框内容变化时 | { value: string } 输入框当前值 |
| focus | 输入框获得焦点时 | { value: string } 输入框当前值 |
| blur | 输入框失去焦点时 | { value: string } 输入框当前值 |
| search | 点击键盘搜索按钮时 | { value: string } 输入框当前值 |
| clear | 点击清除按钮时 | 无 |
| cancel | 点击取消按钮时 | { value: string } 输入框当前值 |

### Methods
无

### Slots
| 插槽名 | 作用域变量 | 说明 |
|--------|------------|------|
| prefix | - | 搜索框左侧插槽，用于放置自定义内容 |
| suffix | - | 搜索框右侧插槽，用于放置自定义内容，默认显示取消按钮 |
