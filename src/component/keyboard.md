# Keyboard 键盘组件


## 组件概述
键盘组件是一个功能丰富的自定义键盘，提供了默认数字键盘、自定义键盘和车牌输入键盘三种模式，支持灵活配置和多种交互方式。

### 详细功能描述
- 支持三种键盘模式：默认数字键盘、自定义键盘和车牌输入键盘
- 可配置键盘按键顺序，支持随机排列
- 支持自定义额外按键和删除键
- 支持键盘标题和关闭按钮自定义
- 支持点击外部区域关闭键盘
- 支持安全区域适配
- 车牌键盘支持中英文切换

### 适用业务场景
- 密码输入场景
- 验证码输入场景
- 车牌号码输入场景
- 需要自定义键盘布局的特殊输入场景

## 完整API参考

### Props

| 名称                | 类型                           | 默认值    | 必填 | 描述                                                            |
| ------------------- | ------------------------------ | --------- | ---- | --------------------------------------------------------------- |
| visible             | boolean                        | false     | 否   | 键盘是否可见                                                    |
| modelValue          | string                         | ''        | 否   | 绑定的值                                                        |
| title               | string                         | -         | 否   | 键盘标题                                                        |
| mode                | 'default' \ 'custom' \ 'car' | 'default' | 否   | 键盘模式                                                        |
| zIndex              | number                         | 100       | 否   | 键盘层级                                                        |
| maxlength           | number                         | Infinity  | 否   | 最大输入长度                                                    |
| showDeleteKey       | boolean                        | true      | 否   | 是否显示删除键                                                  |
| randomKeyOrder      | boolean                        | false     | 否   | 是否随机键盘按键顺序                                            |
| closeText           | string                         | -         | 否   | 确认按钮文本                                                    |
| deleteText          | string                         | -         | 否   | 删除按钮文本                                                    |
| closeButtonLoading  | boolean                        | false     | 否   | 关闭按钮是否显示加载状态                                        |
| modal               | boolean                        | false     | 否   | 是否显示蒙层                                                    |
| hideOnClickOutside  | boolean                        | true      | 否   | 是否在点击外部时收起键盘                                        |
| lockScroll          | boolean                        | true      | 否   | 是否锁定滚动                                                    |
| safeAreaInsetBottom | boolean                        | true      | 否   | 是否在底部安全区域内                                            |
| extraKey            | `string \ Array<string>`        | -         | 否   | 额外按键                                                        |
| rootPortal          | boolean                        | false     | 否   | 是否从页面中脱离出来，用于解决各种 fixed 失效问题               |
| carLang             | 'zh' \ 'en'                   | -         | 否   | 车牌键盘语言模式，当mode=car时生效                              |
| autoSwitchLang      | boolean                        | false     | 否   | 是否自动切换车牌键盘语言，当mode=car且carLang是非受控状态时生效 |
| customStyle         | string                         | -         | 否   | 自定义样式                                                      |
| customClass         | string                         | -         | 否   | 自定义类名                                                      |

### Events

| 事件名            | 触发条件                             | 参数说明       |
| ----------------- | ------------------------------------ | -------------- |
| update:visible    | 键盘显示状态变化时                   | 新的显示状态   |
| input             | 输入按键时                           | 输入的文本内容 |
| close             | 点击关闭按钮或点击外部区域关闭键盘时 | -              |
| delete            | 点击删除键时                         | -              |
| update:modelValue | 输入内容变化时                       | 新的输入值     |
| update:carLang    | 车牌键盘语言切换时                   | 新的语言模式   |

### Methods

无

### Slots

| 插槽名 | 作用域变量 | 使用说明     |
| ------ | ---------- | ------------ |
| title  | -          | 键盘标题插槽 |
