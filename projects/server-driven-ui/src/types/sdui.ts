// Base component interface
export interface SDUIComponent {
  type: string
  props?: Record<string, unknown>
  children?: SDUIComponent[]
}

// Action types
export interface NavigateAction {
  type: 'navigate'
  path: string
}

export interface ApiAction {
  type: 'api'
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  endpoint: string
  confirm?: string
}

export interface ModalAction {
  type: 'modal'
  modalKey: string
}

export interface SubmitAction {
  type: 'submit'
}

export type SDUIAction = NavigateAction | ApiAction | ModalAction | SubmitAction

// Header components
export interface AvatarDropdownItem {
  key: string
  label: string
  icon?: string
}

export interface AvatarComponent extends SDUIComponent {
  type: 'avatar'
  props: {
    name: string
    dropdown?: AvatarDropdownItem[]
  }
}

export interface HeaderComponent extends SDUIComponent {
  type: 'header'
  props: {
    title: string
    logo?: string
  }
  children?: AvatarComponent[]
}

// Menu components
export interface MenuItem {
  key: string
  label: string
  icon?: string
  path?: string
  children?: MenuItem[]
}

export interface MenuComponent extends SDUIComponent {
  type: 'menu'
  props: {
    defaultSelectedKey?: string
    defaultOpenKeys?: string[]
  }
  items: MenuItem[]
}

// Layout response
export interface LayoutResponse {
  header: HeaderComponent
  sider: MenuComponent
}

// Page components
export interface SelectOption {
  value: string
  label: string
}

export interface SelectComponent extends SDUIComponent {
  type: 'select'
  props: {
    name: string
    label?: string
    placeholder?: string
    options: SelectOption[]
  }
}

export interface InputComponent extends SDUIComponent {
  type: 'input'
  props: {
    name: string
    label?: string
    placeholder?: string
    inputType?: 'text' | 'password' | 'number'
  }
}

export interface ButtonComponent extends SDUIComponent {
  type: 'button'
  props: {
    label: string
    buttonType?: 'primary' | 'default' | 'dashed' | 'link' | 'text'
    danger?: boolean
    action?: SDUIAction
  }
}

export interface FormComponent extends SDUIComponent {
  type: 'form'
  props: {
    layout?: 'horizontal' | 'vertical' | 'inline'
    onSubmit?: ApiAction
  }
  children: SDUIComponent[]
}

export interface TableColumnRender {
  type: string
  format?: string
  children?: SDUIComponent[]
}

export interface TableColumn {
  key: string
  title: string
  dataIndex?: string
  render?: TableColumnRender
}

export interface TableComponent extends SDUIComponent {
  type: 'table'
  props: {
    dataSource: string
    rowKey: string
    columns: TableColumn[]
    pagination?: {
      pageSize: number
    }
  }
}

export interface CardComponent extends SDUIComponent {
  type: 'card'
  props: {
    title?: string
  }
  children: SDUIComponent[]
}

export interface StatisticComponent extends SDUIComponent {
  type: 'statistic'
  props: {
    title: string
    value: number | string
    prefix?: string
    suffix?: string
    precision?: number
  }
}

export interface DescriptionItem {
  key: string
  label: string
  value: string | number
}

export interface DescriptionsComponent extends SDUIComponent {
  type: 'descriptions'
  props: {
    title?: string
    bordered?: boolean
    column?: number
    items: DescriptionItem[]
  }
}

export interface RowComponent extends SDUIComponent {
  type: 'row'
  props?: {
    gutter?: number | [number, number]
  }
  children: SDUIComponent[]
}

export interface ColComponent extends SDUIComponent {
  type: 'col'
  props?: {
    span?: number
    xs?: number
    sm?: number
    md?: number
    lg?: number
  }
  children: SDUIComponent[]
}

export interface SpaceComponent extends SDUIComponent {
  type: 'space'
  props?: {
    direction?: 'horizontal' | 'vertical'
    size?: 'small' | 'middle' | 'large' | number
  }
  children: SDUIComponent[]
}

export interface DividerComponent extends SDUIComponent {
  type: 'divider'
  props?: {
    orientation?: 'left' | 'right' | 'center'
    text?: string
  }
}

export interface TextComponent extends SDUIComponent {
  type: 'text'
  props: {
    content: string
    strong?: boolean
    type?: 'secondary' | 'success' | 'warning' | 'danger'
  }
}

export interface TitleComponent extends SDUIComponent {
  type: 'title'
  props: {
    content: string
    level?: 1 | 2 | 3 | 4 | 5
  }
}

// Page response
export interface PageResponse {
  pageKey: string
  title: string
  components: SDUIComponent[]
}

// Component union type
export type SDUIComponentType =
  | HeaderComponent
  | AvatarComponent
  | MenuComponent
  | SelectComponent
  | InputComponent
  | ButtonComponent
  | FormComponent
  | TableComponent
  | CardComponent
  | StatisticComponent
  | DescriptionsComponent
  | RowComponent
  | ColComponent
  | SpaceComponent
  | DividerComponent
  | TextComponent
  | TitleComponent
