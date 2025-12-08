# messageBox 消息弹窗组件

## 组件概述
消息弹窗组件是一个功能丰富的弹窗组件，支持多种类型的弹窗展示，包括提示框（alert）、确认框（confirm）和输入框（prompt）。组件提供了灵活的配置选项，支持自定义按钮文本、输入框校验、弹窗样式等，可通过组件方式或组合式API方式使用。

### 详细功能描述
- 支持三种弹窗类型：alert（提示框）、confirm（确认框）、prompt（输入框）
- 可通过组件方式或组合式API方式使用
- 支持自定义弹窗标题、内容和按钮文本
- 支持点击蒙层关闭弹窗
- 输入框类型支持多种类型，如text、number、password等
- 支持输入框正则校验和自定义校验函数
- 支持确认前钩子函数，可用于异步校验
- 支持自定义按钮样式和属性
- 支持设置弹窗层级
- 支持懒渲染，提高性能

### 适用业务场景
- 操作确认提示
- 信息提示
- 表单输入验证
- 登录/注册弹窗
- 内容编辑弹窗
- 任何需要用户交互确认的场景

## 完整API参考

### Props

| 名称        | 类型    | 默认值 | 必填 | 描述                                              |
| ----------- | ------- | ------ | ---- | ------------------------------------------------- |
| selector    | string  | ''     | 否   | 指定唯一标识，用于多实例管理                      |
| rootPortal  | boolean | false  | 否   | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 |
| customStyle | string  | -      | 否   | 自定义样式                                        |
| customClass | string  | -      | 否   | 自定义类名                                        |

### Events

无

### Methods (组合式API)

| 方法名  | 参数                              | 返回值                 | 功能说明                             |
| ------- | --------------------------------- | ---------------------- | ------------------------------------ |
| show    | `options: MessageOptions \ string` | `Promise<MessageResult>` | 显示弹窗，支持直接传入字符串作为标题 |
| alert   | `options: MessageOptions \ string` | `Promise<MessageResult>` | 显示提示框，只有确认按钮             |
| confirm | `options: MessageOptions \ string` | `Promise<MessageResult>` | 显示确认框，包含确认和取消按钮       |
| prompt  | `options: MessageOptions \ string` | `Promise<MessageResult>` | 显示输入框弹窗，支持输入校验         |
| close   | -                                 | void                   | 关闭当前弹窗                         |

### MessageOptions

| 名称               | 类型                                                      | 默认值  | 必填 | 描述                                               |
| ------------------ | --------------------------------------------------------- | ------- | ---- | -------------------------------------------------- |
| title              | string                                                    | -       | 否   | 弹窗标题                                           |
| showCancelButton   | boolean                                                   | false   | 否   | 是否展示取消按钮                                   |
| closeOnClickModal  | boolean                                                   | true    | 否   | 是否支持点击蒙层进行关闭                           |
| confirmButtonText  | string                                                    | -       | 否   | 确定按钮文案                                       |
| cancelButtonText   | string                                                    | -       | 否   | 取消按钮文案                                       |
| msg                | string                                                    | -       | 否   | 消息文案                                           |
| type               | 'alert' \ 'confirm' \ 'prompt'                          | 'alert' | 否   | 弹框类型                                           |
| inputType          | string                                                    | 'text'  | 否   | 当type为prompt时，输入框类型                       |
| inputSize          | string                                                    | -       | 否   | 设置输入框大小，可选值：large                      |
| inputValue         | string \ number                                          | -       | 否   | 当type为prompt时，输入框初始值                     |
| inputPlaceholder   | string                                                    | -       | 否   | 当type为prompt时，输入框placeholder                |
| inputPattern       | RegExp                                                    | -       | 否   | 当type为prompt时，输入框正则校验                   |
| inputValidate      | `(inputValue: string \ number) => boolean`                 | -       | 否   | 当type为prompt时，输入框校验函数                   |
| inputError         | string                                                    | -       | 否   | 当type为prompt时，输入框检验不通过时的错误提示文案 |
| showErr            | boolean                                                   | false   | 否   | 是否展示错误信息                                   |
| zIndex             | number                                                    | 99      | 否   | 弹窗层级                                           |
| lazyRender         | boolean                                                   | true    | 否   | 弹层内容懒渲染                                     |
| beforeConfirm      | `(options: { resolve: (isPass: boolean) => void }) => void` | -       | 否   | 确认前钩子                                         |
| cancelButtonProps  | `Partial<ButtonProps>`                                      | -       | 否   | 取消按钮Props                                      |
| confirmButtonProps | `Partial<ButtonProps>`                                      | -       | 否   | 确认按钮Props                                      |

### MessageResult

| 名称   | 类型                             | 描述                                                        |
| ------ | -------------------------------- | ----------------------------------------------------------- |
| action | 'confirm' \ 'cancel' \ 'modal' | 触发方式，confirm-点击确定，cancel-点击取消，modal-点击蒙层 |
| value  | string \ number                 | 当type为prompt时，输入框的值                                |

### Slots

| 插槽名  | 作用域变量 | 使用说明                          |
| ------- | ---------- | --------------------------------- |
| default | -          | 自定义弹窗内容，替代默认的msg文本 |
