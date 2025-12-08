# Tour 引导

## 组件概述
Tour 是一种用于新用户引导的组件，它通过高亮页面中的特定元素并显示提示信息，引导用户了解产品的主要功能和操作流程。

### 详细功能描述
- 支持多步骤引导，可定义多个高亮元素和提示内容
- 自动计算高亮元素位置，并智能调整提示框位置
- 支持点击蒙版或按钮切换步骤
- 可自定义蒙版样式、高亮区域样式和提示框内容
- 支持上一步、下一步、跳过和完成等操作
- 提供丰富的事件回调，便于控制引导流程
- 支持自定义按钮文本和样式
- 支持动画效果和过渡

### 适用业务场景
- 新用户首次使用产品时的功能引导
- 产品更新后新增功能的引导提示
- 复杂操作流程的分步引导
- 重点功能的突出展示
- 降低用户学习成本，提高产品易用性

## 完整API参考

### Props

| 名称 | 类型 | 默认值 | 必填 | 描述 |
|------|------|--------|------|------|
| modelValue | boolean | false | 否 | 是否显示引导组件，使用 v-model 绑定 |
| steps | array | [] | 否 | 引导步骤列表，每个步骤包含 element（需要高亮的元素选择器）和 content（引导文字内容） |
| current | number | 0 | 否 | 当前引导步骤索引 |
| mask | boolean | true | 否 | 是否显示蒙版 |
| maskColor | string | 'rgba(0, 0, 0, 0.5)' | 否 | 蒙版颜色（支持 rgba 格式） |
| offset | number | 20 | 否 | 引导框与高亮元素之间的间距 |
| duration | number | 300 | 否 | 动画持续时间（毫秒） |
| borderRadius | number | 8 | 否 | 高亮区域的圆角大小 |
| padding | number | 8 | 否 | 高亮区域的内边距 |
| prevText | string | '上一步' | 否 | 上一步按钮文字 |
| nextText | string | '下一步' | 否 | 下一步按钮文字 |
| skipText | string | '跳过' | 否 | 跳过按钮文字 |
| finishText | string | '完成' | 否 | 完成按钮文字 |
| bottomSafetyOffset | number | 100 | 否 | 底部安全偏移量，用于滚动计算时确保元素周围有足够的空间 |
| topSafetyOffset | number | 0 | 否 | 顶部安全偏移量，用于滚动计算时确保元素周围有足够的空间 |
| customNav | boolean | false | 否 | 是否自定义顶部导航栏 |
| clickMaskNext | boolean | false | 否 | 点击蒙版是否可以切换到下一步 |
| highlightStyle | object | {} | 否 | 高亮区域样式 |
| zIndex | number | 999998 | 否 | 引导框的层级 |
| showTourButtons | boolean | true | 否 | 是否显示引导按钮 |
| customStyle | string | '' | 否 | 自定义根节点样式 |
| customClass | string | '' | 否 | 自定义根节点样式类 |

### Events

| 事件名 | 触发条件 | 参数说明 |
|--------|----------|----------|
| update:modelValue | 引导组件显示/隐藏状态变化时 | 新的状态值（boolean） |
| update:current | 当前引导步骤索引变化时 | 新的步骤索引（number） |
| change | 当前引导步骤变化时 | 新的步骤索引（number） |
| prev | 点击上一步按钮时 | 包含oldCurrent（旧索引）、current（新索引）、total（总步骤数）、isUp（是否向上）的对象 |
| next | 点击下一步按钮时 | 包含oldCurrent（旧索引）、current（新索引）、total（总步骤数）、isUp（是否向上）的对象 |
| finish | 点击完成按钮时 | 包含current（当前索引）、total（总步骤数）的对象 |
| skip | 点击跳过按钮时 | 包含current（当前索引）、total（总步骤数）的对象 |
| error | 无法找到指定的引导元素时 | 包含message（错误信息）、element（元素选择器）的对象 |

### Methods

| 方法名 | 参数 | 返回值 | 功能说明 |
|--------|------|--------|----------|
| handlePrev | 无 | 无 | 切换到上一步 |
| handleNext | 无 | 无 | 切换到下一步 |
| handleFinish | 无 | 无 | 完成引导 |
| handleSkip | 无 | 无 | 跳过引导 |

### Slots

| 插槽名 | 作用域变量 | 使用说明 |
|--------|------------|----------|
| highlight | elementInfo（高亮元素信息） | 自定义高亮区域样式和内容 |
| content | 无 | 自定义引导框内容 |
| prev | 无 | 自定义上一步按钮 |
| skip | 无 | 自定义跳过按钮 |
| next | 无 | 自定义下一步按钮 |
| finish | 无 | 自定义完成按钮 |

