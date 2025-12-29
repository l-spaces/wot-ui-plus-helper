# Cell 单元格

## 组件概述
Cell 单元格组件是列表中的基本组成单元，用于展示一条信息，支持左侧图标、标题、描述，右侧内容、箭头等多种元素，常用于设置页面、详情页面、列表展示等场景。

### 详细功能描述
- 支持左侧图标、标题、描述信息展示
- 支持右侧内容、箭头、自定义图标
- 支持跳转链接功能
- 支持点击反馈效果
- 支持不同大小设置（默认、large）
- 支持垂直居中对齐
- 支持垂直布局（标题在上，内容在下）
- 支持必填标记显示及位置自定义
- 支持表单验证规则绑定
- 支持自定义样式和类名
- 支持省略号显示

### 适用业务场景
- 设置页面的选项列表
- 详情页面的信息展示
- 导航菜单列表
- 表单中的表单项
- 任何需要展示键值对信息的场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| title | string | - | 否 | 标题 |
| value | string/number | - | 否 | 右侧内容 |
| icon | string | - | 否 | 图标类名 |
| iconSize | string/number | - | 否 | 图标大小 |
| label | string | - | 否 | 描述信息 |
| isLink | boolean | false | 否 | 是否为跳转链接 |
| to | string | - | 否 | 跳转地址 |
| replace | boolean | false | 否 | 跳转时是否替换栈顶页面 |
| clickable | boolean | false | 否 | 开启点击反馈，is-link 默认开启 |
| size | string | - | 否 | 设置单元格大小，可选值：large |
| border | boolean | void 0 | 否 | 是否展示边框线 |
| titleWidth | string | - | 否 | 设置左侧标题宽度 |
| center | boolean | false | 否 | 是否垂直居中，默认顶部居中 |
| required | boolean | false | 否 | 是否必填 |
| vertical | boolean | false | 否 | 表单属性，上下结构 |
| prop | string | - | 否 | 表单域 model 字段名，在使用表单校验功能的情况下，该属性是必填的 |
| rules | array | [] | 否 | 表单验证规则，结合wd-form组件使用 |
| customIconClass | string | - | 否 | icon 使用 slot 时的自定义样式 |
| customLabelClass | string | - | 否 | label 使用 slot 时的自定义样式 |
| customValueClass | string | - | 否 | value 使用 slot 时的自定义样式 |
| customTitleClass | string | - | 否 | title 使用 slot 时的自定义样式 |
| valueAlign | string | right | 否 | value 文字对齐方式，可选值：left、right、center |
| ellipsis | boolean | false | 否 | 是否超出隐藏，显示省略号 |
| useTitleSlot | boolean | true | 否 | 是否启用title插槽，默认启用，用来解决插槽传递时v-slot和v-if冲突问题 |
| markerSide | string | before | 否 | 必填标记位置，可选值：before（标签前）、after（标签后） |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| click | 单元格被点击，且isLink或clickable为true时 | - |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 右侧内容区域，替换value属性 |
| icon | - | 左侧图标区域，替换icon属性 |
| title | - | 标题区域，替换title属性 |
| label | - | 描述信息区域，替换label属性 |
| right-icon | - | 右侧图标区域，替换默认箭头 |
