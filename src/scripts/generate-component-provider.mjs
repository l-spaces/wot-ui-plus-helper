#!/usr/bin/env node

/**
 * wot-ui-plus-helper VS Code 扩展 - 组件提供者生成脚本
 *
 * 此脚本用于自动生成新组件的提供者代码文件，包括补全提供者和悬停提供者类，
 * 并更新组件映射表，以便在VS Code中为该组件提供智能提示功能。
 *
 * 使用方法: npm run generate 组件名称
 * 例如: npm run generate wd-example
 */

// 导入Node.js内置模块
import fs from "fs"; // 文件系统模块，用于读写文件和目录操作
import path from "path"; // 路径模块，用于处理文件路径
import { fileURLToPath } from "url"; // URL工具模块，用于获取当前文件路径

// 获取当前文件的路径和目录
const __filename = fileURLToPath(import.meta.url); // 当前脚本文件的绝对路径
const __dirname = path.dirname(__filename); // 当前脚本所在目录的绝对路径

// 从命令行参数中获取要生成的组件名称
const componentName = process.argv[2];

// 检查是否提供了组件名称参数
if (!componentName) {
  console.error("请提供组件名称，例如: npm run generate wd-example");
  process.exit(1); // 参数缺失，终止程序运行
}

/**
 * 生成组件提供者代码
 *
 * @param {string} componentName 组件名称，格式为 wd-xxx
 * @returns {string} 生成的TypeScript代码字符串
 */
const generateProviderCode = (componentName) => {
  // 将组件名称转换为驼峰式类名（去掉wd-前缀，并将连字符后的首字母大写）
  const className = componentName
    .replace("wd-", "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join("");

  // 返回生成的组件提供者代码模板
  return `import * as vscode from 'vscode';
import ComponentMeta from '../schemas/${componentName}';
import { ComponentCompletionProvider, ComponentHoverProvider } from './../utils/index';

export class ${className}CompletionProvider extends ComponentCompletionProvider {
  protected componentName = '${componentName}';
  protected componentMeta = ComponentMeta;

  protected getTagSnippet(isKebab = true): vscode.SnippetString {
    return new vscode.SnippetString('${componentName}$0></${componentName}>');
  }
}

export class ${className}HoverProvider extends ComponentHoverProvider {
  protected componentMeta = ComponentMeta;
  protected componentName = '${componentName}';
}
`;
};

// 确保providers目录存在，如果不存在则创建
const providersDir = path.join(__dirname, "..", "providers");
if (!fs.existsSync(providersDir)) {
  fs.mkdirSync(providersDir);
}

// 生成组件提供者文件的完整路径
const filePath = path.join(providersDir, `${componentName}.ts`);

// 检查文件是否已存在，如果存在则不重复生成
if (fs.existsSync(filePath)) {
  console.error(`文件 ${filePath} 已存在`);
  process.exit(1); // 文件已存在，终止程序运行
}

// 将生成的代码写入文件
fs.writeFileSync(filePath, generateProviderCode(componentName));

// 更新组件映射表，将新组件添加到COMPONENT_MAP数组中
const componentMapPath = path.join(
  __dirname,
  "..",
  "utils",
  "component_map.ts"
);
let componentMapContent = fs.readFileSync(componentMapPath, "utf-8");

// 生成要添加到组件映射表的条目
const importEntry = `  { tag: '${componentName}', module: '../providers/${componentName}' },`;
// 用于匹配COMPONENT_MAP数组的正则表达式
const mapRegex =
  /(export const COMPONENT_MAP: ComponentConfig\[] = \[)([\s\S]*?)(\];)/;

// 检查组件是否已存在于映射表中
if (!componentMapContent.includes(`tag: '${componentName}'`)) {
  // 如果组件不存在，则添加到映射表中
  componentMapContent = componentMapContent.replace(
    mapRegex,
    (match, p1, p2, p3) => {
      const trimmed = p2.trim();
      if (trimmed) {
        // 如果数组不为空，在最后一个元素后添加新元素
        return `${p1}\n${p2.trim()},\n${importEntry}\n${p3}`;
      } else {
        // 如果数组为空，直接添加新元素
        return `${p1}\n${importEntry}\n${p3}`;
      }
    }
  );

  // 将更新后的内容写回文件
  fs.writeFileSync(componentMapPath, componentMapContent);
  console.log(`成功添加 ${componentName} 到组件映射`);
} else {
  // 如果组件已存在于映射表中，输出提示信息
  console.log(`${componentName} 已存在于组件映射中`);
}

// 输出生成成功的提示信息
console.log(`成功生成 ${filePath}`);
