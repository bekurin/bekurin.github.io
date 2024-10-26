import { MenuType } from "../../component/Menu/type";

export interface MenuResponse {
  label: string;
  type: MenuType;
  menus: Array<Menu>;
}

interface Menu {
  label: string;
  type: MenuType;
  path: string;
  component: Component;
}

enum Component {
  USER = "user",
  COURSE = "course",
  TEACHER = "teacher",
}
