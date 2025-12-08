# Img 图片


## 组件概述
Img 组件是一个功能增强的图片组件，基于原生 image 组件封装，提供了加载状态、错误处理、图片预览、懒加载等增强功能，同时支持多种图片填充模式和样式定制。

### 核心功能
- 支持图片加载状态显示
- 支持图片加载错误处理
- 支持图片预览功能
- 支持懒加载
- 支持多种填充模式
- 支持圆形图片
- 支持圆角设置
- 支持长按显示菜单（微信小程序）

### 适用业务场景
- 商品图片展示
- 用户头像显示
- 文章配图
- 轮播图图片
- 列表图片
- 需要懒加载的长列表图片

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填项 | 描述 |
| --- | --- | --- | --- | --- |
| customImage | string | '' | 否 | 自定义图片样式类 |
| src | string | - | 否 | 图片链接 |
| previewSrc | string | - | 否 | 预览图片链接 |
| round | boolean | false | 否 | 是否显示为圆形 |
| mode | string | 'scaleToFill' | 否 | 填充模式，可选值：'top left' / 'top right' / 'bottom left' / 'bottom right' / 'right' / 'left' / 'center' / 'bottom' / 'top' / 'heightFix' / 'widthFix' / 'aspectFill' / 'aspectFit' / 'scaleToFill' |
| lazyLoad | boolean | false | 否 | 是否懒加载 |
| width | number / string | - | 否 | 宽度，默认单位为px |
| height | number / string | - | 否 | 高度，默认单位为px |
| radius | number / string | - | 否 | 圆角大小，默认单位为px |
| enablePreview | boolean | false | 否 | 是否允许预览 |
| showMenuByLongpress | boolean | false | 否 | 开启长按图片显示识别小程序码菜单，仅在微信小程序平台有效 |
| customStyle | string | '' | 否 | 自定义样式，对象格式 |
| customClass | string | '' | 否 | 自定义类名 |

### Events
| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| error | 图片加载失败时触发 | event: 事件对象 |
| click | 点击图片时触发 | event: 事件对象 |
| load | 图片加载成功时触发 | event: 事件对象 |

### Methods
Img 组件不直接对外暴露方法。

### Slots
| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| loading | - | 图片加载中时显示的内容 |
| error | - | 图片加载失败时显示的内容 |

