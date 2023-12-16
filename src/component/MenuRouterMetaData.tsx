import { MenuType, GroupMenu} from './menu/types'

const MenuRouterMetaData: GroupMenu[] = [
    {
        label: "일반",
        type: MenuType.GROUP,
        menus: [
            {
                label: "테스트",
                type: MenuType.GROUP,
                menus: [
                    {
                        label: "재귀",
                        type: MenuType.ROUTE,
                        path: "sample3",
                        component: <><h1>콘텐츠 샘플3</h1></>
                    }
                ]
            },
            {
                label: "샘플1",
                type: MenuType.ROUTE,
                path: "sample1",
                component: <><h1>콘텐츠 샘플1</h1></>
            },
            {
                label: "샘플2",
                type: MenuType.ROUTE,
                path: "sample2",
                component: <><h1>콘텐츠 샘플2</h1></>
            }
        ]
    }
]

export default MenuRouterMetaData