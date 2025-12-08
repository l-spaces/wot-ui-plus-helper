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

  { tag: "wd-action-sheet" },
  { tag: "wd-avatar" },
  { tag: "wd-avatar-group" },
  { tag: "wd-backtop" },
  { tag: "wd-badge" },
  { tag: "wd-button" },
  { tag: "wd-calendar" },
  { tag: "wd-calendar-view" },
  { tag: "wd-card" },
  { tag: "wd-cell" },
  { tag: "wd-cell-group" },
  { tag: "wd-checkbox" },
  { tag: "wd-checkbox-group" },
  { tag: "wd-circle" },
  { tag: "wd-code" },
  { tag: "wd-code-input" },
  { tag: "wd-col" },
  { tag: "wd-collapse" },
  { tag: "wd-collapse-item" },
  { tag: "wd-col-picker" },
  { tag: "wd-config-provider" },
  { tag: "wd-count-down" },
  { tag: "wd-count-to" },
  { tag: "wd-curtain" },
  { tag: "wd-date-strip" },
  { tag: "wd-datetime-picker" },
  { tag: "wd-datetime-picker-view" },
  { tag: "wd-divider" },
  { tag: "wd-drop-menu" },
  { tag: "wd-drop-menu-item" },
  { tag: "wd-fab" },
  { tag: "wd-floating-panel" },
  { tag: "wd-form" },
  { tag: "wd-form-item" },
  { tag: "wd-gap" },
  { tag: "wd-grid" },
  { tag: "wd-grid-item" },
  { tag: "wd-icon" },
  { tag: "wd-img" },
  { tag: "wd-img-cropper" },
  { tag: "wd-index-anchor" },
  { tag: "wd-index-bar" },
  { tag: "wd-input" },
  { tag: "wd-input-number" },
  { tag: "wd-keyboard" },
  { tag: "wd-layout" },
  { tag: "wd-lazy-load" },
  { tag: "wd-loading" },
  { tag: "wd-loading-page" },
  { tag: "wd-load-more" },
  { tag: "wd-message-box" },
  { tag: "wd-navbar" },
  { tag: "wd-navbar-capsule" },
  { tag: "wd-notice-bar" },
  { tag: "wd-notify" },
  { tag: "wd-number-keyboard" },
  { tag: "wd-overlay" },
  { tag: "wd-pagination" },
  { tag: "wd-password-input" },
  { tag: "wd-picker" },
  { tag: "wd-picker-view" },
  { tag: "wd-popover" },
  { tag: "wd-popup" },
  { tag: "wd-progress" },
  { tag: "wd-radio" },
  { tag: "wd-radio-group" },
  { tag: "wd-rate" },
  { tag: "wd-resize" },
  { tag: "wd-root-portal" },
  { tag: "wd-row" },
  { tag: "wd-search" },
  { tag: "wd-segmented" },
  { tag: "wd-select-picker" },
  { tag: "wd-sidebar" },
  { tag: "wd-sidebar-item" },
  { tag: "wd-signature" },
  { tag: "wd-skeleton" },
  { tag: "wd-slider" },
  { tag: "wd-slider-button" },
  { tag: "wd-sort-button" },
  { tag: "wd-status-tip" },
  { tag: "wd-step" },
  { tag: "wd-steps" },
  { tag: "wd-sticky" },
  { tag: "wd-sticky-box" },
  { tag: "wd-swipe-action" },
  { tag: "wd-swiper" },
  { tag: "wd-swiper-nav" },
  { tag: "wd-switch" },
  { tag: "wd-tab" },
  { tag: "wd-tabbar" },
  { tag: "wd-tabbar-item" },
  { tag: "wd-table" },
  { tag: "wd-table-col" },
  { tag: "wd-tabs" },
  { tag: "wd-tag" },
  { tag: "wd-text" },
  { tag: "wd-textarea" },
  { tag: "wd-toast" },
  { tag: "wd-tooltip" },
  { tag: "wd-tour" },
  { tag: "wd-transition" },
  { tag: "wd-tree" },
  { tag: "wd-upload" },
  { tag: "wd-use-count-down" },
  { tag: "wd-use-message" },
  { tag: "wd-use-notify" },
  { tag: "wd-use-toast" },
  { tag: "wd-use-upload" },
  { tag: "wd-video-preview" },
  { tag: "wd-waterfall" },
  { tag: "wd-watermark" }
];

// 默认触发字符
export const DEFAULT_TRIGGERS = ["<", " ", ":", '"', "'"];
