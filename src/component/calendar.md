# Calendar 日历选择器

## 组件概述
Calendar 日历选择器组件是一个功能强大的日期时间选择器，支持多种选择模式，包括单个日期、日期范围、时间日期、周、月等，可用于表单输入、日期筛选等多种场景。

### 详细功能描述
- 支持9种选择类型：date（日期）、dates（多日期）、datetime（日期时间）、week（周）、month（月）、daterange（日期范围）、datetimerange（日期时间范围）、weekrange（周范围）、monthrange（月范围）
- 支持最小/最大日期限制
- 支持周起始天设置
- 支持自定义日期格式化
- 支持范围选择的最大范围限制
- 支持快捷选项
- 支持时间过滤
- 支持隐藏秒选择
- 支持底部安全距离适配
- 支持懒渲染
- 支持从页面中脱离（解决fixed失效问题）
- 支持表单验证
- 支持清空功能
- 支持必填标记

### 适用业务场景
- 表单中的日期选择
- 订单日期选择
- 日期范围筛选（如报表查询）
- 周/月选择
- 任何需要日期时间选择的场景

## 完整API参考

### Props属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | number/array/null | - | 是 | 选中值，为13位时间戳或时间戳数组 |
| type | string | date | 否 | 日期类型，可选值：date / dates / datetime / week / month / daterange / datetimerange / weekrange / monthrange |
| minDate | number | 当前日期前12个月 | 否 | 最小日期，为13位时间戳 |
| maxDate | number | 当前日期后12个月 | 否 | 最大日期，为13位时间戳 |
| firstDayOfWeek | number | 0 | 否 | 周起始天（0-周日，1-周一，以此类推） |
| formatter | function | - | 否 | 日期格式化函数 |
| maxRange | number | - | 否 | type为范围选择时有效，最大日期范围 |
| rangePrompt | string | - | 否 | type为范围选择时有效，选择超出最大日期范围时的错误提示文案 |
| allowSameDay | boolean | false | 否 | type为范围选择时有效，是否允许选择同一天 |
| defaultTime | string/array | - | 否 | 选中日期所使用的当日内具体时刻 |
| timeFilter | function | - | 否 | type为datetime或datetimerange时有效，用于过滤时间选择器的数据 |
| hideSecond | boolean | false | 否 | type为datetime或datetimerange时有效，是否不展示秒修改 |
| label | string | - | 否 | 选择器左侧文案 |
| labelWidth | string | 33% | 否 | 设置左侧标题宽度 |
| disabled | boolean | false | 否 | 是否禁用 |
| readonly | boolean | false | 否 | 是否只读 |
| placeholder | string | - | 否 | 选择器占位符 |
| title | string | - | 否 | 弹出层标题 |
| alignRight | boolean | false | 否 | 选择器的值靠右展示 |
| error | boolean | false | 否 | 是否为错误状态，错误状态时右侧内容为红色 |
| required | boolean | false | 否 | 是否必填 |
| size | string | - | 否 | 设置选择器大小，可选值：large |
| center | boolean | false | 否 | 是否垂直居中 |
| closeOnClickModal | boolean | true | 否 | 点击遮罩是否关闭 |
| zIndex | number | 15 | 否 | 弹框层级 |
| showConfirm | boolean | true | 否 | 是否显示确定按钮 |
| confirmText | string | - | 否 | 确定按钮文字 |
| displayFormat | function | - | 否 | 自定义展示文案的格式化函数，返回一个字符串 |
| innerDisplayFormat | function | - | 否 | 自定义范围选择类型的面板内部回显，返回一个字符串 |
| ellipsis | boolean | false | 否 | 是否超出隐藏 |
| showTypeSwitch | boolean | false | 否 | 是否显示类型切换功能 |
| shortcuts | array | [] | 否 | 快捷选项，为对象数组，其中对象的text必传 |
| onShortcutsClick | function | - | 否 | 快捷操作点击回调 |
| safeAreaInsetBottom | boolean | true | 否 | 弹出面板是否设置底部安全距离（iphone X类型的机型） |
| beforeConfirm | function | - | 否 | 确定前校验函数，接收{ value, resolve }参数，通过resolve继续执行 |
| prop | string | - | 否 | 表单域model字段名，在使用表单校验功能的情况下，该属性是必填的 |
| rules | array | [] | 否 | 表单验证规则，结合wd-form组件使用 |
| immediateChange | boolean | false | 否 | 是否在手指松开时立即触发change事件（仅微信/支付宝小程序支持） |
| withCell | boolean | true | 否 | 是否使用内置单元格 |
| rootPortal | boolean | false | 否 | 是否从页面中脱离出来，解决fixed失效问题 |
| markerSide | string | before | 否 | 必填标记位置，可选值：before（标签前）、after（标签后） |
| clearable | boolean | false | 否 | 是否显示清空按钮 |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |
| customLabelClass | string | - | 否 | 自定义标签样式类 |
| customValueClass | string | - | 否 | 自定义值样式类 |

### Events事件

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| cancel | 点击取消按钮或遮罩层关闭时 | - |
| change | 选中值变化时 | value: 选中的日期值 |
| update:modelValue | 选中值变化并确认后 | newValue: 新的选中值 |
| confirm | 点击确定按钮时 | value: 选中的日期值, type: 当前选择类型 |
| open | 打开选择器时 | - |
| clear | 点击清空按钮时 | - |

### Methods方法

| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| open | - | - | 打开时间选择器弹窗 |
| close | - | - | 关闭时间选择器弹窗 |

### Slots插槽

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 自定义选择器内容，仅当withCell为false时有效 |
| label | - | 自定义左侧标签内容 |
