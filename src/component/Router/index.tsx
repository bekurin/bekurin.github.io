import { GroupMenu, RouteMenu, MenuType } from "../Menu/type";
import { Routes, Route } from "react-router-dom";
import MenuRouterMetaData from "../MenuRouterMetaData";

const Router = () => {
  const createRoutesFromMenu = (groupMenus: (GroupMenu | RouteMenu)[]): JSX.Element[] => {
    return groupMenus.flatMap((value, index) => {
      if (value.type === MenuType.GROUP) {
        const groupMenu = value as GroupMenu;
        if (groupMenu.menus) {
          return createRoutesFromMenu(groupMenu.menus);
        }
      }
      const routeMenu = value as RouteMenu;
      return <Route path={routeMenu.path} element={routeMenu.component} key={index} />;
    });
  };

  return <Routes>{createRoutesFromMenu(MenuRouterMetaData)}</Routes>;
};

export default Router;
