# Table 表格

## 组件概述
表格组件是用于展示结构化数据的重要UI组件，提供了丰富的功能和灵活的配置选项。wd-table组件支持固定表头、列排序、斑马纹、边框、索引列等多种特性，适用于各种数据展示场景。

### 详细功能描述
- 支持固定表头，实现长表格滚动时表头固定
- 支持列排序功能，可配置升序、降序和重置
- 支持斑马纹表格样式，提高数据可读性
- 支持表格边框配置
- 支持显示/隐藏表头
- 支持自动省略超出2行的文本
- 支持显示索引列，可自定义索引列配置
- 支持行高配置
- 支持固定列功能
- 支持自定义空数据显示文本
- 支持自定义空数据区域高度
- 支持自定义表格高度

### 适用业务场景
- 数据列表展示
- 数据分析报表
- 后台管理系统数据展示
- 任何需要结构化数据展示的场景

## 完整API参考

### Props属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| data | Array<Record<string, any>> | - | 是 | 显示的数据 |
| border | boolean | true | 否 | 是否带有边框 |
| stripe | boolean | true | 否 | 是否为斑马纹表格 |
| height | string / number | - | 否 | Table 的高度 |
| rowHeight | number / string | 40 | 否 | 行高 |
| showHeader | boolean | true | 否 | 是否显示表头 |
| ellipsis | boolean | true | 否 | 是否超出2行隐藏 |
| index | boolean / object | false | 否 | 是否显示索引列，支持对象配置 |
| fixedHeader | boolean | true | 否 | 是否固定表头 |
| emptyText | string | 暂无数据 | 否 | 空数据时显示的文本 |
| emptyHeight | string / number | 100 | 否 | 空数据区域高度，单位为px |
| customStyle | string / object | - | 否 | 自定义样式 |
| customClass | string | - | 否 | 自定义类名 |

### Events事件

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| sort-method | 列排序状态变化时触发 | column: TableColumn - 包含列信息和排序方向 |
| row-click | 行被点击时触发 | { rowIndex: number } - 点击行的索引 |

### Methods方法

该组件没有对外暴露的方法。

### Slots插槽

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 用于放置 TableCol 组件 |
| empty | - | 自定义空数据显示内容 |
