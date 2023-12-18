import { SearchField } from "../../component/SearchForm/type";
import SearchForm from "../../component/SearchForm";

const User = () => {
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

  return (
    <>
      <SearchForm fields={searchFields} onSubmit={handleSearchSubmit} maxFieldsPerRow={3} />
    </>
  );
};

export default User;
