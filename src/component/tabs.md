# Tabs 标签页

## 组件概述
标签页组件是用于实现内容切换的常用UI组件，支持多种配置选项和交互方式。wd-tabs组件提供了丰富的功能，包括粘性布局、手势滑动、动态下划线、导航地图等特性，适用于各种复杂的标签页场景。

### 详细功能描述
- 支持粘性布局，可配置吸顶位置
- 支持手势滑动切换标签
- 支持自动调整底部条宽度
- 支持自定义底部条宽度和高度
- 支持自定义激活和非激活状态颜色
- 支持标签内容切换动画
- 支持标签数量超过阈值时可滑动
- 支持标签数量超过阈值时显示导航地图
- 支持自定义导航地图标题
- 支持标签项徽标显示
- 支持标签项禁用状态
- 支持标签内容懒加载
- 支持标签点击事件
- 支持标签切换事件

### 适用业务场景
- 页面内容分类切换
- 表单分步填写
- 数据统计分析不同维度切换
- 移动端应用主导航
- 任何需要内容切换的场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | number / string | 0 | 否 | 绑定值 |
| slidableNum | number | 6 | 否 | 标签数超过阈值可滑动 |
| mapNum | number | 10 | 否 | 标签数超过阈值显示导航地图 |
| mapTitle | string | - | 否 | 导航地图的标题 |
| sticky | boolean | false | 否 | 粘性布局 |
| offsetTop | number | 0 | 否 | 粘性布局吸顶位置 |
| swipeable | boolean | false | 否 | 开启手势滑动 |
| autoLineWidth | boolean | false | 否 | 自动调整底部条宽度，设置了 lineWidth 后无效 |
| lineWidth | number / string | - | 否 | 底部条宽度，单位像素 |
| lineHeight | number / string | - | 否 | 底部条高度，单位像素 |
| color | string | - | 否 | 激活状态颜色 |
| inactiveColor | string | - | 否 | 非活动状态颜色 |
| animated | boolean | false | 否 | 是否开启切换标签内容时的过渡动画 |
| duration | number | 300 | 否 | 切换动画过渡时间，单位毫秒 |
| slidable | 'auto' / 'always' | auto | 否 | 是否开启滚动导航 |
| showScrollbar | boolean | false | 否 | 标签可滑动时是否显示滚动条 |
| customStyle | string / object | - | 否 | 自定义样式 |
| customClass | string | - | 否 | 自定义类名 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| change | 标签切换时触发 | { index: number, name: string } - 切换后的标签索引和名称 |
| disabled | 点击禁用标签时触发 | { index: number, name: string } - 禁用标签的索引和名称 |
| click | 点击标签时触发 | { index: number, name: string } - 点击标签的索引和名称 |
| update:modelValue | 标签切换时触发 | number / string - 切换后的标签索引或名称 |

### Methods

| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| setActive | value: number / string, init: boolean, setScroll: boolean | void | 设置激活项 |
| scrollIntoView | - | void | 使选中项滚动到可视区域 |
| updateLineStyle | animation?: boolean | void | 更新激活项边框线样式 |

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 用于放置 Tab 组件 |
