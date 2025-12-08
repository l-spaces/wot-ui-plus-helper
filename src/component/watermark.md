# Watermark 水印


## 组件概述
Watermark 是一个用于添加水印效果的组件，支持文本水印和图片水印，可自定义水印的位置、大小、颜色、旋转角度等，适用于保护版权、标识来源等场景。

### 详细功能描述
- 支持文本水印和图片水印
- 可自定义水印的宽度和高度
- 支持设置水印的旋转角度
- 支持自定义水印的颜色、字体大小和样式
- 支持设置水印的透明度
- 支持全屏水印和局部水印
- 支持设置水印的层级
- 支持设置水印之间的间距
- 自适应不同屏幕尺寸
- 支持跨平台使用

### 适用业务场景
- 文档、图片等内容的版权保护
- 系统界面的品牌标识
- 敏感信息的来源追踪
- 任何需要添加水印效果的场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| content | string | '' | 否 | 水印显示内容 |
| image | string | '' | 否 | 显示图片的地址，支持网络图片和base64（钉钉小程序仅支持网络图片） |
| imageHeight | number | 100 | 否 | 图片高度，单位px |
| imageWidth | number | 100 | 否 | 图片宽度，单位px |
| gutterX | number | 0 | 否 | X轴间距，单位px |
| gutterY | number | 0 | 否 | Y轴间距，单位px |
| width | number | 100 | 否 | canvas画布宽度，单位px |
| height | number | 100 | 否 | canvas画布高度，单位px |
| fullScreen | boolean | true | 否 | 是否为全屏水印 |
| color | string | '#8c8c8c' | 否 | 水印字体颜色 |
| size | number | 14 | 否 | 水印字体大小，单位px |
| fontStyle | string | 'normal' | 否 | 水印字体样式（仅微信和h5支持），可能的值：normal、italic、oblique |
| fontWeight | number / string | 'normal' | 否 | 水印字体的粗细（仅微信和h5支持） |
| fontFamily | string | 'PingFang SC' | 否 | 水印字体系列（仅微信和h5支持） |
| rotate | number | -25 | 否 | 水印旋转角度，单位度 |
| zIndex | number | 1100 | 否 | 自定义层级 |
| opacity | number | 0.5 | 否 | 自定义透明度，取值 0~1 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events

该组件没有自定义事件。

### Methods

该组件没有对外暴露的方法。

### Slots

该组件没有插槽。
