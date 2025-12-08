# DropMenuItem 下拉菜单项

## 组件概述
DropMenuItem 是下拉菜单组件（DropMenu）的子组件，用于定义单个下拉菜单项的内容和行为。它支持自定义选项列表、选中状态、禁用状态以及自定义内容，是构建复杂下拉菜单的核心组件。

### 详细功能描述
- 支持自定义选项列表，格式为数组，每个选项可包含label、value、tip等属性
- 支持双向绑定选中值
- 支持禁用状态
- 支持自定义选中图标
- 支持自定义菜单标题和图标
- 支持自定义菜单图标大小
- 支持自定义点击事件钩子函数
- 支持自定义选项对象的key映射
- 支持自定义弹出层样式和类名
- 支持自定义弹出层高度
- 支持从页面中脱离出来，解决fixed失效问题

### 适用业务场景
- 页面顶部筛选栏的单个筛选项
- 数据列表的排序选项
- 导航菜单的下拉选项
- 表单中的下拉选择器选项
- 自定义内容的下拉菜单

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| modelValue | string / number | - | 否 | 当前选中项对应选中的 value |
| options | array | [] | 否 | 列表数据，对应数据结构 [{label: '标题', value: '0', tip: '提示文字'}] |
| disabled | boolean | false | 否 | 禁用菜单 |
| iconName | string | check | 选中的图标名称(可选名称在 wd-icon 组件中) |
| title | string | - | 否 | 菜单标题 |
| icon | string | arrow-down | 菜单图标 |
| iconSize | string / number | - | 否 | 菜单图标大小 |
| beforeToggle | function | - | 否 | 自定义点击事件，回调函数参数包含status和resolve，resolve(true)允许操作，resolve(false)禁止操作 |
| valueKey | string | value | 否 | 选项对象中，value 对应的 key |
| labelKey | string | label | 否 | 选项对象中，展示的文本对应的 key |
| tipKey | string | tip | 否 | 选项对象中，选项说明对应的 key |
| customPopupClass | string | '' | 否 | 自定义下拉菜单popup样式类 |
| customPopupStyle | string | '' | 否 | 自定义下拉菜单popup样式 |
| popupHeight | string | '' | 否 | 弹出层高度 |
| rootPortal | boolean | false | 否 | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |
| customTitle | string | '' | 否 | DropMenuItem 左侧文字样式 |
| customIcon | string | '' | 否 | DropMenuItem 右侧 icon 样式 |

### Events
| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| update:modelValue | 选中值变化时触发 | value: string/number - 新的选中值 |
| change | 选中值变化时触发 | { value: string/number, selectedItem: object } - 选中的值和对应的选项对象 |
| open | 菜单打开时触发 | - |
| opened | 菜单打开动画结束后触发 | - |
| close | 菜单关闭时触发 | - |
| closed | 菜单关闭动画结束后触发 | - |

### Methods
| 方法名 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| open | - | - | 打开菜单 |
| close | - | - | 关闭菜单 |
| toggle | - | - | 切换菜单的展开/收起状态 |
| getShowPop | - | boolean | 获取菜单是否展开的状态 |

### Slots
| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| default | - | 自定义菜单内容，当 options 为空时显示 |

