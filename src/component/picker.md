# Picker 选择器

## 组件概述
选择器组件用于从预设的选项中选择一个或多个值，通常用于表单、设置页、数据筛选等场景。wd-picker 组件提供了灵活的配置选项，支持单列/多列选择、自定义数据源、加载状态、确认前校验等功能。

### 详细功能描述
- 支持单列和多列选择
- 支持自定义数据源
- 支持加载状态
- 支持确认前校验
- 支持自定义标题和按钮文案
- 支持禁用和只读状态
- 支持表单验证
- 支持自定义展示格式
- 支持列联动
- 支持清空按钮
- 支持根节点样式定制
- 支持弹出层层级设置
- 支持根节点脱离文档流

### 适用业务场景
- 表单中的选择字段
- 数据筛选和排序
- 设置页面的选项选择
- 日期和时间选择
- 地址选择
- 商品规格选择

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| label | string | - | 否 | 选择器左侧文案 |
| placeholder | string | - | 否 | 选择器占位符 |
| disabled | boolean | false | 否 | 是否禁用 |
| readonly | boolean | false | 否 | 是否只读 |
| loading | boolean | false | 否 | 加载中 |
| loadingColor | string | '#4D80F0' | 否 | 加载中颜色 |
| title | string | - | 否 | 弹出层标题 |
| cancelButtonText | string | - | 否 | 取消按钮文案 |
| confirmButtonText | string | - | 否 | 确认按钮文案 |
| required | boolean | false | 否 | 是否必填 |
| size | string | - | 否 | 尺寸 |
| labelWidth | string | '33%' | 否 | 设置左侧标题宽度 |
| useDefaultSlot | boolean | false | 否 | 使用默认插槽（已废弃） |
| useLabelSlot | boolean | false | 否 | 使用标签插槽（已废弃） |
| error | boolean | false | 否 | 错误状态 |
| alignRight | boolean | false | 否 | 右对齐 |
| beforeConfirm | function | - | 否 | 确定前校验函数，接收 (value, resolve, picker) 参数，通过 resolve 继续执行 picker，resolve 接收1个boolean参数 |
| closeOnClickModal | boolean | true | 否 | 点击蒙层关闭 |
| safeAreaInsetBottom | boolean | true | 否 | 底部安全区域内 |
| ellipsis | boolean | false | 否 | 文本溢出显示省略号 |
| columnsHeight | number | 217 | 否 | 选项总高度 |
| valueKey | string | 'value' | 否 | 选项值对应的键名 |
| labelKey | string | 'label' | 否 | 选项文本对应的键名 |
| modelValue | string / number / array | '' | 否 | 选中项，如果为多列选择器，则其类型应为数组 |
| columns | array | [] | 否 | 选择器数据，可以为字符串数组，也可以为对象数组，如果为二维数组，则为多列选择器 |
| columnChange | function | - | 否 | 接收 pickerView 实例、选中项、当前修改列的下标、resolve 作为入参，根据选中项和列下标进行判断，通过 pickerView 实例暴露出来的 setColumnData 方法修改其他列的数据源 |
| displayFormat | function | - | 否 | 自定义展示文案的格式化函数，返回一个字符串 |
| zIndex | number | 15 | 否 | 自定义层级 |
| prop | string | - | 否 | 表单域 model 字段名，在使用表单校验功能的情况下，该属性是必填的 |
| rules | array | [] | 否 | 表单验证规则，结合wd-form组件使用 |
| immediateChange | boolean | false | 否 | 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，1.2.25版本起提供，仅微信小程序和支付宝小程序支持 |
| rootPortal | boolean | false | 否 | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 (H5: teleport, APP: renderjs, 小程序: root-portal) |
| clearable | boolean | false | 否 | 显示清空按钮 |
| markerSide | string | 'before' | 否 | 必填标记位置，可选值：before、after |
| customLabelClass | string | '' | 否 | label 外部自定义样式 |
| customValueClass | string | '' | 否 | value 外部自定义样式 |
| customViewClass | string | '' | 否 | pickerView 外部自定义样式 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| confirm | 点击确认按钮时 | { value: any, selectedItems: any[] } - 选中值和选中项 |
| open | 打开选择器时 | - |
| cancel | 点击取消按钮时 | - |
| clear | 点击清空按钮时 | - |
| update:modelValue | 选中值改变时 | value: any - 选中值 |

### Methods

| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| open | - | - | 打开picker弹框 |
| close | - | - | 关闭picker弹框 |
| setLoading | loading: boolean | - | 设置加载状态 |

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 自定义选择器内容 |
| label | - | 自定义标签内容 |
