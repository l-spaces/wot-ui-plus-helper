/**
 * wot-ui-plus-helper VS Code 扩展的主入口文件
 * 负责扩展的激活和停用生命周期管理，以及组件相关功能的注册
 */
import * as vscode from 'vscode';
import { registerAll } from './providers/index';

// 全局状态变量：用于存储智能提示的启用状态
let isIntellisenseEnabled = true;
// 存储提供者订阅，方便管理和清理
let providerSubscriptions: vscode.Disposable[] = [];

/**
 * 注册所有组件提供者
 * @param context VS Code 扩展上下文
 */
async function registerComponents(context: vscode.ExtensionContext) {
  // 清除现有订阅
  providerSubscriptions.forEach(sub => sub.dispose());
  providerSubscriptions = [];
  
  if (isIntellisenseEnabled) {
    try {
      // 调用统一的注册函数，注册所有组件提供者
      const subscriptions = await registerAll(context);
      if (subscriptions) {
        providerSubscriptions = subscriptions;
        // 将订阅添加到上下文，由VSCode管理生命周期
        subscriptions.forEach(sub => context.subscriptions.push(sub));
      }
      console.log('✅ wot-ui-plus 提示助手 组件注册完成!');
    } catch (error) {
      console.error('❌ wot-ui-plus 提示助手 组件注册失败:', error);
    }
  } else {
    console.log('ℹ️ wot-ui-plus 提示助手 智能提示已关闭');
  }
}

/**
 * 注册命令
 * @param context VS Code 扩展上下文
 */
function registerCommands(context: vscode.ExtensionContext) {
  // 注册切换智能提示命令
  context.subscriptions.push(
    vscode.commands.registerCommand('wot-ui-plus-helper.toggleIntellisense', async () => {
      isIntellisenseEnabled = !isIntellisenseEnabled;
      
      // 重新注册组件
      await registerComponents(context);
      
      // 显示状态通知
      const statusText = isIntellisenseEnabled ? '已开启' : '已关闭';
      vscode.window.showInformationMessage(`wot-ui-plus 智能提示功能 ${statusText}`);
      console.log(`📢 wot-ui-plus 智能提示功能 ${statusText}`);
    })
  );
}

/**
 * VS Code 扩展激活函数
 * 当扩展被激活时（首次加载扩展或编辑器启动时）调用
 * @param context VS Code 扩展上下文，包含扩展的订阅、存储等功能
 * @returns Promise<void> 激活过程的异步结果
 */
export async function activate(context: vscode.ExtensionContext) {
  // 记录扩展激活日志
  console.log('🚀 wot-ui-plus 提示助手 已激活!');
  
  // 注册命令
  registerCommands(context);
  
  // 开始注册组件相关功能
  console.log('正在注册组件...');
  await registerComponents(context);
}

/**
 * VS Code 扩展停用函数
 * 当扩展被停用时（编辑器关闭或手动禁用扩展时）调用
 * @returns Promise<void> 停用过程的异步结果
 */
export async function deactivate() {
  // 清理所有订阅资源
  providerSubscriptions.forEach(sub => sub.dispose());
  
  // 记录扩展停用日志
  console.log('🚫 wot-ui-plus 提示助手 已停用!');
}
