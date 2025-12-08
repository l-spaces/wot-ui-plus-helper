# LoadMore 加载更多


## 组件概述
加载更多组件是一个用于列表底部的加载状态指示器，支持多种状态切换，提供了加载中、加载失败和加载完成三种状态的展示，可自定义提示文本和加载动画。

### 详细功能描述
- 支持三种加载状态：loading（加载中）、error（加载失败）、finished（加载完成）
- 可自定义各状态的提示文本
- 支持自定义加载动画属性
- 加载失败时支持点击重试
- 内置国际化支持
- 支持自定义样式

### 适用业务场景
- 列表分页加载场景
- 滚动到底部自动加载更多数据
- 下拉刷新配合上拉加载的列表
- 任何需要展示加载状态的列表底部

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| state | 'loading' \| 'error' \| 'finished' | - | 否 | 加载状态 |
| loadingText | string | - | 否 | 加载中提示文案 |
| finishedText | string | - | 否 | 全部加载完的提示文案 |
| errorText | string | - | 否 | 加载失败的提示文案 |
| loadingProps | object | - | 否 | 加载中loading组件的属性，参考loading组件 |
| customStyle | string | - | 否 | 自定义样式 |
| customClass | string | - | 否 | 自定义类名 |

### Events

| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| reload | 加载失败状态下点击组件时 | - |

### Methods

无

### Slots

无
