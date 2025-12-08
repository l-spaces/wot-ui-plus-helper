# PickerView 选择器视图

## 组件概述
选择器视图组件是一种在页面中直接展示的选择器，用于在页面内进行选项选择，通常用于表单、设置页、数据筛选等场景。wd-picker-view 组件提供了灵活的配置选项，支持单列/多列选择、自定义数据源、加载状态、选项高度等功能。

### 详细功能描述
- 支持单列和多列选择
- 支持自定义数据源
- 支持加载状态
- 支持自定义选项高度
- 支持自定义滚筒高度
- 支持禁用选项
- 支持立即触发change事件
- 支持双向绑定
- 支持丰富的方法调用
- 支持自定义样式和类名

### 适用业务场景
- 页面内的选择器组件
- 表单中的选择字段
- 数据筛选和排序
- 设置页面的选项选择
- 日期和时间选择
- 地址选择

## 完整API参考

### Props属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| loading | boolean | false | 否 | 加载状态 |
| loadingColor | string | '#4D80F0' | 否 | 加载的颜色，只能使用十六进制的色值写法，且不能使用缩写 |
| columnsHeight | number | 217 | 否 | picker内部滚筒高 |
| itemHeight | number | 35 | 否 | picker item的高度 |
| valueKey | string | 'value' | 否 | 选项对象中，value对应的 key |
| labelKey | string | 'label' | 否 | 选项对象中，展示的文本对应的 key |
| immediateChange | boolean | false | 否 | 是否在手指松开时立即触发picker-view的 change 事件。若不开启则会在滚动动画结束后触发 change 事件，1.2.25版本起提供，仅微信小程序和支付宝小程序支持 |
| modelValue | string / number / boolean / array | '' | 是 | 选中项，如果为多列选择器，则其类型应为数组 |
| columns | array | [] | 否 | 选择器数据，可以为字符串数组，也可以为对象数组，如果为二维数组，则为多列选择器 |
| columnChange | function | - | 否 | 接收 pickerView 实例、选中项、当前修改列的下标、resolve 作为入参，根据选中项和列下标进行判断，通过 pickerView 实例暴露出来的 setColumnData 方法修改其他列的数据源 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events事件

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| change | 选择器选中项变化时 | { picker: any, value: any, index: number } - pickerView实例、选中值、变化的列下标 |
| pickstart | 选择器开始滚动时 | - |
| pickend | 选择器结束滚动时 | - |
| update:modelValue | 选中值改变时 | value: any - 选中值 |

### Methods方法

| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| getSelects | - | Record<string, any> / Record<string, any>[] | 获取选中项 |
| getValues | - | string / string[] | 获取选中值 |
| setColumnData | columnIndex: number, data: array, rowIndex: number = 0 | - | 设置列数据 |
| getColumnsData | - | Record<string, string>[][] | 获取所有列数据 |
| getColumnData | columnIndex: number | Record<string, string>[] | 获取某一列数据 |
| getColumnIndex | columnIndex: number | number | 获取某一列的选中项下标 |
| getLabels | - | string[] | 获取所有列选中项的label |
| getSelectedIndex | - | number[] | 获取选中的索引 |
| resetColumns | columns: array | - | 重置列数据 |

### Slots插槽

该组件没有定义插槽。
