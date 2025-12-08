# ImgCropper 图片裁剪

## 组件概述
ImgCropper 是一个功能强大的图片裁剪组件，支持图片缩放、旋转、移动等操作，可用于头像裁剪、图片编辑等场景。它提供了直观的裁剪界面和丰富的配置选项，支持自定义裁剪框比例、导出图片质量等。

### 核心功能
- 支持图片缩放、旋转、移动
- 支持自定义裁剪框宽高比
- 支持多种导出图片格式
- 支持导出图片质量设置
- 支持导出图片缩放比例
- 支持禁用旋转功能
- 支持自定义按钮文案

### 适用业务场景
- 用户头像裁剪
- 商品图片编辑
- 图片上传前裁剪
- 证件照裁剪
- 自定义比例图片裁剪

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填项 | 描述 |
| --- | --- | --- | --- | --- |
| modelValue | boolean | false | 否 | 打开图片裁剪组件 |
| cancelButtonText | string | - | 否 | 取消按钮文案 |
| confirmButtonText | string | - | 否 | 确认按钮文案 |
| disabledRotate | boolean | false | 否 | 是否禁用旋转 |
| fileType | string | 'png' | 否 | 目标文件的类型，可选值：png / jpg / jpeg |
| quality | number | 1 | 否 | 生成的图片质量，范围：0-1 |
| exportScale | number | 2 | 否 | 设置导出图片尺寸缩放比例 |
| imgSrc | string | '' | 否 | 图片源路径 |
| imgWidth | number / string | '' | 否 | 图片宽度 |
| imgHeight | number / string | '' | 否 | 图片高度 |
| maxScale | number | 3 | 否 | 最大缩放倍数 |
| aspectRatio | string | '1:1' | 否 | 裁剪框宽高比，格式为 width:height |
| customStyle | string | '' | 否 | 自定义样式，对象格式 |
| customClass | string | '' | 否 | 自定义类名 |

### Events
| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| imgloaded | 图片加载完成时触发 | res: 图片信息 |
| imgloaderror | 图片加载失败时触发 | err: 错误信息 |
| cancel | 取消裁剪时触发 | - |
| confirm | 完成裁剪时触发 | result: { tempFilePath: 裁剪后的图片临时路径, width: 图片宽度, height: 图片高度 } |
| update:modelValue | 组件显示/隐藏状态变化时触发 | visible: 组件是否可见 |

### Methods
| 方法名 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| revertIsAnimation | animation: boolean | void | 逆转是否使用动画 |
| resetImg | - | void | 初始化图片的大小和角度以及距离 |
| setRoate | angle: number | void | 控制旋转角度 |

### Slots
ImgCropper 组件不包含插槽。

