# CalendarView 日历视图

## 组件概述
CalendarView 日历视图组件是一个功能强大的日历展示和选择组件，支持多种日历类型和视图模式。它提供了灵活的配置选项，允许开发者根据不同业务需求定制日历的外观和行为，支持从简单的日期选择到复杂的日期范围选择等多种场景。

### 详细功能描述
- 支持多种日历类型：日期单选、日期多选、日期时间、周选择、月选择以及各种范围选择
- 提供月视图和年视图两种面板，根据选择类型自动切换
- 支持农历日期显示
- 支持自定义日期格式化和样式
- 支持日期范围限制
- 支持时间选择过滤
- 支持自定义面板高度
- 提供滚动到可视区域的方法
- 支持范围选择的最大天数限制
- 支持自定义周起始日
- 支持显示/隐藏秒选择
- 支持立即触发change事件

### 适用业务场景
- 预约系统中的日期时间选择
- 考勤系统中的排班日期选择
- 报表系统中的日期范围筛选
- 活动报名中的日期选择
- 日历应用中的日期查看和标记
- 酒店预订系统中的入住离店日期选择
- 会议系统中的会议时间选择

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | number \| number[] \| null | - | 是 | 选中值，单选时为时间戳，多选或范围选择时为时间戳数组 |
| type | string | date | 否 | 日历类型，可选值：date、dates、datetime、week、month、daterange、datetimerange、weekrange、monthrange |
| minDate | number | 当前日期往前12个月 | 否 | 最小可选日期，时间戳 |
| maxDate | number | 当前日期往后12个月 | 否 | 最大可选日期，时间戳 |
| firstDayOfWeek | number | 1 | 否 | 周起始天，0表示周日，1-6表示周一至周六 |
| showLunar | boolean | true | 否 | 是否显示农历日期 |
| showMark | boolean | true | 否 | 是否显示月份背景 |
| formatter | function | - | 否 | 日期格式化函数，用于自定义日期项的显示和样式 |
| maxRange | number | - | 否 | 最大日期范围，type为范围选择时有效 |
| rangePrompt | string | - | 否 | 范围超出提示文案 |
| allowSameDay | boolean | false | 否 | 是否允许选择同一天，type为范围选择时有效 |
| showPanelTitle | boolean | true | 否 | 是否展示面板标题 |
| defaultTime | string \| string[] | 00:00:00 | 否 | 选中日期的具体时刻，单选时为字符串，范围选择时为数组 |
| panelHeight | number | 378 | 否 | 可滚动面板的高度 |
| timeFilter | function | - | 否 | 时间选择器过滤器，用于过滤时间选择器的可选数据 |
| hideSecond | boolean | false | 否 | 是否隐藏秒修改 |
| immediateChange | boolean | false | 否 | 是否立即触发change事件，仅微信小程序和支付宝小程序支持 |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| change | 选中值发生变化时 | { value: number \| number[] \| null } - 选中的值 |
| pickstart | 开始选择范围时 | 无 |
| pickend | 结束选择范围时 | 无 |

### Methods

| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| scrollIntoView | 无 | 无 | 使当前日期或者选中日期滚动到可视区域 |

### Slots

该组件没有定义任何插槽。
