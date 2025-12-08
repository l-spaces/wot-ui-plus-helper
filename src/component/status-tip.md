# StatusTip 状态提示

## 组件概述
状态提示组件用于在各种状态下向用户展示友好的提示信息，包括搜索结果为空、网络错误、内容为空等场景。该组件提供了多种内置图标和灵活的自定义选项，能够适应不同业务场景的需求。

### 详细功能描述
- 支持7种内置状态图标：search（搜索）、network（网络）、content（内容）、collect（收藏）、comment（评论）、halo（光环）、message（消息）
- 支持自定义图片URL
- 支持多种图片大小配置方式（字符串、数字或对象）
- 支持自定义提示文本
- 支持自定义图片裁剪模式
- 支持自定义图片路径前缀
- 支持图片插槽自定义
- 支持底部内容插槽自定义
- 支持自定义样式和类名

### 适用业务场景
- 搜索结果为空提示
- 网络错误状态提示
- 内容列表为空提示
- 收藏列表为空提示
- 评论列表为空提示
- 消息列表为空提示
- 任何需要展示状态提示的场景

## 完整API参考

### Props属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| image | string | network | 否 | 状态图片类型或URL，内置类型：search, network, content, collect, comment, halo, message |
| imageSize | string/number/object | '' | 否 | 图片大小，支持字符串、数字或对象格式 {width, height} |
| tip | string | '' | 否 | 提示文案 |
| imageMode | string | aspectFill | 否 | 图片裁剪、缩放的模式，同uni-app的image组件mode属性 |
| urlPrefix | string | ./../../static/images/ | 否 | 图片路径前缀，用于拼接内置图片URL |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |

### Events事件

该组件没有对外暴露的事件。

### Methods方法

该组件没有对外暴露的方法。

### Slots插槽

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| image | - | 自定义图片，用于替换默认图标 |
| bottom | - | 底部内容插槽，可用于添加操作按钮等 |
| default | - | 默认插槽，已废弃，建议使用bottom插槽 |
