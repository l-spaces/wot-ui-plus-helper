# FloatingPanel 悬浮面板


## 组件概述
FloatingPanel 是一个可拖拽的悬浮面板组件，支持通过拖拽调整高度并自动吸附到预设的锚点位置。它提供了一个头部拖拽区域和可滚动的内容区域，适用于需要从底部弹出并可调整大小的场景。

### 详细功能描述
- 支持通过拖拽头部或内容区域调整面板高度
- 自动吸附到预设的锚点位置
- 可配置的动画时长
- 支持底部安全区域适配
- 可配置是否显示滚动条
- 支持自定义样式和类名

### 适用业务场景
- 地图应用中的信息面板
- 图片查看器的底部操作面板
- 表单填写的底部弹出面板
- 聊天应用的消息输入面板
- 数据筛选的底部筛选面板

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| height | number | 0 | 否 | 面板的显示高度 |
| anchors | array | [] | 否 | 设置自定义锚点，默认值 [100, windowHeight * 0.6] |
| safeAreaInsetBottom | boolean | false | 否 | 弹出面板是否设置底部安全距离（iphone X 类型的机型） |
| showScrollbar | boolean | true | 否 | 是否显示滚动条 |
| duration | number / string | 300 | 否 | 动画时长，单位毫秒 |
| contentDraggable | boolean | true | 否 | 是否允许内容区容器拖拽 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events
| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| update:height | 面板高度变化时触发 | height: number - 新的面板高度 |
| height-change | 面板高度变化时触发 | { height: number } - 包含新高度的对象 |

### Methods
| 方法名 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |

### Slots
| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| default | - | 面板内容插槽，用于放置面板内部的内容 |

