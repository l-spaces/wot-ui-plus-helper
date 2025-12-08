# Collapse 折叠面板


## 组件概述
Collapse 折叠面板是一个用于展示和隐藏内容的组件，支持普通折叠模式和查看更多模式，可配置手风琴效果，提供了灵活的内容展示方式。

### 详细功能描述
- 支持普通折叠模式，配合 CollapseItem 组件使用
- 支持查看更多模式，可配置收起时显示行数
- 支持手风琴模式，同一时间只能展开一个面板
- 提供自定义展开/收起按钮
- 支持通过 v-model 双向绑定展开状态
- 支持切换所有面板状态的方法
- 提供自定义插槽，可定制展开/收起按钮样式
- 支持国际化

### 适用业务场景
- 折叠菜单和分类
- 长内容的分段展示
- 详情页的可折叠内容
- 表单的可折叠区域
- 商品详情的参数展示
- 列表项的展开/收起功能

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| modelValue | string \| array \| boolean | - | 否 | 绑定值，手风琴模式下为字符串，普通模式下为数组，查看更多模式下为布尔值 |
| accordion | boolean | false | 否 | 手风琴模式，同一时间只能展开一个面板 |
| viewmore | boolean | false | 否 | 查看更多模式，显示展开/收起按钮 |
| useMoreSlot | boolean | false | 否 | 使用查看更多模式下的自定义插槽 |
| lineNum | number | 2 | 否 | 查看更多模式下，收起时的显示行数 |
| customMoreSlotClass | string | '' | 否 | 查看更多模式下的插槽外部自定义样式 |
| customStyle | object | - | 否 | 自定义样式，对象形式 |
| customClass | string | '' | 否 | 自定义类名 |

### Events
| 名称 | 触发条件 | 参数说明 |
| --- | --- | --- |
| update:modelValue | 展开状态变化时 | 当前展开的面板名称或状态 |
| change | 展开状态变化时 | 包含 value 的对象，value 为当前展开的面板名称或状态 |

### Methods
| 名称 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| toggleAll | options | - | 切换所有面板展开状态，传 true 为全部展开，false 为全部收起，不传参为全部切换；options 可以是布尔值或对象 { expanded?: boolean, skipDisabled?: boolean } |

### Slots
| 名称 | 作用域变量 | 说明 |
| --- | --- | --- |
| default | - | 内容插槽，普通模式下用于放置 CollapseItem 组件，查看更多模式下用于放置折叠内容 |
| more | - | 查看更多模式下的自定义展开/收起按钮插槽 |
