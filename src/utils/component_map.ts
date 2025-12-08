/**
 * 组件配置接口
 * 
 * 用于定义 wot-ui-plus 组件库中的组件配置信息，包含组件的标签名、模块路径、
 * 触发补全的字符以及文档来源等信息。
 */
interface ComponentConfig {
  /**
   * 组件的标签名，例如：'wd-button'
   * 这是组件在模板中使用的标签名称
   */
  tag: string;

  /**
   * 可选，组件提供者模块的相对路径
   * 指向实现该组件智能提示功能的 TypeScript 模块
   */
  module?: string;

  /**
   * 可选，触发智能补全的字符数组
   * 定义用户输入哪些字符时应该触发该组件的代码补全
   */
  triggers?: string[];

  /**
   * 可选，文档来源文件名
   * 用于指定组件文档所在的 Markdown 文件名（不包含扩展名）
   */
  docSource?: string;
}

// 组件映射表
export const COMPONENT_MAP: ComponentConfig[] = [
  { tag: "u-action-sheet" },
  { tag: "u-album" },
  { tag: "u-alert" },
  { tag: "u-amount" },
  { tag: "u-area-picker" },
  { tag: "u-avatar" },
  { tag: "u-avatar-group", docSource: "avatar" },
  { tag: "u-back-top" },
  { tag: "u-badge" },
  { tag: "u-barcode" },
  { tag: "u-button" },
  { tag: "u-calendar" },
  { tag: "u-canvas" },
  { tag: "u-card" },
  { tag: "u-cascader" },
  { tag: "u-cell" },
  { tag: "u-cell-group", docSource: "cell" },
  { tag: "u-checkbox" },
  { tag: "u-checkbox-group", docSource: "checkbox" },
  { tag: "u-circle-progress" },
  { tag: "u-code" },
  { tag: "u-code-input" },
  { tag: "u-collapse" },
  { tag: "u-collapse-item", docSource: "collapse" },
  { tag: "u-color-picker" },
  { tag: "u-count-down" },
  { tag: "u-count-to" },
  { tag: "u-cropper" },
  { tag: "u-date-strip" },
  { tag: "u-datetime-picker" },
  { tag: "u-divider" },
  { tag: "u-draggable" },
  { tag: "u-dropdown" },
  { tag: "u-dropdown-item", docSource: "dropdown" },
  { tag: "u-ellipsis" },
  { tag: "u-empty" },
  { tag: "u-fab" },
  // { tag: "u-feedback" },
  { tag: "u-form" },
  { tag: "u-form-item", docSource: "form" },
  { tag: "u-gap" },
  { tag: "u-grid" },
  { tag: "u-grid-item", docSource: "grid" },
  { tag: "u-icon" },
  { tag: "u-image" },
  { tag: "u-index-list" },
  { tag: "u-index-anchor" , docSource: "index-list" },
  { tag: "u-index-item", docSource: "index-list" },
  { tag: "u-input" },
  { tag: "u-input-tag" },
  { tag: "u-keyboard" },
  { tag: "u-row", docSource: "layout" },
  { tag: "u-col" , docSource: "layout" },
  { tag: "u-lazy-load" },
  { tag: "u-line" },
  { tag: "u-line-progress" },
  { tag: "u-link" },
  { tag: "u-list" },
  { tag: "u-list-item" , docSource: "list" },
  { tag: "u-loading-icon" },
  { tag: "u-loading-page" },
  { tag: "u-load-more" },
  { tag: "u-markdown" },
  { tag: "u-modal" },
  { tag: "u-navbar" },
  { tag: "u-no-network" },
  { tag: "u-notice-bar" },
  { tag: "u-notify" },
  { tag: "u-number-box" },
  { tag: "u-overlay" },
  { tag: "u-pagination" },
  { tag: "u-paging" },
  { tag: "u-parse" },
  { tag: "u-pdf-viewer" },
  { tag: "u-picker" },
  { tag: "u-popover" },
  { tag: "u-popup" },
  { tag: "u-poster" },
  { tag: "u-qrcode" },
  { tag: "u-radio", docSource: "radio" },
  { tag: "u-radio-group", docSource: "radio" },
  { tag: "u-rate" },
  { tag: "u-read-more" },
  { tag: "u-scroll-list" },
  { tag: "u-search" },
  { tag: "u-section" },
  { tag: "u-select" },
  { tag: "u-sidebar" },
  { tag: "u-sidebar-item" , docSource: "sidebar" },
  { tag: "u-signature" },
  { tag: "u-skeleton" },
  { tag: "u-slider" },
  { tag: "u-slider-button" },
  { tag: "u-steps" },
  { tag: "u-steps-item" , docSource: "steps" },
  { tag: "u-sticky" },
  { tag: "u-subsection" },
  { tag: "u-swipe-action" },
  { tag: "u-swipe-action-item" , docSource: "swipe-action" },
  { tag: "u-swiper" },
  { tag: "u-switch" },
  { tag: "u-tabbar" },
  { tag: "u-tabbar-item" , docSource: "tabbar" },
  { tag: "u-table" },
  { tag: "u-table-column", docSource: "table" },
  { tag: "u-tabs" },
  { tag: "u-tabs-item", docSource: "tabs" },
  { tag: "u-tag" },
  { tag: "u-text" },
  { tag: "u-textarea" },
  { tag: "u-toast" },
  { tag: "u-tooltip" },
  { tag: "u-transition" },
  { tag: "u-tree" },
  { tag: "u-upload" },
  { tag: "u-waterfall" },
  { tag: "u-wx-auth" }
];

// 默认触发字符
export const DEFAULT_TRIGGERS = ["<", " ", ":", '"', "'"];
