import { parseComponentMarkdown, loadComponentDoc } from './markdown-parser';

/**
 * 组件元数据接口定义
 * 用于描述wot-ui-plus组件的完整信息，包括属性、事件、插槽、外部样式类和数据结构等
 */
export interface ComponentMeta {
  /** 组件名称 */
  name: string;
  /** 组件属性列表 */
  props: Array<{
    /** 属性名称 */
    name: string;
    /** 属性类型 */
    type: 'enum' | 'boolean' | 'string' | 'number';
    /** 枚举类型的可选值（仅当type为enum时有效） */
    values?: string[];
    /** 属性描述 */
    description: string;
    /** 属性默认值 */
    default?: string;
    /** 属性支持的版本 */
    version?: string;
  }>;
  /** 组件事件列表 */
  events: Array<{ 
    /** 事件名称 */
    name: string; 
    /** 事件描述 */
    description: string;
    /** 事件支持的版本 */
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
  /** 组件插槽列表（可选） */
  slots?: Array<{ 
    /** 插槽名称 */
    name: string; 
    /** 插槽描述 */
    description: string;
    /** 插槽支持的版本 */
    version?: string;
  }>;
  /** 组件外部样式类列表（可选） */
  externalClasses?: Array<{ 
    /** 外部样式类名称 */
    name: string; 
    /** 外部样式类描述 */
    description: string;
    /** 外部样式类支持的版本 */
    version?: string;
  }>;
  /** 组件相关的数据结构定义列表（可选） */
  dataStructures?: Array<{
    /** 数据结构名称 */
    name: string;
    /** 数据结构字段列表 */
    fields: Array<{
      /** 字段名称 */
      name: string;
      /** 字段类型 */
      type: string;
      /** 字段描述 */
      description: string;
      /** 字段支持的版本 */
      version?: string;
    }>;
  }>;
  /** 组件文档内容 */
  documentation: string;
}

/**
 * 通用组件schema加载器
 * 用于加载和解析wot-ui-plus组件的元数据信息，包括属性、事件、插槽等
 * @param componentName 组件名称（不包含wd-前缀）
 * @param docSource 文档来源组件名称（可选），用于指定从哪个组件的文档中加载信息
 * @returns 组件元数据对象，包含组件的完整信息
 */
export function loadComponentSchema(componentName: string, docSource?: string): ComponentMeta {
  try {
    // 解析组件文档，传递文档来源参数
    const componentInfo = parseComponentMarkdown(componentName, docSource);
    
    // 如果解析成功，则使用解析结果；否则使用默认值
    if (componentInfo) {
      // 构建完整的组件元数据对象，将解析结果映射为标准格式
      return {
        name: componentInfo.name,
        props: componentInfo.props.map(prop => ({
          name: prop.name,
          type: prop.type as 'enum' | 'boolean' | 'string' | 'number',
          values: prop.values,
          description: prop.description,
          default: prop.default,
          version: prop.version
        })),
        events: componentInfo.events.map(event => ({
          name: event.name,
          description: event.description,
          version: event.version
        })),
        methods: componentInfo.methods.map(event => ({
          name: event.name,
          description: event.description,
          version: event.version
        })),
        slots: componentInfo.slots?.map(slot => ({
          name: slot.name,
          description: slot.description,
          version: slot.version
        })),
        externalClasses: componentInfo.externalClasses?.map(externalClass => ({
          name: externalClass.name,
          description: externalClass.description,
          version: externalClass.version
        })),
        dataStructures: componentInfo.dataStructures?.map(structure => ({
          name: structure.name,
          fields: structure.fields.map(field => ({
            name: field.name,
            type: field.type,
            description: field.description,
            version: field.version
          }))
        })),
        documentation: componentInfo.documentation
      };
    }
    
    // 如果解析失败，返回包含基本信息的默认值
    return {
      name: `wd-${componentName}`,
      props: [],
      events: [],
      methods: [],
      documentation: loadComponentDoc(componentName, docSource) // 传递文档来源参数，加载原始文档内容
    };
  } catch (error) {
    // 捕获并记录加载过程中的错误
    console.error(`加载组件schema失败: ${componentName}`, error);
    
    // 错误情况下返回最小化的组件元数据
    return {
      name: `wd-${componentName}`,
      props: [],
      events: [],
      methods: [],
      documentation: ''
    };
  }
}

/**
 * 异步加载组件schema
 * 提供与loadComponentSchema相同的功能，但返回Promise对象以支持异步操作
 * @param componentName 组件名称（不包含wd-前缀）
 * @param docSource 文档来源组件名称（可选）
 * @returns 包含组件元数据的Promise对象
 * @note 目前此函数内部仍调用同步版本的loadComponentSchema，但提供异步接口便于未来扩展
 */
export async function loadComponentSchemaAsync(componentName: string, docSource?: string): Promise<ComponentMeta> {
  // 注意：当前实现直接调用同步函数，但返回Promise以支持异步使用场景
  return loadComponentSchema(componentName, docSource);
}