# Circle 圆形进度条

## 组件概述
Circle 圆形进度条是一个用于展示进度或百分比数据的可视化组件，通过 Canvas 技术实现流畅的动画效果，支持多种样式定制和交互方式。

### 详细功能描述
- 支持自定义圆环直径、进度条宽度和颜色
- 支持渐变色进度条配置
- 提供顺时针/逆时针两种动画方向
- 支持三种进度条端点形状（butt/round/square）
- 内置平滑动画效果，可调节动画速度
- 支持自定义文字内容或使用插槽插入复杂内容
- 响应式设计，适配不同尺寸需求

### 适用业务场景
- 任务完成进度展示
- 资源加载状态指示
- 评分或等级可视化
- 数据统计仪表盘
- 倒计时进度显示
- 健康数据指标展示

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| modelValue | number | 0 | 否 | 当前进度，取值范围0-100 |
| size | number | 100 | 否 | 圆环直径，默认单位为 px |
| color | string \| object | '#4d80f0' | 否 | 进度条颜色，传入对象格式可以定义渐变色 |
| layerColor | string | '#EBEEF5' | 否 | 轨道颜色 |
| fill | string | - | 否 | 填充颜色 |
| speed | number | 50 | 否 | 动画速度（单位为 rate/s） |
| text | string | - | 否 | 文字 |
| strokeWidth | number | 10 | 否 | 进度条宽度，单位px |
| strokeLinecap | string | 'round' | 否 | 进度条端点的形状，可选值为 "butt" \| "round" \| "square" |
| clockwise | boolean | true | 否 | 是否顺时针增加 |
| customStyle | object | - | 否 | 自定义样式，对象形式 |
| customClass | string | - | 否 | 自定义类名 |

### Events
该组件不触发任何自定义事件。

### Methods
该组件没有对外暴露的方法。

### Slots
| 名称 | 作用域变量 | 说明 |
| --- | --- | --- |
| default | - | 自定义提示内容，当text属性为空时显示 |
