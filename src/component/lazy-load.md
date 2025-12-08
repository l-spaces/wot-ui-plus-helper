# LazyLoad 懒加载


## 组件概述
懒加载组件是一个用于图片延迟加载的高性能组件，能够在图片进入可视区域时才开始加载，有效提高页面初始加载速度和性能表现。

### 详细功能描述
- 支持图片延迟加载，只有当图片进入可视区域时才开始加载
- 提供默认占位图和错误图，可自定义替换
- 支持多种图片裁剪模式
- 支持淡入淡出过渡动画
- 支持自定义图片加载阈值
- 支持图片点击事件
- 支持加载成功和失败回调

### 适用业务场景
- 长列表图片展示场景
- 图片墙和瀑布流布局
- 电商商品列表
- 新闻资讯列表
- 任何包含大量图片的页面

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| index | number \| string | '' | 否 | 图片索引，用于事件回调中区分不同图片 |
| image | string | '' | 否 | 要显示的图片URL |
| mode | 'aspectFit' \| 'aspectFill' \| 'widthFix' \| 'top' \| 'bottom' \| 'center' \| 'scaleToFill' | 'widthFix' | 否 | 图片裁剪模式 |
| loadingImg | string | base64编码的默认占位图 | 否 | 占位图片路径 |
| errorImg | string | base64编码的默认错误图 | 否 | 加载失败的错误占位图 |
| threshold | number \| string | 100 | 否 | 图片进入可见区域前多少像素时开始加载图片，单位rpx |
| duration | number \| string | 300 | 否 | 淡入淡出动画的过渡时间，单位ms |
| effect | string | 'ease-in-out' | 否 | 过渡效果的速度曲线 |
| isEffect | boolean | true | 否 | 是否使用过渡效果 |
| round | number \| string | 0 | 否 | 图片圆角值，单位rpx |
| height | number \| string | '200' | 否 | 图片高度，单位rpx |
| customStyle | string | - | 否 | 自定义样式 |
| customClass | string | - | 否 | 自定义类名 |

### Events

| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| click | 点击图片时 | 图片索引 |
| load | 图片加载成功时 | 图片索引 |
| error | 图片加载失败时 | 图片索引 |

### Methods

无

### Slots

无
