import React, { useState } from "react";
import { SearchFormProps } from "./type";
import styles from "./SearchForm.module.css";

const SearchForm: React.FC<SearchFormProps> = ({ fields, maxFieldsPerRow, onSubmit }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const getGridTemplateColumns = () => {
    return `repeat(${maxFieldsPerRow}, 1fr)`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: getGridTemplateColumns(), gap: "10px" }}>
      {fields.map((field) => (
        <div key={field.name} className={styles.container}>
          <label htmlFor={field.name}>{field.label}</label>
          <input type={field.type} name={field.name} value={formValues[field.name] || ""} onChange={handleChange} className={styles.input} />
        </div>
      ))}
      <div style={{ gridColumn: "1 / -1", textAlign: "center" }}>
        <button type="submit" className={styles.submit}>
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchForm;
