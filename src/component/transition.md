# Transition 过渡动画

## 组件概述
Transition 是一个用于实现元素进入和离开过渡动画的组件，它提供了多种预设动画效果，并支持自定义动画类和持续时间，可用于增强用户界面的交互体验。

### 详细功能描述
- 支持多种预设动画类型，包括淡入淡出、滑动、缩放等
- 提供完整的动画生命周期事件，便于在不同阶段执行自定义逻辑
- 支持自定义动画持续时间和类名
- 支持懒渲染，触发展示时才渲染内容
- 支持动画结束后销毁子节点
- 支持阻止触摸滚动
- 支持同时使用多个动画类型

### 适用业务场景
- 模态框、弹窗的显示和隐藏动画
- 下拉菜单、侧边栏的滑入滑出效果
- 内容区域的淡入淡出切换
- 列表项的添加和删除动画
- 任何需要平滑过渡效果的元素显示/隐藏场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| show | boolean | false | 否 | 是否展示组件 |
| duration | number / boolean / Record<string, number> | 300 | 否 | 动画执行时间，支持统一设置或分别设置进入和离开时间 |
| lazyRender | boolean | false | 否 | 弹层内容懒渲染，触发展示时才渲染内容 |
| name | string / array | 'fade' | 否 | 动画类型，可选值：fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in / zoom-out，支持同时使用多个动画 |
| destroy | boolean | true | 否 | 是否在动画结束时销毁子节点（display: none) |
| enterClass | string | '' | 否 | 进入过渡的开始状态类名 |
| enterActiveClass | string | '' | 否 | 进入过渡的激活状态类名 |
| enterToClass | string | '' | 否 | 进入过渡的结束状态类名 |
| leaveClass | string | '' | 否 | 离开过渡的开始状态类名 |
| leaveActiveClass | string | '' | 否 | 离开过渡的激活状态类名 |
| leaveToClass | string | '' | 否 | 离开过渡的结束状态类名 |
| disableTouchMove | boolean | false | 否 | 是否阻止触摸滚动 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| click | 点击组件时 | 无 |
| before-enter | 进入动画开始前 | 无 |
| enter | 进入动画开始时 | 无 |
| before-leave | 离开动画开始前 | 无 |
| leave | 离开动画开始时 | 无 |
| after-leave | 离开动画结束后 | 无 |
| after-enter | 进入动画结束后 | 无 |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | 无 | 放置需要添加过渡动画的内容 |

