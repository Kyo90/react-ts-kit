export interface IComponent {
    type: string,
    name: string,
    width: number,
    icon: string,
    properties: Properties
}

interface Properties {
    key: string,
    value: string,
    limit?: number,
}

interface IDisplay {
    label: string,
    value: string
}

export const SectionName: IComponent = {
    type: 'SectionName',
    name: '文本',
    width: 6,
    icon: 'file-text',
    properties: {
        key:'name',
        value:'未命名'
    }
}