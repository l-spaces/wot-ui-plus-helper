# Fab 悬浮按钮组件

## 组件概述
Fab（Floating Action Button）组件是一个悬浮在页面之上的操作按钮，支持多种位置、大小和样式，可展开为菜单，也支持拖拽功能。常用于触发页面的主要操作，如添加、创建、分享等。

### 详细功能描述
- 支持 8 种不同的定位位置（左上、右上、左下、右下、左中、右中、上中、下中）
- 支持 6 种不同的按钮类型（primary、success、info、warning、error、default）
- 支持自定义按钮大小和图标
- 支持可展开菜单，提供 4 种菜单弹出方向（上、下、左、右）
- 支持拖拽功能，拖拽结束后可自动吸附到屏幕两侧
- 支持自定义图标（激活和非激活状态）
- 支持禁用状态
- 支持自定义层级和样式
- 支持通过方法控制菜单的展开和收起
- 支持自定义触发器插槽

### 适用业务场景
- 页面主要操作按钮，如添加新内容
- 快速操作菜单，提供多个常用功能入口
- 需要悬浮显示的操作按钮，不随页面滚动而移动
- 需要支持拖拽调整位置的场景
- 表单页面的提交按钮
- 列表页面的筛选或排序按钮

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| active | boolean | false | 否 | 是否激活（展开状态） |
| type | string | primary | 否 | 类型，可选值为 default primary info success warning error |
| size | number | 50 | 否 | 悬浮按钮大小，单位为像素 |
| position | string | right-bottom | 否 | 悬浮按钮位置，可选值为 left-top right-top left-bottom right-bottom left-center right-center top-center bottom-center |
| direction | string | top | 否 | 悬浮按钮菜单弹出方向，可选值为 top bottom left right |
| disabled | boolean | false | 否 | 是否禁用 |
| inactiveIcon | string | add | 否 | 悬浮按钮未展开时的图标 |
| activeIcon | string | close | 否 | 悬浮按钮展开时的图标 |
| zIndex | number | 99 | 否 | 自定义悬浮按钮层级 |
| draggable | boolean | false | 否 | 是否可拖动 |
| gap | object | {} | 否 | 自定义悬浮按钮菜单与按钮之间的间距，单位为像素 |
| expandable | boolean | true | 否 | 用于控制点击时是否展开菜单 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events
| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| click | 当按钮不可展开且点击时触发 | - |
| update:active | 当按钮展开状态变化时触发 | active: boolean - 当前展开状态 |

### Methods
| 方法名 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| open | - | - | 打开FAB菜单（展开） |
| close | - | - | 关闭FAB菜单（收起） |

### Slots
| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| default | - | 展开菜单的内容插槽，用于放置子菜单按钮 |
| trigger | - | 自定义触发器插槽，用于完全自定义FAB按钮的外观 |

