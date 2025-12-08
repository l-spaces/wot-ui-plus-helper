# DateStrip 日期选择条组件

## 组件概述
DateStrip 组件是一个用于日期选择的水平滚动条组件，支持周模式和平铺模式两种展示方式，可自定义日期范围、样式、高亮模式等，常用于日历选择、日期筛选、日程安排等场景。

### 详细功能描述
- 支持周模式（按周切换）和平铺模式（水平滚动展示所有日期）
- 支持自定义日期范围（最小日期和最大日期）
- 支持农历显示
- 支持自定义选中样式和高亮模式
- 支持日期禁用和格式化
- 支持自定义每格日期的宽度和圆角
- 支持自定义背景色和高度
- 支持从任意星期几开始显示
- 支持日期补零显示
- 支持响应式设计，自动滚动到选中日期
- 支持禁用特定日期
- 支持自定义日期底部信息

### 适用业务场景
- 日历应用的日期选择条
- 酒店、机票预订的日期选择器
- 日程安排的日期导航
- 数据统计的日期筛选
- 活动报名的日期选择
- 考勤打卡的日期选择

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| modelValue | number | 0 | 否 | 选中的值（时间戳） |
| defaultDate | string / number | '' | 否 | 默认选中的日期（时间戳或日期字符串） |
| mode | string | week | 否 | 切换模式：'none' 平铺展示所有日期，'week' 按周方式切换 |
| minDate | number | 0 | 否 | 可选择的最小日期（时间戳） |
| maxDate | number | 0 | 否 | 可选择的最大日期（时间戳） |
| height | string | 55px | 否 | 插件高度 |
| itemWidth | string | 50px | 否 | 每格日期宽度 |
| itemRound | string | 6px | 否 | 每格日期圆角 |
| activeBgColor | string | #3c9cff | 否 | 选中框背景色 |
| activeColor | string | #ffffff | 否 | 选中框文本色 |
| activeStyle | object | {} | 否 | 选中框样式 |
| bgColor | string | '' | 否 | 横条背景色 |
| round | string | '' | 否 | 横条圆角 |
| firstDayOfWeek | number | 0 | 否 | 第一天从星期几开始，默认 0 = 周日 |
| activeMode | string | both | 否 | 高亮模式：'both' 同时高亮星期和日期，'date' 只高亮日期，'text' 只高亮文本 |
| formatter | function / null | null | 否 | 日期格式化函数 |
| monthNum | number / string | 1 | 否 | 最多展示月份数量 |
| disabledFun | function / null | null | 否 | 禁止选择的日期函数 |
| disabledDate | array / string / null | null | 否 | 禁止选择的日期列表 |
| disabledColor | string | #c8c9cc | 否 | 禁用日期的文字颜色 |
| showLunar | boolean | false | 否 | 是否显示农历 |
| padZero | boolean | false | 否 | 是否对小于10的数字补0 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events
| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| update:value | 选中日期变化时触发 | value: number - 选中日期的时间戳 |
| change | 选中日期变化时触发 | data: { weekday: string, date: string/number, timestamp: number, lunar?: any } - 选中日期的详细信息 |

### Methods
| 方法名 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| setFormatter | formatter: function | - | 设置日期格式化函数（用于微信小程序中不支持将函数作为props传递的情况） |

### Slots
| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |

