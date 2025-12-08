# ColPicker 多列选择器


## 组件概述
ColPicker 多列选择器是一个用于从多列数据中选择值的组件，支持级联选择、自定义展示格式、表单验证等功能。它提供了直观的交互界面，允许用户在多列数据中进行选择，并支持各种自定义配置。

### 详细功能描述
- 支持多列数据选择，可配置级联关系
- 支持自定义展示文案格式化
- 提供表单验证支持，可结合 wd-form 使用
- 支持禁用和只读状态
- 支持自定义样式和类名
- 支持弹出层标题和占位符配置
- 提供确认前校验机制
- 支持自动补全数据功能
- 支持底部安全距离适配
- 支持从页面中脱离，解决 fixed 失效问题
- 支持国际化

### 适用业务场景
- 地址选择（省市区三级联动）
- 日期时间选择（年月日时分秒）
- 商品分类选择
- 多维度数据筛选
- 表单中的多列选择项
- 各种需要从层级数据中选择值的场景

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| modelValue | array | - | 是 | 选中项，数组格式，对应每一列的选中值 |
| columns | array | [] | 否 | 选择器数据，二维数组，每一项为一列数据 |
| label | string | - | 否 | 选择器左侧文案 |
| labelWidth | string | '33%' | 否 | 设置左侧标题宽度 |
| useLabelSlot | boolean | false | 否 | 使用 label 插槽时设置该选项 |
| useDefaultSlot | boolean | false | 否 | 使用默认插槽时设置该选项 |
| disabled | boolean | false | 否 | 禁用状态 |
| readonly | boolean | false | 否 | 只读状态 |
| placeholder | string | - | 否 | 选择器占位符 |
| title | string | - | 否 | 弹出层标题 |
| columnChange | function | - | 否 | 列数据变化事件，接收当前列的选中项 item、当前列下标、当前列选中项下标、下一列数据处理函数 resolve、结束选择 finish |
| displayFormat | function | - | 否 | 自定义展示文案的格式化函数，返回一个字符串 |
| beforeConfirm | function | - | 否 | 确定前校验函数，接收 (value, resolve) 参数，通过 resolve 继续执行 picker，resolve 接收 1 个 boolean 参数 |
| alignRight | boolean | false | 否 | 选择器的值靠右展示 |
| error | boolean | false | 否 | 是否为错误状态，错误状态时右侧内容为红色 |
| required | boolean | false | 否 | 是否必填 |
| size | string | - | 否 | 设置选择器大小，可选值：large |
| valueKey | string | 'value' | 否 | 选项对象中，value 对应的 key |
| labelKey | string | 'label' | 否 | 选项对象中，展示的文本对应的 key |
| tipKey | string | 'tip' | 否 | 选项对象中，提示文案对应的 key |
| loadingColor | string | '#4D80F0' | 否 | loading 图标的颜色 |
| closeOnClickModal | boolean | true | 否 | 点击遮罩是否关闭 |
| autoComplete | boolean | false | 否 | 自动触发 column-change 事件来补全数据，当 columns 为空数组或者 columns 数组长度小于 value 数组长度时，会自动触发 column-change |
| zIndex | number | 15 | 否 | 弹窗层级 |
| safeAreaInsetBottom | boolean | true | 否 | 弹出面板是否设置底部安全距离（iphone X 类型的机型） |
| ellipsis | boolean | false | 否 | 是否超出隐藏 |
| prop | string | - | 否 | 表单域 model 字段名，在使用表单校验功能的情况下，该属性是必填的 |
| rules | array | [] | 否 | 表单验证规则，结合wd-form组件使用 |
| lineWidth | number | - | 否 | 底部条宽度，单位像素 |
| lineHeight | number | - | 否 | 底部条高度，单位像素 |
| customViewClass | string | '' | 否 | label 外部自定义样式 |
| customLabelClass | string | '' | 否 | value 外部自定义样式 |
| customValueClass | string | '' | 否 | 自定义值样式类名 |
| rootPortal | boolean | false | 否 | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 (H5: teleport, APP: renderjs, 小程序: root-portal) |
| markerSide | string | 'before' | 否 | 必填标记位置，可选值：before、after |
| customStyle | object | - | 否 | 自定义样式，对象形式 |
| customClass | string | - | 否 | 自定义类名 |

### Events
| 名称 | 触发条件 | 参数说明 |
| --- | --- | --- |
| update:modelValue | 选择值变化时 | 当前选中的值数组 |
| confirm | 确认选择时 | 包含 value 和 selectedItems 的对象，value 为选中值数组，selectedItems 为选中项对象数组 |
| close | 关闭选择器时 | 无 |

### Methods
| 名称 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| open | - | - | 打开选择器 |
| close | - | - | 关闭选择器 |

### Slots
| 名称 | 作用域变量 | 说明 |
| --- | --- | --- |
| default | - | 自定义选择器触发器 |
| label | - | 自定义左侧标签 |
