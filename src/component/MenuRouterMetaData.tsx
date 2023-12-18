import Course from "../page/Course";
import User from "../page/User";
import Teacher from "../page/Teacher";
import { MenuType, GroupMenu } from "./Menu/type";

const MenuRouterMetaData: GroupMenu[] = [
  {
    label: "일반",
    type: MenuType.GROUP,
    menus: [
      {
        label: "회원 관리",
        type: MenuType.ROUTE,
        path: "/users",
        component: <User />,
      },
      {
        label: "강의 관리",
        type: MenuType.ROUTE,
        path: "/courses",
        component: <Course />,
      },
      {
        label: "강사 관리",
        type: MenuType.ROUTE,
        path: "/teachers",
        component: <Teacher />,
      },
    ],
  },
];

export default MenuRouterMetaData;
