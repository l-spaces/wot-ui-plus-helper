import * as fs from "fs";
import * as path from "path";
import { camelToKebab, kebabToCamel } from "./index";

/**
 * wot-ui-plus-helper VS Code 扩展 - Markdown 文档解析器模块
 * 
 * 此模块负责解析 wot-ui-plus 组件的 Markdown 文档，提取组件的属性、事件、插槽、
 * 外部样式类和数据结构等信息，为智能提示、文档悬停等功能提供数据支持。
 */

/**
 * 组件信息数据结构接口
 * 
 * 定义从 Markdown 文档中提取的组件完整信息，包括名称、属性、事件、插槽等。
 */
interface ComponentInfo {
  /**
   * 组件名称，包含 wd- 前缀
   */
  name: string;
  
  /**
   * 组件属性数组
   */
  props: Array<{
    /** 属性名称 */
    name: string;
    /** 属性类型 */
    type: string;
    /** 可选值（当类型为 enum 时） */
    values?: string[];
    /** 属性描述 */
    description: string;
    /** 默认值 */
    default?: string;
    /** 最低版本要求 */
    version?: string;
  }>;
  
  /**
   * 组件事件数组
   */
  events: Array<{
    /** 事件名称 */
    name: string;
    /** 事件描述 */
    description: string;
    /** 最低版本要求 */
    version?: string;
  }>;
  /**
   * 组件方法
   */
  methods: Array<{
    /** 事件名称 */
    name: string;
    /** 事件描述 */
    description: string;
    /** 最低版本要求 */
    version?: string;
  }>;

  /**
   * 组件插槽数组（可选）
   */
  slots?: Array<{
    /** 插槽名称 */
    name: string;
    /** 插槽描述 */
    description: string;
    /** 最低版本要求 */
    version?: string;
  }>;
  
  /**
   * 组件外部样式类数组（可选）
   */
  externalClasses?: Array<{
    /** 样式类名称 */
    name: string;
    /** 样式类描述 */
    description: string;
    /** 最低版本要求 */
    version?: string;
  }>;
  
  /**
   * 组件相关数据结构数组（可选）
   */
  dataStructures?: Array<{
    /** 数据结构名称 */
    name: string;
    /** 数据结构字段 */
    fields: Array<{
      /** 字段名称 */
      name: string;
      /** 字段类型 */
      type: string;
      /** 字段描述 */
      description: string;
      /** 最低版本要求 */
      version?: string;
    }>;
  }>;
  
  /**
   * 完整的组件文档内容
   */
  documentation: string;
}

/**
 * 处理组件属性，特别是v-model相关属性
 * 
 * 此函数将从Markdown表格中提取的原始属性数据转换为结构化的属性对象数组，
 * 特别处理v-model相关属性的多种形式（v-model、modelValue、model-value）
 * 
 * @param prop 原始属性数据数组，包含属性名、描述、类型、可选值、默认值、版本信息
 * @returns 处理后的组件属性数组，确保v-model相关属性的所有形式都被包含
 */
function processComponentProp(prop: string[]): Array<{
  name: string;
  type: string;
  values?: string[];
  description: string;
  default?: string;
  version?: string;
}> {
  // 解析属性类型，默认为string
  let type: string = prop[2]?.toLowerCase() || "string";
  let values: string[] | undefined;

  // 如果类型是string，但属性值包含/分隔符，识别为枚举类型并解析可选值
  if (
    type === "string" &&
    prop[3] &&
    prop[3] !== "-" &&
    prop[3].includes("/")
  ) {
    values = prop[3]
      .split("/")
      .map((v) => v.trim())
      .filter((v) => v !== "-");
    if (values.length > 0) {
      type = "enum";
    }
  }

  const result: Array<{
    name: string;
    type: string;
    values?: string[];
    description: string;
    default?: string;
    version?: string;
  }> = [];

  // 处理复合属性名，如 'v-model / modelValue' 或 'modelValue / v-model' 等
  const propNames = prop[0]
    .split("/")
    .map((name) => name.trim().replace(/`/g, ""));
  const normalizedNames = propNames.map((name) => {
    // 标准化属性名，移除反引号
    return name.replace(/`/g, "");
  });

  // 将所有属性名作为独立属性添加到结果数组
  normalizedNames.forEach((name, index) => {
    result.push({
      name: name,
      type,
      values,
      description: 
        index === 0
          ? prop[1] || ""
          : `${prop[1] || ""}\n\n> 该属性支持 \`v-model\` 双向绑定`,
      default: prop[4] && prop[4] !== "-" ? prop[4] : undefined,
      version: prop[5] && prop[5] !== "-" ? prop[5] : undefined,
    });
  });

  // 检查是否包含v-model相关属性名
  const hasVModel = normalizedNames.some(
    (name) =>
      name === "v-model" || name === "modelValue" || name === "model-value"
  );

  // 如果包含v-model相关属性，确保三种形式都存在（v-model、model-value、modelValue）
  if (hasVModel) {
    const existingNames = new Set(normalizedNames);
    const vModelForms = [
      {
        name: "v-model",
        description: `${prop[1] || ""}\n\n> 该属性支持 \`v-model\` 双向绑定`,
      },
      {
        name: "model-value",
        description: `${prop[1] || ""}\n\n> 该属性支持 \`v-model\` 双向绑定`,
      },
      {
        name: "modelValue",
        description: `${prop[1] || ""}\n\n> 该属性支持 \`v-model\` 双向绑定`,
      },
    ];

    // 确保所有v-model形式都存在
    vModelForms.forEach((form) => {
      if (!existingNames.has(form.name)) {
        result.push({
          name: form.name,
          type,
          values,
          description: form.description,
          default: prop[4] && prop[4] !== "-" ? prop[4] : undefined,
          version: prop[5] && prop[5] !== "-" ? prop[5] : undefined,
        });
      }
    });
  }
  return result;
}

/**
 * 解析 Markdown 文档并提取组件信息
 * 
 * 此函数是模块的核心功能，负责从 Markdown 文档中提取组件的属性、事件、插槽、
 * 外部样式类和数据结构等信息，并将其组织成结构化的 ComponentInfo 对象。
 * 支持处理子组件和主组件两种情况。
 * 
 * @param componentName 组件名称（不包含wd-前缀）
 * @param docSource 文档来源组件名称（可选），用于处理子组件情况
 * @returns 组件信息对象，包含完整的组件元数据；若解析失败则返回null
 */
export function parseComponentMarkdown(
  componentName: string,
  docSource?: string
): ComponentInfo | null {
  try {
    // 来源文档
    const actualComponentName = docSource || componentName;

    // 查找文档文件
    const possiblePaths = [
      // 直接使用组件名路径
      path.resolve(__dirname, `./src/component/${actualComponentName}.md`),
      // 使用短横线式命名路径
      path.resolve(__dirname, `./src/component/${camelToKebab(actualComponentName)}.md`),
      // 使用驼峰式命名路径
      path.resolve(__dirname, `./src/component/${kebabToCamel(actualComponentName)}.md`),
    ];

    let docPath = "";
    // 遍历所有可能的路径，找到存在的文档文件
    for (const possiblePath of possiblePaths) {
      if (fs.existsSync(possiblePath)) {
        docPath = possiblePath;
        break;
      }
    }

    // 如果找不到文档文件，输出警告并返回null
    if (!docPath) {
      console.warn(`文档文件不存在，尝试路径: ${possiblePaths.join(", ")}`);
      return null;
    }

    // 读取文档内容
    const content = fs.readFileSync(docPath, "utf-8");

    // 子组件特殊处理逻辑
    if (docSource) {
      // 通用处理子组件情况，如 wd-table-item 从 table.md 中提取 TableColumn 相关信息
      // 将组件名从 kebab-case 转换为 PascalCase 用于匹配标题
      // 提取子组件 Props 表格
      const props = extractTableSection(content, "Props", componentName);
      const methods = extractTableSection(content, "Methods", componentName).concat(
        extractTableSection(content, "Method")
      );
      // 提取子组件 Slot 表格（同时处理 Slot 和 Slots 两种可能的标题）
      const slots = extractTableSection(content, "Slot", componentName).concat(
        extractTableSection(content, "Slots", componentName)
      );
      // 提取子组件 Events 表格
      const events = extractTableSection(content, "Event", componentName).concat(
        extractTableSection(content, "Events")
      );
      // 提取子组件外部样式类表格
      const externalClasses = extractTableSection(
        content,
        "外部样式类",
        componentName
      );
      // 提取自定义数据结构表格（如 Action 数据结构、Panel 数据结构等）
      const dataStructures = extractDataStructures(content);
      
      // 返回子组件信息对象
      return {
        name: `wd-${componentName}`,
        // 处理组件属性，确保包含v-model的所有形式
        props: props.reduce(
          (acc, prop) => {
            return acc.concat(processComponentProp(prop));
          },
          [] as Array<{
            name: string;
            type: string;
            values?: string[];
            description: string;
            default?: string;
            version?: string;
          }>
        ),
        // 转换事件数据结构
        events: events.map((event) => ({
          name: event[0],
          description: event[1] || "",
          version: event[3] && event[3] !== "-" ? event[3] : undefined,
        })),
        methods: methods.map((event) => ({
          name: event[0],
          description: event[1] || "",
          version: event[3] && event[3] !== "-" ? event[3] : undefined,
        })),
        // 转换插槽数据结构（如果存在）
        slots:
          slots.length > 0
            ? slots.map((slot) => ({
                name: slot[0],
                description: slot[1] || "",
                version: slot[2] && slot[2] !== "-" ? slot[2] : undefined,
              }))
            : undefined,
        // 转换外部样式类数据结构（如果存在）
        externalClasses:
          externalClasses.length > 0
            ? externalClasses.map((externalClass) => ({
                name: externalClass[0],
                description: externalClass[1] || "",
                version:
                  externalClass[2] && externalClass[2] !== "-"
                    ? externalClass[2]
                    : undefined,
              }))
            : undefined,
        // 添加数据结构信息（如果存在）
        dataStructures: dataStructures.length > 0 ? dataStructures : undefined,
        // 保留完整文档内容
        documentation: content,
      };
    }

    // 主组件处理逻辑
    // 提取 Props 表格
    const props = extractTableSection(content, "Props");
    // 提取 Events 表格
    const events = extractTableSection(content, "Event").concat(
      extractTableSection(content, "Events")
    );
    // 提取 Slots 表格（同时处理 Slot 和 Slots 两种可能的标题）
    const slots = extractTableSection(content, "Slot").concat(
      extractTableSection(content, "Slots")
    );
    const methods = extractTableSection(content, "Methods").concat(
      extractTableSection(content, "Method")
    );
    // 提取外部样式类表格
    const externalClasses = extractTableSection(content, "外部样式类");
    // 提取自定义数据结构表格
    const dataStructures = extractDataStructures(content);
    
    // 返回主组件信息对象
    return {
      name: `wd-${componentName}`,
      // 处理组件属性，确保包含v-model的所有形式
      props: props.reduce(
        (acc, prop) => {
          return acc.concat(processComponentProp(prop));
        },
        [] as Array<{
          name: string;
          type: string;
          values?: string[];
          description: string;
          default?: string;
          version?: string;
        }>
      ),
      // 转换事件数据结构
      events: events.map((event) => ({
        name: event[0],
        description: event[1] || "",
        version: event[3] && event[3] !== "-" ? event[3] : undefined,
      })),
      methods: methods.map((event) => ({
        name: event[0],
        description: event[1] || "",
        version: event[3] && event[3] !== "-" ? event[3] : undefined,
      })),
      // 转换插槽数据结构（如果存在）
      slots:
        slots.length > 0
          ? slots.map((slot) => ({
              name: slot[0],
              description: slot[1] || "",
              version: slot[2] && slot[2] !== "-" ? slot[2] : undefined,
            }))
          : undefined,
      // 转换外部样式类数据结构（如果存在）
      externalClasses:
        externalClasses.length > 0
          ? externalClasses.map((externalClass) => ({
              name: externalClass[0],
              description: externalClass[1] || "",
              version:
                externalClass[2] && externalClass[2] !== "-"
                  ? externalClass[2]
                  : undefined,
            }))
          : undefined,
      // 添加数据结构信息（如果存在）
      dataStructures: dataStructures.length > 0 ? dataStructures : undefined,
      // 保留完整文档内容
      documentation: content,
    };
  } catch (error) {
    console.error(`解析文档文件失败: ${componentName}`, error);
    return null;
  }
}

/**
 * 从 Markdown 内容中提取指定标题下的表格内容
 * 
 * 此函数采用三种递进的匹配策略，从 Markdown 文档中提取特定标题下的表格数据，
 * 主要用于提取组件的 Props、Events、Slots 等信息表格。支持子组件和主组件的
 * 不同匹配模式。
 * 
 * @param content Markdown 全文内容
 * @param sectionTitle 段落标题，如 "Props"、"Events"、"外部样式类"等
 * @param componentName 组件短横线名（可选），用于子组件匹配
 * @returns 表格数据二维数组，每行代表表格中的一行数据
 */
function extractTableSection(
  content: string,
  sectionTitle: string,
  componentName?: string
): string[][] {
  // 正则表达式转义函数，用于转义特殊字符
  const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  /**
   * 从指定位置开始提取表格内容的内部函数
   * 
   * @param src Markdown 内容
   * @param from 开始提取的位置
   * @returns 提取的表格数据数组
   */
  const sliceTable = (src: string, from: number): string[][] => {
    // 查找表格结束位置（两个连续换行符或标题标记##/###）
    const endRegex = /\n\n|\n\s*#{2,3}\s*/g;
    endRegex.lastIndex = from;
    const match = endRegex.exec(src);
    const end = match ? match.index : -1;
    // 截取表格部分内容
    let raw = src.substring(from, end === -1 ? src.length : end);
    
    // 移除HTML标签，保留标签内的文本内容
    raw = raw.replace(/<[^>]+>/g, '');
    
    // 分割行并过滤空行
    const lines = raw.split('\n').filter(l => l.trim());
    // 表格至少需要3行（表头、分隔线、数据行）
    if (lines.length < 3) {return [];}
    
    // 修复：只过滤掉完全不包含'|'的行，但保留只包含'|'和格式符号的分隔行
    const validLines = lines.filter(l => l.includes('|'));
    if (validLines.length < 3) {return [];}
    
    // 提取数据行（跳过表头和分隔线），并解析每个单元格内容
    return validLines.slice(2).map(line =>
      line.split('|')
          .map(cell => cell.trim())
          .filter((_, i, arr) => i > 0 && i < arr.length - 1) // 过滤首尾的空单元格
    ).filter(row => row.length > 0); // 过滤无效行
  };

  /* ===== 1.  "## PascalCase" ===== */
  if (componentName) {
    // 将组件名从 kebab-case 转换为 PascalCase 用于匹配标题
    const pascal = componentName
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("");
    // 构建精确匹配的正则表达式
    const exactReg = new RegExp(
      `(?:^|\\n)#{2,3}\\s*${pascal}\\s+${escape(sectionTitle)}\\s*$`,
      "im" // 忽略大小写，多行匹配
    );
    const m = exactReg.exec(content);
    if (m) {
      // 查找表格开始的位置（第一个|符号）
      const pipe = content.indexOf("|", m.index + m[0].length);
      if (pipe !== -1) {return sliceTable(content, pipe);}
    }
  }

  /* ===== 1.  "## Pascal-Case" ===== */
  if (componentName) {
    // 将组件名从 kebab-case 转换为 PascalCase
    const pascal = componentName;
    // 构建模糊匹配的正则表达式（允许组件名前后有其他字符）
    const fuzzyReg = new RegExp(
      `(?:^|\\n)#{2,3}\\s*\\w*${pascal}\\w*\\s+${escape(sectionTitle)}\\s*$`,
      "im"
    );
    const m = fuzzyReg.exec(content);
    if (m) {
      const pipe = content.indexOf("|", m.index + m[0].length);
      if (pipe !== -1) {return sliceTable(content, pipe);}
    }
  }

  /* ===== 3. 通用回落：纯 "## Attributes" ===== */
  // 如果前面两种匹配都失败，尝试匹配通用的标题格式
  const normalReg = new RegExp(
     `(?:^|\\n)#{2,3}\\s*${escape(sectionTitle)}\\s*$`,
    "im"
  );
  const m = normalReg.exec(content);
  if (m) {
    const pipe = content.indexOf("|", m.index + m[0].length);
    if (pipe !== -1) {return sliceTable(content, pipe);}
  }

  // 如果所有匹配都失败，返回空数组
  return [];
}

/**
 * 提取自定义数据结构信息
 * 
 * 此函数从 Markdown 文档中提取所有标记为 "xxx 数据结构" 的部分，解析其中的表格，
 * 并将其转换为结构化的数据结构对象数组。这些数据结构通常用于描述组件的复杂参数类型。
 * 
 * @param content Markdown 文档内容
 * @returns 数据结构数组，每个元素包含结构名称和字段列表
 */
function extractDataStructures(content: string): Array<{
  name: string;
  fields: Array<{
    name: string;
    type: string;
    description: string;
    version?: string;
  }>;
}> {
  // 初始化数据结构数组
  const dataStructures: Array<{
    name: string;
    fields: Array<{
      name: string;
      type: string;
      description: string;
      version?: string;
    }>;
  }> = [];

  // 查找所有 "xxx 数据结构" 标题的正则表达式
  // 匹配 ## 标题，捕获数据结构名称，并捕获到下一个标题或文档结束前的所有内容
  const dataStructureRegex = 
    /\n## (.*?数据结构)\n\n([\s\S]*?)(?=\n## |\n### |\n\[|\Z)/g;
  let match;

  // 遍历所有匹配的 "xxx 数据结构" 部分
  while ((match = dataStructureRegex.exec(content)) !== null) {
    const structureName = match[1].trim();
    const tableContent = match[2];

    // 解析数据结构表格
    const lines = tableContent.split("\n").filter((line) => line.trim() !== "");
    // 表格至少需要3行（表头、分隔线、数据行）
    if (lines.length >= 3) {
      // 移除表头和分隔线，只保留数据行
      const dataLines = lines.slice(2);

      // 解析每行数据为字段对象
      const fields = dataLines
        .map((line) => {
          // 分割单元格并清理内容
          const cells = line
            .split("|")
            .map((cell) => cell.trim())
            .filter((cell) => cell);
          // 确保至少有名称、描述和类型三个字段
          if (cells.length >= 3) {
            return {
              name: cells[0],         // 字段名称
              type: cells[2],         // 字段类型
              description: cells[1] || "",  // 字段描述
              version: cells[3] && cells[3] !== "-" ? cells[3] : undefined,  // 版本信息（如果有）
            };
          }
          return null;  // 跳过无效行
        })
        .filter((field) => field !== null) as Array<{
        name: string;
        type: string;
        description: string;
        version?: string;
      }>;

      // 添加到数据结构数组
      dataStructures.push({
        name: structureName,
        fields,
      });
    }
  }

  return dataStructures;
}

/**
 * 同步读取组件文档内容
 * 
 * 此函数以同步方式读取指定组件的 Markdown 文档文件，支持子组件文档查找。
 * 当需要立即获取文档内容且不希望处理异步操作时使用。
 * 
 * @param componentName 组件名称（不包含wd-前缀）
 * @param docSource 文档来源组件名称（可选），用于子组件文档查找
 * @returns 组件文档内容字符串；若文件不存在或读取失败则返回空字符串
 */
export function loadComponentDoc(
  componentName: string,
  docSource?: string
): string {
  try {
    // 如果指定了文档来源，则使用来源文档
    const actualComponentName = docSource || componentName;

    // 尝试多种路径查找文档文件
    const possiblePaths = [
      // path.resolve(__dirname, `../src/component/${actualComponentName}.md`), // 开发环境
      path.resolve(__dirname, `./src/component/${actualComponentName}.md`), // 打包后运行环境
    ];

    let docPath = "";
    // 遍历所有可能的路径，找到存在的文档文件
    for (const possiblePath of possiblePaths) {
      if (fs.existsSync(possiblePath)) {
        docPath = possiblePath;
        break;
      }
    }

    // 如果找不到文档文件，输出警告并返回空字符串
    if (!docPath) {
      console.warn(`文档文件不存在，尝试路径: ${possiblePaths.join(", ")}`);
      return "";
    }

    // 读取文档内容
    const content = fs.readFileSync(docPath, "utf-8");
    console.log(`加载文档: ${componentName}`);
    return content;
  } catch (error) {
    console.error(`读取文档文件失败: ${componentName}`, error);
    return "";
  }
}

/**
 * 异步读取组件文档内容
 * 
 * 此函数以异步方式读取指定组件的 Markdown 文档文件，支持子组件文档查找。
 * 适用于不希望阻塞主线程的场景。
 * 
 * @param componentName 组件名称（不包含wd-前缀）
 * @param docSource 文档来源组件名称（可选），用于子组件文档查找
 * @returns Promise<string>，解析为组件文档内容字符串；若文件不存在或读取失败则解析为空字符串
 */
export async function loadComponentDocAsync(
  componentName: string,
  docSource?: string
): Promise<string> {
  try {
    // 如果指定了文档来源，则使用来源文档
    const actualComponentName = docSource || componentName;

    // 尝试多种路径查找文档文件
    const possiblePaths = [
      // path.resolve(__dirname, `../src/component/${actualComponentName}.md`), // 开发环境
      path.resolve(__dirname, `./src/component/${actualComponentName}.md`), // 打包后运行环境
    ];

    let docPath = "";
    // 遍历所有可能的路径，找到存在的文档文件
    for (const possiblePath of possiblePaths) {
      if (fs.existsSync(possiblePath)) {
        docPath = possiblePath;
        break;
      }
    }

    // 如果找不到文档文件，输出警告并返回空字符串
    if (!docPath) {
      console.warn(`文档文件不存在，尝试路径: ${possiblePaths.join(", ")}`);
      return "";
    }

    // 使用 Promise 方式异步读取文件
    const content = await fs.promises.readFile(docPath, "utf-8");
    return content;
  } catch (error) {
    console.error(`读取文档文件失败: ${componentName}`, error);
    return "";
  }
}
