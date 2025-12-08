# IndexAnchor 索引锚点


## 组件概述
IndexAnchor 是 IndexBar 组件的子组件，用于定义索引列表中的锚点。它通常与 IndexBar 组件配合使用，实现类似通讯录、城市选择器等带有侧边索引的列表功能。IndexAnchor 支持吸顶效果，当滚动到对应位置时，会自动高亮显示当前锚点。

### 核心功能
- 定义索引列表中的锚点
- 支持自定义锚点内容
- 支持吸顶效果
- 自动与父组件 IndexBar 交互

### 适用业务场景
- 通讯录联系人列表
- 城市选择器
- 分类索引列表
- 字母索引列表
- 带有层级索引的长列表

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填项 | 描述 |
| --- | --- | --- | --- | --- |
| index | string / number | - | 是 | 锚点索引值，用于匹配 IndexBar 侧边栏的索引 |
| customStyle | string | '' | 否 | 自定义样式，对象格式 |
| customClass | string | '' | 否 | 自定义类名 |

### Events
IndexAnchor 组件本身不直接触发事件。

### Methods
IndexAnchor 组件不直接对外暴露方法。

### Slots
| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| default | - | 自定义锚点内容，默认显示 index 属性值 |

