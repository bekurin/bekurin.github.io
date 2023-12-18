import { SearchField } from "../../component/SearchForm/type";
import SearchForm from "../../component/SearchForm";

const Teacher = () => {
  const searchFields: SearchField[] = [{ name: "name", label: "이름", type: "text", required: false }];

  const handleSearchSubmit = (values: { [key: string]: string }) => {
    console.log("Search Values:", values);
  };

  return (
    <>
      <SearchForm fields={searchFields} onSubmit={handleSearchSubmit} maxFieldsPerRow={1} />
    </>
  );
};

export default Teacher;
