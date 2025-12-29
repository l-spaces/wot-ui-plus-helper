# Pagination 分页

## 组件概述
分页组件用于展示和切换页码，通常用于列表页、数据表格、搜索结果页等需要分页显示数据的场景。wd-pagination 组件提供了灵活的配置选项，支持页码切换、总条数显示、图标/文本模式切换等功能。

### 详细功能描述
- 支持当前页双向绑定
- 支持总页数自动计算或手动设置
- 支持上一页/下一页切换
- 支持图标模式和文本模式切换
- 支持显示总条数、当前页信息
- 支持自定义上一页/下一页文本
- 支持总页数为1时隐藏分页组件
- 支持国际化文本
- 支持自定义样式和类名

### 适用业务场景
- 列表页数据分页
- 数据表格分页
- 搜索结果页分页
- 长列表加载更多
- 任何需要分页显示数据的场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | number | - | 是 | 当前页 |
| totalPage | number | 1 | 否 | 总页数，如果有total，则优先使用total计算页数 |
| showIcon | boolean | false | 否 | 是否展示分页为Icon图标 |
| showMessage | boolean | false | 否 | 是否展示总条数 |
| total | number | 0 | 否 | 总条数 |
| pageSize | number | 10 | 否 | 每页条数 |
| prevText | string | - | 否 | 上一页文本 |
| nextText | string | - | 否 | 下一页文本 |
| hideIfOnePage | boolean | true | 否 | 总页数只有一页时是否隐藏 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| change | 页码改变时 | { value: number } - 新的页码值 |
| update:modelValue | 页码改变时 | number - 新的页码值 |

### Methods

该组件没有对外暴露的方法。

### Slots

该组件没有定义插槽。
