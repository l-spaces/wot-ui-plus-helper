# Curtain 幕帘

## 组件概述
Curtain 是一个全屏或居中显示的幕帘组件，主要用于展示图片、广告或重要信息，支持多种关闭方式和自定义样式。

### 详细功能描述
- 支持全屏居中展示图片
- 提供多种关闭按钮位置选项
- 支持点击遮罩关闭幕帘
- 支持图片加载状态监听
- 支持自定义关闭按钮样式
- 支持长按图片显示菜单（微信小程序）
- 支持点击图片跳转链接
- 支持点击图片关闭幕帘
- 提供完整的过渡动画事件

### 适用业务场景
- 应用启动广告展示
- 重要活动宣传图展示
- 产品详情大图查看
- 弹窗式图片展示
- 需要全屏覆盖的提示信息

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填项 | 描述 |
| --- | --- | --- | --- | --- |
| value | boolean | false | 否 | 绑定值，展示/关闭幕帘（已废弃，请使用modelValue） |
| modelValue | boolean | false | 否 | 绑定值，展示/关闭幕帘 |
| closePosition | string | "inset" | 否 | 关闭按钮位置，可选值：inset / top / bottom / top-left / top-right / bottom-left / bottom-right |
| src | string | - | 是 | 幕帘图片地址，必须使用网络地址 |
| to | string | - | 否 | 幕帘图片点击链接 |
| width | number | - | 否 | 幕帘图片宽度 |
| closeOnClickModal | boolean | false | 否 | 点击遮罩是否关闭 |
| hideWhenClose | boolean | true | 否 | 是否当关闭时将弹出层隐藏（display: none） |
| zIndex | number | 10 | 否 | 设置层级 |
| customCloseClass | string | "" | 否 | 自定义关闭按钮的类名 |
| customCloseStyle | string | "" | 否 | 自定义关闭按钮的样式 |
| rootPortal | boolean | false | 否 | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 |
| showMenuByLongpress | boolean | false | 否 | 开启长按图片显示识别小程序码菜单，仅在微信小程序平台有效 |
| closeOnClick | boolean | true | 否 | 点击图片是否关闭幕帘 |
| customStyle | string | "" | 否 | 自定义样式 |
| customClass | string | "" | 否 | 自定义类名 |

### Events
| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| beforeenter | 进入动画开始前触发 | - |
| enter | 进入动画进行中触发 | - |
| afterenter | 进入动画结束后触发 | - |
| beforeleave | 离开动画开始前触发 | - |
| leave | 离开动画进行中触发 | - |
| afterleave | 离开动画结束后触发 | - |
| closed | 关闭动画结束后触发 | - |
| close | 关闭时触发 | - |
| click-modal | 点击遮罩时触发 | - |
| load | 图片加载成功时触发 | - |
| error | 图片加载失败时触发 | - |
| click | 点击图片时触发 | - |
| update:modelValue | 绑定值变化时触发 | 新的绑定值 |

### Methods
该组件没有对外暴露的方法。

### Slots
| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| close | - | 自定义关闭按钮，默认显示关闭图标 |

