/**
 * wot-ui-plus-helper VS Code 扩展 - 工具函数集合
 * 
 * 此模块包含扩展中使用的通用工具函数、组件悬停提供者和诊断提供者基类，
 * 用于支持 wot-ui-plus 组件库的智能提示、文档悬停和代码诊断功能。
 */
import * as vscode from "vscode";

// ======================== 工具函数 ========================

/**
 * 转义正则表达式特殊字符
 * 
 * @param {string} str 需要转义的字符串
 * @returns {string} 转义后的安全字符串
 */
function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * 将驼峰式命名转换为短横线式命名
 * 
 * @param {string} str 驼峰式命名的字符串
 * @returns {string} 短横线式命名的字符串
 * @example
 * // 输入: "helloWorld"
 * // 输出: "hello-world"
 */
export function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * 将短横线式命名转换为驼峰式命名
 * 
 * @param {string} str 短横线式命名的字符串
 * @returns {string} 驼峰式命名的字符串
 * @example
 * // 输入: "hello-world"
 * // 输出: "helloWorld"
 */
export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * 判断光标是否在指定标签名上（支持驼峰和短横线式命名）
 * 
 * @param {vscode.TextDocument} document 当前文档对象
 * @param {vscode.Position} position 光标位置
 * @param {string} tagName 要检查的标签名
 * @returns {boolean} 如果光标在指定标签名上则返回 true，否则返回 false
 */
export function isOnTagName(
  document: vscode.TextDocument,
  position: vscode.Position,
  tagName: string
): boolean {
  const line = document.lineAt(position);
  const lineText = line.text;
  const cursorOffset = position.character;

  // 1. 向左查找 '<'，确定可能的标签开始位置
  let tagStart = -1;
  for (let i = cursorOffset; i >= 0; i--) {
    if (lineText[i] === "<") {
      tagStart = i;
      break;
    }
  }
  if (tagStart === -1) {return false;} // 未找到标签开始符号

  // 2. 同时匹配驼峰和短横线式标签名
  const kebabTagName = camelToKebab(tagName); // 转换为短横线式
  const tagRegex = new RegExp(
    `^<\\/?(${escapeRegExp(tagName)}|${escapeRegExp(kebabTagName)})`
  );

  const tagPrefix = lineText.substring(tagStart);
  const match = tagPrefix.match(tagRegex);

  if (!match) {return false;} // 未匹配到指定的标签名

  // 3. 计算标签名的实际位置范围
  const actualTagName = match[1]; // 实际匹配到的标签名（驼峰或短横线式）
  const actualTagStart = tagStart + match[0].indexOf(actualTagName); // 标签名实际开始位置
  const actualTagEnd = actualTagStart + actualTagName.length; // 标签名实际结束位置

  // 4. 检查光标是否在标签名范围内
  return cursorOffset >= actualTagStart && cursorOffset < actualTagEnd;
}

/**
 * 获取光标所在位置的属性信息及标签名（支持驼峰和短横线式命名）
 * 
 * @param {vscode.TextDocument} document 当前文档对象
 * @param {vscode.Position} position 光标位置
 * @returns {{attrName: string, tagName: string, isEvent: boolean, isDynamic: boolean} | null} 
 *          属性信息对象或 null（如果光标不在属性上）
 */
export function getAttributeInfoAtPosition(
  document: vscode.TextDocument,
  position: vscode.Position
): {
  attrName: string;
  tagName: string;
  isEvent: boolean;
  isDynamic: boolean;
} | null {
  /* ---------- 1. 找到标签开始、结束位置（支持跨行标签） ---------- */
  let openAngle = -1;
  // 向前查找最近的 '<' 符号
  for (let line = position.line; line >= 0; line--) {
    const txt = document.lineAt(line).text;
    const col = line === position.line ? position.character : txt.length - 1;
    for (let i = col; i >= 0; i--) {
      if (txt[i] === "<") {
        openAngle = document.offsetAt(new vscode.Position(line, i));
        break;
      }
    }
    if (openAngle !== -1) {break;}
  }
  if (openAngle === -1) {return null;} // 未找到标签开始符号

  let closeAngle = -1;
  // 向后查找最近的 '>' 符号
  for (
    let line = position.line, lineCount = document.lineCount;
    line < lineCount;
    line++
  ) {
    const txt = document.lineAt(line).text;
    const startCol = line === position.line ? position.character : 0;
    for (let i = startCol; i < txt.length; i++) {
      if (txt[i] === ">") {
        closeAngle = document.offsetAt(new vscode.Position(line, i)) + 1;
        break;
      }
    }
    if (closeAngle !== -1) {break;}
  }
  if (closeAngle === -1) {return null;} // 未找到标签闭合符号

  /* ---------- 2. 取出完整标签文本 ---------- */
  const tagRange = new vscode.Range(
    document.positionAt(openAngle),
    document.positionAt(closeAngle)
  );
  const tagContent = document.getText(tagRange); // 获取完整的标签内容（支持跨行）

  /* ---------- 3. 解析标签名和属性信息 ---------- */
  const tagNameMatch = tagContent.match(/^<([a-zA-Z0-9-]+)/);
  if (!tagNameMatch) {return null;}
  const tagName = tagNameMatch[1]; // 提取标签名

  // 计算光标在标签内容中的偏移量
  const cursorOffset = document.offsetAt(position) - openAngle;
  
  // 正则表达式：支持普通属性、v-bind动态属性、v-on/@事件绑定
  const attrRegex = 
    /(?:v-bind:|v-on:|@|:)?([a-zA-Z0-9-_.]+)(?:=("[^"]*"|'[^']*'|[^>\s]*))?/g;
  let match;

  // 遍历所有匹配的属性
  while ((match = attrRegex.exec(tagContent)) !== null) {
    const fullMatch = match[0];        // 完整匹配到的属性文本
    const rawAttrName = match[1];      // 原始属性名（不包含前缀）
    const attrName = rawAttrName;      // 保持原始格式用于匹配
    const attrStart = match.index;     // 属性在标签内容中的开始位置
    const attrEnd = attrStart + fullMatch.length; // 属性在标签内容中的结束位置

    // 检查光标是否在当前属性范围内
    if (cursorOffset >= attrStart && cursorOffset <= attrEnd) {
      return {
        attrName, // 保持原始格式的属性名
        tagName,  // 标签名
        // 判断是否为事件属性（以@或v-on:开头）
        isEvent: fullMatch.startsWith("@") || fullMatch.startsWith("v-on:"),
        // 判断是否为动态属性（以:或v-bind:开头）
        isDynamic: fullMatch.startsWith(":") || fullMatch.startsWith("v-bind:"),
      };
    }
  }
  return null; // 光标不在任何属性上
}

// ======================== 悬停提供者 ========================

/**
 * 通用组件悬停提供者基类
 * 
 * 为 wot-ui-plus 组件提供智能悬停提示功能，支持驼峰式和短横线式的属性和事件命名格式，
 * 可以显示组件文档、属性说明、事件说明和外部样式类说明。
 */
export abstract class ComponentHoverProvider implements vscode.HoverProvider {
  /**
   * 组件元数据信息
   * 包含组件的文档、属性、事件和外部样式类等信息
   */
  protected abstract componentMeta: any;
  
  /**
   * 组件名称
   * 如 'wd-button' 等 wot-ui-plus 组件的标签名
   */
  protected abstract componentName: string;

  /**
   * 提供组件的悬停信息
   * 
   * @param {vscode.TextDocument} document 当前文档对象
   * @param {vscode.Position} position 光标位置
   * @returns {vscode.ProviderResult<vscode.Hover>} 悬停信息对象或 undefined
   */
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.ProviderResult<vscode.Hover> {
    try {
      // 1. 检查是否在标签名上（支持驼峰和短横线式）
      const kebabComponentName = camelToKebab(this.componentName);
      if (
        isOnTagName(document, position, this.componentName) ||
        isOnTagName(document, position, kebabComponentName)
      ) {
        const markdown = new vscode.MarkdownString();
        markdown.isTrusted = true;
        markdown.supportHtml = true;
        markdown.appendMarkdown(this.componentMeta.documentation);
        return new vscode.Hover(markdown);
      }

      // 2. 检查是否在属性上（支持所有Vue写法）
      const attrInfo = getAttributeInfoAtPosition(document, position);

      // 修复组件名称匹配逻辑 - 支持多种标签名格式
      if (
        attrInfo &&
        (attrInfo.tagName === this.componentName.replace("wd-", "") ||
          attrInfo.tagName === kebabComponentName ||
          attrInfo.tagName === kebabComponentName.replace("wd-", ""))
      ) {
        // 处理外部样式类属性
        if (this.componentMeta.externalClasses) {
          // 查找匹配的外部样式类（支持驼峰和短横线式）
          const externalClass = this.componentMeta.externalClasses.find((ec: any) => 
            ec.name === attrInfo.attrName || 
            camelToKebab(ec.name) === attrInfo.attrName
          );
          
          if (externalClass) {
            const markdown = new vscode.MarkdownString();
            markdown.isTrusted = true;
            markdown.supportHtml = true;
            markdown.appendMarkdown("### 外部样式类\n\n");
            markdown.appendMarkdown(
              `${externalClass.name} ${externalClass.description || ''}\n\n`
            );
            markdown.appendMarkdown("**类型**: string\n\n");
            if (externalClass.version) {
              markdown.appendMarkdown(`**最低版本**: ${externalClass.version}\n\n`);
            }
            return new vscode.Hover(markdown);
          }
        }

        let prop: any, event: any;

        // 定义查找属性的辅助函数（同时匹配驼峰式和短横线式）
        const findProp = (name: string) =>
          this.componentMeta.props.find(
            (p: any) =>
              p.name === name ||
              camelToKebab(p.name) === name ||
              kebabToCamel(p.name) === name
          );

        // 定义查找事件的辅助函数（同时匹配驼峰式和短横线式）
        const findEvent = (name: string) =>
          this.componentMeta.events?.find(
            (e: any) =>
              e.name === name ||
              camelToKebab(e.name) === name ||
              kebabToCamel(e.name) === name
          );

        // 处理事件属性
        if (attrInfo.isEvent) {
          event = findEvent(attrInfo.attrName);
          if (!event) {
            // 尝试短横线式匹配
            const kebabName = camelToKebab(attrInfo.attrName);
            event = findEvent(kebabName);
          }

          if (!event) {
            // 尝试驼峰式匹配
            const camelName = kebabToCamel(attrInfo.attrName);
            event = findEvent(camelName);
          }

          if (event) {
            const markdown = new vscode.MarkdownString();
            markdown.isTrusted = true;
            markdown.supportHtml = true;

            markdown.appendMarkdown(
              `### ${attrInfo.isDynamic ? "动态事件" : "事件"} \`${
                event.name
              }\`\n\n`
            );
            markdown.appendMarkdown(`${event.description}\n\n`);
            markdown.appendMarkdown(`**类型**: 事件处理器\n\n`);

            if (event.arguments) {
              markdown.appendMarkdown(`**事件参数**: \n`);
              event.arguments.forEach((arg: any) => {
                markdown.appendMarkdown(
                  `- \`${arg.name}\`: ${arg.type} - ${arg.description}\n`
                );
              });
              markdown.appendMarkdown("\n");
            }

            return new vscode.Hover(markdown);
          }
        } else {
          // 处理普通属性
          prop = findProp(attrInfo.attrName);

          if (!prop) {
            // 尝试短横线式匹配
            const kebabName = camelToKebab(attrInfo.attrName);
            prop = findProp(kebabName);
          }

          if (!prop) {
            // 尝试驼峰式匹配
            const camelName = kebabToCamel(attrInfo.attrName);
            prop = findProp(camelName);
          }

          if (prop) {
            const markdown = new vscode.MarkdownString();
            markdown.isTrusted = true;
            markdown.supportHtml = true;

            markdown.appendMarkdown(
              `### ${attrInfo.isDynamic ? "动态属性" : "属性"} \`${
                prop.name
              }\`\n\n`
            );
            markdown.appendMarkdown(`${prop.description}\n\n`);
            markdown.appendMarkdown(`**类型**: ${prop.type}\n\n`);

            if (prop.values) {
              markdown.appendMarkdown(
                `**可选值**: ${prop.values.join(", ")}\n\n`
              );
            }

            if (prop.default) {
              markdown.appendMarkdown(`**默认值**: ${prop.default}\n\n`);
            }

            return new vscode.Hover(markdown);
          }
        }
      }

      return null;
    } catch (error) {
      console.error("Error in provideHover:", error);
      return null;
    }
  }
}

// ======================== 诊断提供者 ========================
/**
 * 通用组件诊断提供者基类（支持驼峰和短横线式属性）
 */
export abstract class ComponentDiagnosticProvider {
  protected abstract componentName: string;
  protected abstract componentMeta: any;
  protected diagnosticCollection!: vscode.DiagnosticCollection;

  constructor() {
    vscode.workspace.onDidChangeTextDocument((e) =>
      this.updateDiagnostics(e.document)
    );
  }

  protected initialize() {
    if (!this.diagnosticCollection) {
      this.diagnosticCollection = vscode.languages.createDiagnosticCollection(
        this.componentName
      );
    }
  }

  public updateDiagnostics(document: vscode.TextDocument) {
    if (document.languageId !== "html" && document.languageId !== "vue") {return;}

    this.initialize();

    const diagnostics: vscode.Diagnostic[] = [];
    const text = document.getText();
    const regex = this.getTagRegex();
    let match;

    while ((match = regex.exec(text))) {
      const startPos = document.positionAt(match.index);
      const endPos = document.positionAt(match.index + match[0].length);
      const range = new vscode.Range(startPos, endPos);

      this.checkAttributeValues(match[0], range, diagnostics);
      this.checkDuplicateAttributes(match[0], range, diagnostics);
      this.checkEventHandlers(match[0], range, diagnostics);
      this.checkBooleanAttributes(match[0], range, diagnostics);

      // 调用额外的诊断方法
      if (this.getAdditionalDiagnostics) {
        this.getAdditionalDiagnostics(match[0], range, diagnostics);
      }
    }

    this.diagnosticCollection.set(document.uri, diagnostics);
  }

  protected getTagRegex(): RegExp {
    const kebabComponentName = camelToKebab(this.componentName);
    return new RegExp(
      `<(${this.componentName}|${kebabComponentName})\\s+[^>]*>`,
      "g"
    );
  }

  protected checkAttributeValues(
    tag: string,
    range: vscode.Range,
    diagnostics: vscode.Diagnostic[]
  ) {
    this.componentMeta.props
      .filter((prop: any) => prop.type === "enum")
      .forEach((prop: any) => {
        // 同时检查驼峰式和短横线式
        const propNames = [prop.name, camelToKebab(prop.name)];

        propNames.forEach((propName) => {
          // 检查静态属性
          const staticAttrMatch = tag.match(
            new RegExp(`${propName}=["']([^"']+)["']`)
          );
          if (staticAttrMatch && !prop.values.includes(staticAttrMatch[1])) {
            diagnostics.push({
              severity: vscode.DiagnosticSeverity.Error,
              range: range,
              message: `无效的 ${propName} 属性值: ${staticAttrMatch[1]}`,
              source: "wot-ui-plus 提示助手",
            });
          }

          // 检查动态属性值（需要静态值的情况）
          const dynamicAttrMatch = tag.match(
            new RegExp(`:${propName}=["']([^"']+)["']`)
          );
          if (dynamicAttrMatch && !prop.values.includes(dynamicAttrMatch[1])) {
            diagnostics.push({
              severity: vscode.DiagnosticSeverity.Warning,
              range: range,
              message: `动态属性 :${propName} 使用了静态值，建议使用变量`,
              source: "wot-ui-plus 提示助手",
            });
          }
        });
      });
  }

  protected checkDuplicateAttributes(
    tag: string,
    range: vscode.Range,
    diagnostics: vscode.Diagnostic[]
  ) {
    const attrs = tag.match(/(?:v-bind:|v-on:|@|:)?([a-zA-Z0-9-_.]+)=?/g) || [];
    const attrMap = new Map<string, string>();

    attrs.forEach((attr) => {
      const match = attr.match(/(?:v-bind:|v-on:|@|:)?([a-zA-Z0-9-_.]+)/);
      if (!match) {return;}

      const rawName = match[1];
      // 标准化属性名（统一转为驼峰式）
      const normalizedName = kebabToCamel(rawName);

      if (attrMap.has(normalizedName)) {
        const originalRawName = attrMap.get(normalizedName);
        diagnostics.push({
          severity: vscode.DiagnosticSeverity.Warning,
          range: range,
          message: `重复的属性: ${originalRawName} 和 ${rawName} 都映射到 ${normalizedName}`,
          source: "wot-ui-plus 提示助手",
        });
      } else {
        attrMap.set(normalizedName, rawName);
      }
    });
  }

  protected checkEventHandlers(
    tag: string,
    range: vscode.Range,
    diagnostics: vscode.Diagnostic[]
  ) {
    this.componentMeta.events?.forEach((event: any) => {
      // 同时检查驼峰式和短横线式
      const eventNames = [event.name, camelToKebab(event.name)];

      eventNames.forEach((eventName) => {
        const eventRegex = new RegExp(`(@|v-on:)${eventName}=["']([^"']*)["']`);
        const match = tag.match(eventRegex);

        if (match) {
          const handler = match[2];
          // 简单检查处理器是否有效
          if (!handler.trim()) {
            diagnostics.push({
              severity: vscode.DiagnosticSeverity.Error,
              range: range,
              message: `事件 ${eventName} 缺少处理器`,
              source: "wot-ui-plus 提示助手",
            });
          } else if (
            !handler.includes("(") &&
            !handler.includes(")") &&
            !handler.startsWith("$event")
          ) {
            diagnostics.push({
              severity: vscode.DiagnosticSeverity.Warning,
              range: range,
              message: `事件处理器应包含括号: ${handler}()`,
              source: "wot-ui-plus 提示助手",
            });
          }
        }
      });
    });
  }

  protected checkBooleanAttributes(
    tag: string,
    range: vscode.Range,
    diagnostics: vscode.Diagnostic[]
  ) {
    this.componentMeta.props
      .filter((prop: any) => prop.type === "boolean")
      .forEach((prop: any) => {
        // 同时检查驼峰式和短横线式
        const propNames = [prop.name, camelToKebab(prop.name)];

        propNames.forEach((propName) => {
          // 检查静态布尔属性是否有值
          const staticAttrMatch = tag.match(
            new RegExp(`${propName}=["']([^"']*)["']`)
          );
          if (staticAttrMatch) {
            const value = staticAttrMatch[1];
            if (value && value !== "true" && value !== "false") {
              diagnostics.push({
                severity: vscode.DiagnosticSeverity.Warning,
                range: range,
                message: `布尔属性 ${propName} 应使用简写或动态绑定`,
                source: "wot-ui-plus 提示助手",
              });
            }
          }
        });
      });
  }

  protected abstract getAdditionalDiagnostics?(
    tag: string,
    range: vscode.Range,
    diagnostics: vscode.Diagnostic[]
  ): void;
}
