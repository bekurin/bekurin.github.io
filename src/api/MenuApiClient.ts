import { getAxios } from "../config/initializeAxios";
import { MenuResponse } from "./types";

export const fetchSideMenu = async (): Promise<MenuResponse> => {
  return await getAxios().get("/v1/menus");
};
