# Button 按钮

## 组件概述
按钮是最常用的交互元素之一，用于触发操作或提交表单。wd-button 组件提供了丰富的样式和功能，支持多种类型、尺寸和状态，适用于各种场景。

### 详细功能描述
- 支持多种按钮类型：primary、success、info、warning、error、default、text、icon
- 支持三种尺寸：small、medium、large
- 支持幽灵按钮、圆角按钮、块状按钮等样式变体
- 支持加载状态和禁用状态
- 支持图标按钮
- 支持小程序开放能力（如getUserInfo、contact等）
- 支持自定义样式和类名

### 适用业务场景
- 表单提交按钮
- 操作触发按钮
- 导航按钮
- 小程序开放能力调用
- 加载状态展示

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| plain | boolean | false | 否 | 幽灵按钮 |
| round | boolean | true | 否 | 圆角按钮 |
| disabled | boolean | false | 否 | 禁用按钮 |
| hairline | boolean | false | 否 | 是否细边框 |
| block | boolean | false | 否 | 块状按钮 |
| type | string | primary | 否 | 按钮类型，可选值：primary / success / info / warning / error / text / icon |
| size | string | medium | 否 | 按钮尺寸，可选值：small / medium / large |
| icon | string | - | 否 | 图标类名 |
| classPrefix | string | wd-icon | 否 | 类名前缀，用于使用自定义图标 |
| loading | boolean | false | 否 | 加载中按钮 |
| loadingColor | string | - | 否 | 加载图标颜色 |
| openType | string | - | 否 | 开放能力，支持多种小程序开放能力 |
| hoverStopPropagation | boolean | - | 否 | 指定是否阻止本节点的祖先节点出现点击态 |
| lang | string | - | 否 | 指定返回用户信息的语言，可选值：zh_CN / zh_TW / en |
| sessionFrom | string | - | 否 | 会话来源，open-type="contact"时有效 |
| sendMessageTitle | string | - | 否 | 会话内消息卡片标题，open-type="contact"时有效 |
| sendMessagePath | string | - | 否 | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效 |
| sendMessageImg | string | - | 否 | 会话内消息卡片图片，open-type="contact"时有效 |
| appParameter | string | - | 否 | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 |
| showMessageCard | boolean | - | 否 | 是否显示会话内消息卡片，open-type="contact"时有效 |
| buttonId | string | - | 否 | 按钮的唯一标识，可用于设置隐私同意授权按钮的id |
| scope | string | - | 否 | 支付宝小程序，当 open-type 为 getAuthorize 时有效，可选值：'phoneNumber' | 'userInfo' |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| click | 按钮被点击，且非禁用和非加载状态 | event: 原生点击事件 |
| getuserinfo | 用户点击授权按钮，获取用户信息 | detail: 用户信息对象 |
| contact | 点击客服按钮，进入客服会话 | detail: 客服会话相关信息 |
| getphonenumber | 点击获取手机号按钮 | detail: 手机号相关信息 |
| getrealtimephonenumber | 点击获取实时手机号按钮 | detail: 实时手机号相关信息 |
| error | 发生错误时 | detail: 错误信息 |
| launchapp | 打开APP成功时 | detail: APP相关信息 |
| opensetting | 打开设置页面成功时 | detail: 设置页面相关信息 |
| chooseavatar | 选择头像成功时 | detail: 头像相关信息 |
| agreeprivacyauthorization | 用户同意隐私授权时 | detail: 隐私授权相关信息 |

### Methods

该组件没有对外暴露的方法。

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 按钮文本内容 |
