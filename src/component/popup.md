# Popup 弹出层

## 组件概述
Popup 组件是一种在页面中弹出的容器，用于显示临时内容，通常用于模态框、抽屉、侧边栏、底部弹出菜单等场景。wd-popup 组件提供了灵活的配置选项，支持多种弹出位置、动画效果、遮罩控制、关闭方式等功能。

### 详细功能描述
- 支持多种弹出位置：center、top、right、bottom、left
- 支持多种动画效果：fade、slide、zoom 等
- 支持遮罩显示/隐藏控制
- 支持点击遮罩关闭
- 支持显示关闭按钮
- 支持自定义层级
- 支持自定义动画时长
- 支持懒渲染
- 支持锁定滚动
- 支持根节点脱离文档流
- 支持底部安全距离适配
- 支持丰富的过渡事件

### 适用业务场景
- 模态框
- 抽屉组件
- 侧边栏
- 底部弹出菜单
- 通知提示
- 确认对话框

## 完整API参考

### Props属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| transition | string | - | 否 | 动画类型，可选值：fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in |
| closable | boolean | false | 否 | 是否显示关闭按钮 |
| position | string | 'center' | 否 | 弹出框的位置，可选值：center / top / right / bottom / left |
| closeOnClickModal | boolean | true | 否 | 点击遮罩是否关闭 |
| duration | number / boolean | 300 | 否 | 动画持续时间 |
| modal | boolean | true | 否 | 是否显示遮罩 |
| zIndex | number | 10 | 否 | 设置层级 |
| hideWhenClose | boolean | true | 否 | 是否当关闭时将弹出层隐藏（display: none) |
| modalStyle | string | '' | 否 | 遮罩样式 |
| safeAreaInsetBottom | boolean | false | 否 | 弹出面板是否设置底部安全距离（iphone X 类型的机型） |
| modelValue | boolean | false | 否 | 弹出层是否显示 |
| lazyRender | boolean | true | 否 | 弹层内容懒渲染，触发展示时才渲染内容 |
| lockScroll | boolean | true | 否 | 是否锁定滚动 |
| rootPortal | boolean | false | 否 | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 (H5: teleport, APP: renderjs, 小程序: root-portal) |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events事件

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| update:modelValue | 弹出层显示状态改变时 | value: boolean - 弹出层显示状态 |
| before-enter | 进入过渡开始之前 | - |
| enter | 进入过渡开始 | - |
| after-enter | 进入过渡结束 | - |
| before-leave | 离开过渡开始之前 | - |
| leave | 离开过渡开始 | - |
| after-leave | 离开过渡结束 | - |
| click-modal | 点击遮罩层时 | - |
| close | 关闭弹出层时 | - |

### Methods方法

该组件没有对外暴露的方法。

### Slots插槽

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 弹出层内容 |
