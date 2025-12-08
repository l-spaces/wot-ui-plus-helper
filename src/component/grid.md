# Grid 网格


## 组件概述
Grid 是一个用于创建网格布局的容器组件，配合 GridItem 子组件使用，可以快速实现等分布局、响应式布局等多种网格效果。

### 核心功能
- 支持自定义列数
- 支持网格间距设置
- 支持正方形网格
- 支持边框显示
- 支持点击反馈
- 支持自定义背景色

### 适用业务场景
- 首页功能入口网格
- 商品列表展示
- 图标导航栏
- 数据卡片网格布局
- 响应式内容布局

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填项 | 描述 |
| --- | --- | --- | --- | --- |
| clickable | boolean | false | 否 | 是否开启格子点击反馈 |
| square | boolean | false | 否 | 是否将格子固定为正方形 |
| column | number | - | 否 | 列数 |
| border | boolean | false | 否 | 是否显示边框 |
| bgColor | string | '' | 否 | 背景颜色 |
| gutter | number | - | 否 | 格子之间的间距，默认单位为px |
| hoverClass | string | - | 否 | 自定义内容区域hover-class |
| customStyle | string | '' | 否 | 自定义样式，对象格式 |
| customClass | string | '' | 否 | 自定义类名 |

### Events
Grid 组件本身不直接触发事件，事件通过 GridItem 组件触发。

### Methods
Grid 组件不直接对外暴露方法。

### Slots
| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| default | - | 用于放置 GridItem 子组件 |

