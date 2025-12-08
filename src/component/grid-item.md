# GridItem 网格项


## 组件概述
GridItem 是 Grid 组件的子组件，用于定义网格布局中的单个网格项。它支持图标、文字、徽章等元素的组合展示，并提供点击交互和路由跳转功能。

### 核心功能
- 支持图标展示
- 支持文字描述
- 支持徽章通知（红点/数字）
- 支持点击跳转
- 支持多种页面跳转方式
- 支持自定义样式

### 适用业务场景
- 首页功能入口
- 分类导航项
- 商品卡片
- 功能图标按钮
- 带通知标记的网格项

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填项 | 描述 |
| --- | --- | --- | --- | --- |
| customText | string | '' | 否 | GridItem 下方文字样式 |
| customIcon | string | '' | 否 | GridItem 上方 icon 样式 |
| icon | string | '' | 否 | 图标名称，可选值见 wd-icon 组件 |
| iconSize | string | '26px' | 否 | 图标大小 |
| text | string | '' | 否 | 文字 |
| url | string | '' | 否 | 点击后跳转的链接地址 |
| linkType | string | 'navigateTo' | 否 | 页面跳转方式，可选值：navigateTo / switchTab / reLaunch / redirectTo |
| isDot | boolean | false | 否 | 是否显示图标右上角小红点 |
| type | string | - | 否 | 图标右上角显示的 badge 类型，可选值：primary / success / warning / danger / info |
| value | number / string | - | 否 | 图标右上角 badge 显示值 |
| max | number | - | 否 | 图标右上角 badge 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型 |
| badgeProps | object | - | 否 | 徽标属性，透传给 Badge 组件 |
| customStyle | string | '' | 否 | 自定义样式，对象格式 |
| customClass | string | '' | 否 | 自定义类名 |

### Events
| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| itemclick | 点击 GridItem 时触发 | - |

### Methods
| 方法名 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| setiIemClass | classes: string | void | 设置 GridItem 的样式类 |

### Slots
| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| default | - | 自定义 GridItem 内容，覆盖默认的图标和文字布局 |
| icon | - | 自定义图标内容，替换默认的 wd-icon 组件 |
| text | - | 自定义文字内容，替换默认的文字展示 |

