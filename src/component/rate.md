# Rate 评分

## 组件概述
评分组件用于用户对商品、服务、内容等进行评分，通常用于电商商品评价、服务评价、内容评分等场景。wd-rate 组件提供了灵活的配置选项，支持完整评分和半星评分、自定义图标、颜色、大小、数量等功能。

### 详细功能描述
- 支持完整评分和半星评分
- 支持自定义评分最大值（默认为5）
- 支持只读模式
- 支持自定义图标大小和间距
- 支持自定义未选中和选中的图标颜色
- 支持自定义图标类名
- 支持禁用状态
- 支持分段颜色
- 支持再次点击清空评分
- 支持触摸滑动评分
- 支持双向绑定
- 支持 change 事件

### 适用业务场景
- 电商商品评价
- 服务质量评分
- 内容评分（文章、视频、音乐等）
- 应用商店评分
- 调查问卷评分
- 用户反馈评分

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| num | number | 5 | 否 | 评分最大值 |
| modelValue | string / number / null | null | 否 | 当前分数，使用v-model进行双向绑定 |
| readonly | boolean | false | 否 | 是否只读 |
| size | string | '16px' | 否 | 图标大小 |
| space | string | '4px' | 否 | 图标间距 |
| color | string | '#E8E8E8' | 否 | 未选中的图标颜色 |
| activeColor | string / array | 'linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)' | 否 | 选中的图标颜色，支持传颜色数组（用于分段颜色） |
| icon | string | 'star-filled' | 否 | 未选中的图标类名 |
| activeIcon | string | 'star-filled' | 否 | 选中的图标类名 |
| disabled | boolean | false | 否 | 是否禁用 |
| disabledColor | string | 'linear-gradient(315deg, rgba(177,177,177,1) 0%,rgba(199,199,199,1) 100%)' | 否 | 禁用的图标颜色 |
| allowHalf | boolean | false | 否 | 是否允许半选 |
| clearable | boolean | false | 否 | 当 clearable 属性设置为 true，再次点击相同的值时，可以将值重置为 0 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| update:modelValue | 评分值改变时 | value: number - 评分值 |
| change | 评分值改变时 | { value: number } - 评分值 |

### Methods

该组件没有对外暴露的方法。

### Slots

该组件没有定义插槽。
