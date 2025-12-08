# Tree 树形组件

## 组件概述
Tree 树形组件是一种用于展示层级结构数据的组件，支持节点的展开/折叠、选择、勾选等功能，可用于构建菜单、文件目录、分类列表等场景。

### 详细功能描述
- 支持静态数据和动态异步加载数据
- 支持节点的展开/折叠操作
- 支持单选和多选（复选框）模式
- 支持级联选择和非级联选择
- 支持节点搜索和高亮
- 支持自定义节点内容和展开/折叠按钮
- 支持受控和非受控两种模式
- 提供丰富的事件回调
- 支持自定义样式和主题

### 适用业务场景
- 导航菜单展示
- 文件目录结构
- 分类列表展示
- 组织架构图
- 权限管理树形结构
- 任何需要展示层级关系数据的场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| data | array | [] | 否 | 树形结构数据 |
| keyField | string | 'id' | 否 | 节点唯一标识字段名 |
| labelField | string | 'label' | 否 | 节点标签字段名 |
| childrenField | string | 'children' | 否 | 子节点字段名 |
| isLeafField | string | 'isLeaf' | 否 | 是否为叶子节点的字段名 |
| disabledField | string | 'disabled' | 否 | 是否禁用的字段名 |
| defaultCheckedKeys | array | [] | 否 | 默认选中节点键值数组 |
| defaultExpandedKeys | array | [] | 否 | 默认展开节点键值数组 |
| checkedKeys | array | undefined | 否 | 受控选中节点键值数组 |
| expandedKeys | array | undefined | 否 | 受控展开节点键值数组 |
| checkable | boolean | false | 否 | 是否显示复选框 |
| selectable | boolean | false | 否 | 是否可选择 |
| cascade | boolean | false | 否 | 是否级联选择 |
| expandOnClick | boolean | false | 否 | 是否点击节点展开/收缩 |
| checkOnClick | boolean | false | 否 | 是否点击节点勾选/取消勾选 |
| loadNode | function | - | 否 | 异步加载节点数据的函数 |
| allowCheckingNotLoaded | boolean | false | 否 | 是否允许勾选未加载的节点 |
| pattern | string | '' | 否 | 搜索过滤模式 |
| showIrrelevantNodes | boolean | true | 否 | 是否显示搜索无关的节点 |
| indentWidth | number | 24 | 否 | 节点缩进宽度 |
| showSwitcher | boolean | true | 否 | 是否显示展开/收缩按钮 |
| expandIcon | string | 'right-box-filled' | 否 | 展开图标 |
| collapseIcon | string | 'down-box-filled' | 否 | 收缩图标 |
| loadingColor | string | '' | 否 | 加载图标颜色 |
| checkedColor | string | '' | 否 | 复选框选中颜色 |
| rotatableSwitcher | boolean | false | 否 | 展开/收缩按钮是否可旋转 |
| highlightBgColor | string | '#f9ae3d' | 否 | 搜索高亮背景颜色 |
| selectedBgColor | string | '#f3f4f6' | 否 | 选中节点背景颜色 |
| switcherSize | number | 14 | 否 | 展开/收缩按钮大小 |
| switcherColor | string | '#909399' | 否 | 展开/收缩按钮颜色 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| click | 点击节点时 | 无 |
| checked | 选中状态变化时 | 选中节点键值数组 |
| expanded | 展开状态变化时 | 展开节点键值数组 |
| update:checked-keys | 选中节点键值变化时（受控模式） | 选中节点键值数组 |
| update:expanded-keys | 展开节点键值变化时（受控模式） | 展开节点键值数组 |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| switcher | hide（是否隐藏）、loading（是否加载中）、expanded（是否展开） | 自定义展开/收缩按钮 |
| content | node（当前节点数据） | 自定义节点内容 |

