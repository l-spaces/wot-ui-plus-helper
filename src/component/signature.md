# Signature 签名板

## 组件概述
Signature组件是一个功能丰富的签名组件，支持签名绘制、压感模式、撤销恢复、清空等功能，并能将签名导出为图片。它适用于需要用户手写签名的场景，如合同签署、表单确认等。

### 详细功能描述
- 支持基本的签名绘制功能
- 支持压感模式（笔锋效果），根据绘制速度调整笔画宽度
- 支持撤销和恢复功能，可自定义撤销步长
- 支持清空签名功能
- 支持导出签名为图片，可自定义图片类型、质量和缩放比例
- 支持自定义签名笔颜色和宽度
- 支持自定义画布背景色
- 支持禁用画布滚动
- 支持自定义底部按钮文本和样式
- 支持多端适配

### 适用业务场景
- 合同签署页面
- 表单确认签名
- 电子签名功能
- 手写批注功能
- 身份验证签名

## 完整API参考

### Props
| 参数 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| penColor | string | '#000' | 否 | 签名笔颜色 |
| lineWidth | number | 3 | 否 | 签名笔宽度 |
| clearText | string | - | 否 | 清空按钮的文本 |
| revokeText | string | - | 否 | 撤回按钮的文本 |
| restoreText | string | - | 否 | 恢复按钮的文本 |
| confirmText | string | - | 否 | 确认按钮的文本 |
| fileType | string | 'png' | 否 | 目标文件的类型 |
| quality | number | 1 | 否 | 目标文件的质量 |
| exportScale | number | 1 | 否 | 导出图片的缩放比例 |
| disabled | boolean | false | 否 | 是否禁用签名板 |
| height | number | - | 否 | 画布的高度 |
| width | number | - | 否 | 画布的宽度 |
| backgroundColor | string | - | 否 | 画板的背景色 |
| disableScroll | boolean | true | 否 | 是否禁用画布滚动 |
| enableHistory | boolean | false | 否 | 是否开启历史记录 |
| step | number | 1 | 否 | 撤回和恢复的步长 |
| undoText | string | - | 否 | 撤回按钮的文本（已废弃，使用revokeText） |
| redoText | string | - | 否 | 恢复按钮的文本（已废弃，使用restoreText） |
| pressure | boolean | false | 否 | 是否启用压感模式(笔锋) |
| minWidth | number | 2 | 否 | 压感模式下笔画最小宽度 |
| maxWidth | number | 6 | 否 | 压感模式下笔画最大宽度 |
| minSpeed | number | 1.5 | 否 | 最小速度阈值，影响压感模式下的笔画宽度变化 |
| customClass | string | - | 否 | 自定义类名 |
| customStyle | object | - | 否 | 自定义样式，对象形式 |

### Events
| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| start | 开始绘制时 | 触摸事件对象 |
| end | 结束绘制时 | 触摸事件对象 |
| signing | 绘制过程中 | 触摸事件对象 |
| confirm | 确认签名并生成图片后 | SignatureResult对象，包含tempFilePath、success、width、height |
| clear | 清空签名后 | 无 |

### Methods
| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| init | forceUpdate?: boolean | void | 初始化签名板 |
| clear | 无 | void | 清空签名 |
| confirm | 无 | void | 确认签名并生成图片 |
| restore | 无 | void | 恢复上一步操作 |
| revoke | 无 | void | 撤销上一步操作 |

### Slots
| 插槽名 | 作用域变量 | 说明 |
|--------|------------|------|
| footer | clear: 清空签名函数, confirm: 确认签名函数, currentStep: 当前步骤, revoke: 撤销函数, restore: 恢复函数, can-undo: 是否可撤销, can-redo: 是否可恢复, history-list: 历史线条列表 | 自定义底部按钮区域，默认显示清空、撤销、恢复、确认按钮 |
