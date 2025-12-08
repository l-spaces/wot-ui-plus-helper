/**
 * wot-ui-plus-helper VS Code 扩展 - 组件提供者注册模块
 * 
 * 此模块负责注册所有 wot-ui-plus 组件的智能补全和悬停提示功能，
 * 为开发者提供便捷的组件开发体验。
 */

// 导入 VSCode API 模块，用于实现代码补全和悬停提示等功能
import * as vscode from "vscode";
// 导入组件映射表，包含所有支持的组件配置信息
import { COMPONENT_MAP } from "../utils/component_map";
// 导入组件模式加载函数，用于加载组件的元数据
import { loadComponentSchema } from "../utils/schema-loader";
// 导入组件工厂提供的悬停和补全功能类
import {
  GenericComponentHoverProvider,      // 通用组件悬停提供者
  UnifiedComponentCompletionProvider, // 统一组件补全提供者
} from "../providers/component-factory";

/**
 * 注册所有 wot-ui-plus 组件的智能提示功能
 * 
 * @param context VS Code 扩展上下文，用于注册提供者和管理订阅生命周期
 * @returns Promise<vscode.Disposable[]> 注册的订阅列表，用于后续管理和清理
 */
export async function registerAll(context: vscode.ExtensionContext): Promise<vscode.Disposable[]> {
  // 存储注册的订阅，用于返回
  const subscriptions: vscode.Disposable[] = [];
  
  // 打印正在注册的组件数量信息
  console.log(`注册数量： ${COMPONENT_MAP.length} 个components`);

  try {
    // 1. 注册统一的组件补全提供者（处理所有组件的标签和属性补全）
    const unifiedProvider = new UnifiedComponentCompletionProvider();
    // 定义支持的文档选择器（Vue 和 HTML 文件）
    const selector: vscode.DocumentSelector = [
      { language: "vue", scheme: "file" },
      { language: "html", scheme: "file" },
    ];

    // 注册组件补全提供者，并指定触发补全的字符
    const completionProvider = vscode.languages.registerCompletionItemProvider(
      selector,
      unifiedProvider,
      "<", // 标签开始
      "\n", // 换行
      "\t", // 制表符
      " ", // 空格
      ":", // 冒号
      "@"  // 事件前缀
    );
    
    subscriptions.push(completionProvider);

    console.log("读取组件文件完成");

    // 2. 为每个组件注册单独的悬停提供者（提供组件文档信息）
    for (const { tag, docSource } of COMPONENT_MAP) {
      try {
        // 提取组件名称（去掉 up- 或 u- 前缀）
        const componentName = tag.replace("u-", "");
        // 加载组件的元数据（包含属性、事件等信息）
        const componentMeta = loadComponentSchema(componentName, docSource);
        // 创建组件悬停提供者实例
        const hover = new GenericComponentHoverProvider(tag, componentMeta);
        // 定义支持的文档选择器
        const selector: vscode.DocumentSelector = [
          { language: "vue", scheme: "file" },
          { language: "html", scheme: "file" },
        ];

        // 注册组件悬停提供者
        const hoverProvider = vscode.languages.registerHoverProvider(selector, hover);
        subscriptions.push(hoverProvider);
       // console.log(`注册悬停提示：${tag}`);
      } catch (error) {
        // 单个组件注册失败不应影响其他组件
        console.error(`注册失败组件 ${tag}:`, error);
      }
    }

    console.log(`完成组件注册`);
  } catch (error) {
    // 捕获统一补全提供者注册失败的异常
    console.error("Failed to register unified completion provider:", error);
  }
  
  return subscriptions;
}
