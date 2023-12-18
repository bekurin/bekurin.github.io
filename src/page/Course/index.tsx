import { SearchField } from "../../component/SearchForm/type";
import SearchForm from "../../component/SearchForm";

const Course = () => {
  const searchFields: SearchField[] = [
    { name: "name", label: "이름", type: "text", required: false },
    { name: "category", label: "카테고리", type: "number", required: false },
    { name: "courseStartDate", label: "강의 시작 일자", type: "date", required: false },
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

export default Course;
