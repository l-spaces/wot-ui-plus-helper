# Toast 提示

## 组件概述
提示组件是用于显示临时通知信息的轻量级UI组件，支持多种类型和自定义配置。wd-toast组件提供了成功、错误、警告、加载、信息等多种提示类型，支持自定义位置、时长、图标和布局，适用于各种需要临时反馈的场景。

### 详细功能描述
- 支持5种提示类型：success、error、warning、loading、info
- 支持4种位置：top、middle-top、middle、bottom
- 支持自定义提示时长
- 支持垂直和水平两种布局方向
- 支持加载状态，可配置加载类型和颜色
- 支持自定义图标大小和颜色
- 支持遮罩层
- 支持函数式API调用
- 支持完全展示和完全关闭的回调函数
- 支持自定义z-index
- 支持自定义图标类名

### 适用业务场景
- 操作成功提示
- 操作失败提示
- 警告信息提示
- 加载状态提示
- 普通信息提示
- 任何需要临时反馈的场景

## 完整API参考

### Props属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| msg | string | '' | 否 | 提示信息 |
| direction | 'vertical' / 'horizontal' | horizontal | 否 | 排列方向 |
| iconName | 'success' / 'error' / 'warning' / 'loading' / 'info' | '' | 否 | 图标名称 |
| iconSize | number | - | 否 | 图标大小 |
| loadingType | 'outline' / 'ring' | outline | 否 | 加载类型 |
| loadingColor | string | '#4D80F0' | 否 | 加载颜色 |
| loadingSize | number | - | 否 | 加载大小 |
| iconColor | string | - | 否 | 图标颜色 |
| position | 'top' / 'middle-top' / 'middle' / 'bottom' | middle-top | 否 | 提示信息框的位置 |
| zIndex | number | 100 | 否 | 层级 |
| cover | boolean | false | 否 | 是否存在遮罩层 |
| iconClass | string | '' | 否 | 图标类名 |
| classPrefix | string | 'wd-icon' | 否 | 类名前缀，用于使用自定义图标 |
| opened | Function | - | 否 | 完全展示后的回调函数 |
| closed | Function | - | 否 | 完全关闭时的回调函数 |
| customStyle | string / object | '' | 否 | 自定义样式 |
| customClass | string | '' | 否 | 自定义类名 |

### Methods方法

| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| show | ToastOptions / string | void | 打开Toast |
| success | ToastOptions / string | void | 显示成功提示 |
| error | ToastOptions / string | void | 显示错误提示 |
| warning | ToastOptions / string | void | 显示警告提示 |
| info | ToastOptions / string | void | 显示信息提示 |
| loading | ToastOptions / string | void | 显示加载提示 |
| close | - | void | 关闭Toast |

### ToastOptions 类型

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| msg | string | '' | 否 | 提示信息 |
| duration | number | 2000 | 否 | 提示时长，单位毫秒，0表示不自动关闭 |
| direction | 'vertical' / 'horizontal' | horizontal | 否 | 排列方向 |
| iconName | 'success' / 'error' / 'warning' / 'loading' / 'info' | '' | 否 | 图标名称 |
| iconSize | number | - | 否 | 图标大小 |
| loadingType | 'outline' / 'ring' | outline | 否 | 加载类型 |
| loadingColor | string | '#4D80F0' | 否 | 加载颜色 |
| loadingSize | number | - | 否 | 加载大小 |
| iconColor | string | - | 否 | 图标颜色 |
| position | 'top' / 'middle-top' / 'middle' / 'bottom' | middle-top | 否 | 提示信息框的位置 |
| show | boolean | false | 否 | 是否显示 |
| zIndex | number | 100 | 否 | 层级 |
| cover | boolean | false | 否 | 是否存在遮罩层 |
| iconClass | string | '' | 否 | 图标类名 |
| classPrefix | string | 'wd-icon' | 否 | 类名前缀，用于使用自定义图标 |
| opened | () => void | - | 否 | 完全展示后的回调函数 |
| closed | () => void | - | 否 | 完全关闭时的回调函数 |

