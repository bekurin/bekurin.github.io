import { GroupMenu, MenuType, RouteMenu } from "./type";
import { Menu as PrimeMenu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import MenuRouterMetaData from "../MenuRouterMetaData";
import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  const navigate = useNavigate();
  function convertToPrimeReactMenuItems(groupMenus: (GroupMenu | RouteMenu)[]): MenuItem[] {
    return groupMenus.map((menu) => {
      if (menu.type === MenuType.GROUP) {
        const groupMenu = menu as GroupMenu;
        return {
          label: menu.label,
          items: groupMenu.menus ? convertToPrimeReactMenuItems(groupMenu.menus) : undefined,
        };
      }
      const routeMenu = menu as RouteMenu;
      return {
        label: menu.label,
        command: () => {
          navigate(routeMenu.path);
        },
      };
    });
  }
  return <PrimeMenu className={styles.container} model={convertToPrimeReactMenuItems(MenuRouterMetaData)} />;
};

export default Menu;
