# Form 表单组件


## 组件概述
Form 组件是一个表单容器组件，用于管理表单数据、表单验证规则以及验证状态。它与 FormItem 组件配合使用，可以实现复杂的表单验证逻辑，支持多种错误提示方式和自定义验证规则。

### 详细功能描述
- 支持表单数据的双向绑定
- 支持多种表单验证规则（必填、正则表达式、自定义验证函数）
- 支持异步验证
- 支持多种错误提示方式（toast、message、none）
- 支持部分字段验证
- 支持重置表单验证状态
- 支持输入时自动重置验证信息
- 支持合并子组件的验证规则

### 适用业务场景
- 用户注册表单
- 登录表单
- 数据提交表单
- 配置表单
- 搜索表单

## 完整API参考

### Props
| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| model | object | - | 是 | 表单数据对象 |
| rules | object | {} | 否 | 表单验证规则，格式为 { prop: [规则1, 规则2] } |
| resetOnChange | boolean | true | 否 | 是否在输入时重置表单校验信息 |
| errorType | string | message | 否 | 错误提示类型，可选值为 toast、message、none |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events
| 事件名 | 触发条件 | 参数说明 |
| --- | --- | --- |

### Methods
| 方法名 | 参数 | 返回值 | 功能说明 |
| --- | --- | --- | --- |
| validate | prop?: string / array | Promise<{ valid: boolean, errors: ErrorMessage[] }> | 表单校验，支持校验指定字段或字段数组 |
| reset | - | - | 重置表单项的验证提示 |

### Slots
| 插槽名 | 作用域变量 | 使用说明 |
| --- | --- | --- |
| default | - | 用于放置 wd-form-item 子组件 |

