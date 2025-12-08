# Avatar 头像

## 组件概述
头像组件用于展示用户或实体的形象，支持多种形式（图片、文字、图标）和样式，适用于用户信息展示、评论列表、联系人列表等场景。

### 详细功能描述
- 支持三种头像形式：图片头像、文字头像、图标头像
- 支持两种形状：圆形（circle）和方形（square）
- 支持自定义尺寸、背景色、文字颜色等样式
- 支持随机背景色功能
- 支持小程序open-data获取用户头像（微信、QQ、百度小程序）
- 支持性别图标显示（男/女）
- 支持等级图标显示
- 支持图片加载失败处理
- 支持点击事件

### 适用业务场景
- 用户信息展示
- 评论列表中的用户头像
- 联系人列表
- 团队成员展示
- 任何需要展示实体形象的场景

## 完整API参考

### Props属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| src | string | - | 否 | 头像图片路径(不能为相对路径) |
| shape | string | circle | 否 | 头像形状，可选值：circle(圆形) / square(方形) |
| size | string/number | 40 | 否 | 头像尺寸 |
| mode | string | scaleToFill | 否 | 裁剪模式，参考uni-app image组件的mode属性 |
| text | string | - | 否 | 显示的文字 |
| bgColor | string | #c0c4cc | 否 | 背景色 |
| color | string | #ffffff | 否 | 文字颜色 |
| fontSize | string/number | 18 | 否 | 文字大小 |
| icon | string | - | 否 | 显示的图标 |
| mpAvatar | boolean | false | 否 | 显示小程序头像，只对百度，微信，QQ小程序有效 |
| randomBgColor | boolean | false | 否 | 是否使用随机背景色 |
| defaultUrl | string | - | 否 | 加载失败的默认头像(组件有内置默认图片) |
| colorIndex | number | undefined | 否 | 随机背景色索引，取值0-19之间 |
| name | string | - | 否 | 组件标识符 |
| sexIcon | string | - | 否 | 右上角性别角标，可选值：male(男) / female(女) |
| sexBgColor | string | - | 否 | 右上角性别图标的背景颜色 |
| showLevel | boolean | false | 否 | 是否显示等级图标 |
| levelBgColor | string | - | 否 | 右下角等级图标背景颜色 |
| customStyle | string | - | 否 | 自定义根节点样式 |
| customClass | string | - | 否 | 自定义根节点样式类 |

### Events事件

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| click | 头像被点击时 | name: 组件标识符, event: 原生点击事件 |

### Methods方法

该组件没有对外暴露的方法。

### Slots插槽

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| default | - | 自定义头像内容，默认显示图片/文字/图标 |
