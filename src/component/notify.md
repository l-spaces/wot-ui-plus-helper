# notify 通知提示组件

## 组件概述
通知提示组件是一个轻量级的通知组件，用于在页面顶部或底部显示简短的通知信息，支持多种类型和自定义样式。组件支持通过组合式API或组件方式使用，提供了灵活的配置选项，适用于各种需要显示通知的场景。

### 详细功能描述
- 支持四种通知类型：primary（主要）、success（成功）、danger（危险）、warning（警告）
- 支持两种显示位置：top（顶部）、bottom（底部）
- 可自定义通知文本、颜色、背景色等
- 支持设置显示时长，自动关闭
- 支持点击事件和关闭事件
- 支持通过组合式API或组件方式使用
- 支持设置通知层级
- 支持安全区域适配
- 支持从页面中脱离，解决fixed失效问题
- 支持全局配置默认选项

### 适用业务场景
- 操作结果提示
- 错误信息提示
- 成功信息提示
- 警告信息提示
- 系统通知
- 任何需要显示简短通知的场景

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| visible | boolean | false | 否 | 通知是否可见 |
| type | 'primary' \| 'success' \| 'danger' \| 'warning' | 'danger' | 否 | 通知类型 |
| message | string | '' | 否 | 通知文案，支持通过\n换行 |
| position | 'top' \| 'bottom' | 'top' | 否 | 通知显示位置 |
| duration | number | 3000 | 否 | 显示时长（ms），值为 0 时，通知不会自动消失 |
| color | string | '' | 否 | 通知文本颜色 |
| background | string | '' | 否 | 通知背景颜色 |
| zIndex | number | 99 | 否 | 通知层级 |
| safeHeight | number | - | 否 | 顶部安全高度 |
| rootPortal | boolean | false | 否 | 是否从页面中脱离出来，用于解决各种 fixed 失效问题 |
| selector | string | '' | 否 | 指定唯一标识，用于多实例管理 |

### Events

| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |
| click | 点击通知时 | event: MouseEvent |
| closed | 通知关闭时 | - |
| opened | 通知打开时 | - |
| update:visible | 通知显示状态变化时 | visible: boolean |

### Methods (组合式API)

| 方法名 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| showNotify | options: NotifyProps \| string | void | 显示通知，支持直接传入字符串作为通知文案 |
| closeNotify | - | void | 关闭通知 |
| setNotifyDefaultOptions | options: NotifyProps | void | 设置全局默认配置 |
| resetNotifyDefaultOptions | - | void | 重置全局默认配置 |

### NotifyProps 类型定义

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| type | 'primary' \| 'success' \| 'danger' \| 'warning' | 通知类型 |
| message | string | 通知文案 |
| color | string | 通知文本颜色 |
| background | string | 通知背景颜色 |
| duration | number | 显示时长（ms） |
| position | 'top' \| 'bottom' | 显示位置 |
| zIndex | number | 通知层级 |
| safeHeight | number | 顶部安全高度 |
| rootPortal | boolean | 是否从页面中脱离 |
| onClick | (event: MouseEvent) => void | 点击通知时的回调 |
| onClosed | () => void | 通知关闭时的回调 |
| onOpened | () => void | 通知打开时的回调 |
