export interface MenuItem {
    label: string,
    type: string,
    hidden?: boolean
}

export interface GroupMenu extends MenuItem {
    menus: (GroupMenu | RouteMenu)[]
}

export interface RouteMenu extends MenuItem {
    path: string,
    component: JSX.Element
}

export enum MenuType {
    GROUP = 'group',
    ROUTE = 'route'
}