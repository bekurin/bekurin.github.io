import { MenuType, GroupMenu } from "./Menu/type";
import SearchForm from "./SearchForm";
import { SearchField } from "./SearchForm/type";

const searchFields: SearchField[] = [
  {
    name: "name",
    label: "이름",
    type: "text",
    required: true,
    validate: (value) => {
      if (value.length < 2) {
        return "이름은 2글자 이상이어야 합니다.";
      }
      return null;
    },
  },
  { name: "age", label: "나이", type: "number", required: false },
  { name: "birthdate", label: "생년월일", type: "date", required: false },
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
