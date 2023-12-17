import { MenuType, GroupMenu } from "./Menu/type";
import SearchForm from "./SearchForm";
import { SearchField } from "./SearchForm/type";

const searchFields: SearchField[] = [
  { name: "name", label: "Name", type: "text" },
  { name: "age", label: "Age", type: "number" },
  { name: "birthdate", label: "Birthdate", type: "date" },
];

const handleSearchSubmit = (values: { [key: string]: string }) => {
  console.log("Search Values:", values);
};

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
            component: <SearchForm fields={searchFields} onSubmit={handleSearchSubmit} maxFieldsPerRow={2} />,
          },
        ],
      },
      {
        label: "샘플1",
        type: MenuType.ROUTE,
        path: "sample1",
        component: (
          <>
            <h1>콘텐츠 샘플1</h1>
          </>
        ),
      },
      {
        label: "샘플2",
        type: MenuType.ROUTE,
        path: "sample2",
        component: (
          <>
            <h1>콘텐츠 샘플2</h1>
          </>
        ),
      },
    ],
  },
];

export default MenuRouterMetaData;
