import React, { useState } from "react";
import { SearchField, SearchFormProps } from "./type";
import styles from "./SearchForm.module.css";

const SearchForm: React.FC<SearchFormProps> = ({ fields, maxFieldsPerRow, onSubmit }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateField = (field: SearchField, value: string) => {
    if (field.required && field.required === true && value.length < 1) {
      return "필수값입니다.";
    }
    if (field.validate) {
      return field.validate(value);
    }
    return null;
  };

  const getGridTemplateColumns = () => {
    return `repeat(${maxFieldsPerRow}, 1fr)`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = fields.reduce((acc, field) => {
      const error = validateField(field, formValues[field.name] || "");
      acc[field.name] = error;
      return acc;
    }, {} as { [key: string]: string | null });
    setErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error !== null);
    if (!hasErrors) {
      onSubmit(formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: getGridTemplateColumns(), gap: "10px" }} className={styles.container}>
      {fields.map((field) => (
        <div key={field.name} className={styles.fieldContainer}>
          <div className={styles.field}>
            <label htmlFor={field.name}>{field.label}</label>
            <input type={field.type} name={field.name} value={formValues[field.name] || ""} onChange={handleChange} className={styles.input} required={field.required} />
          </div>
          {errors[field.name] && <div className={styles.error}>{errors[field.name]}</div>}
        </div>
      ))}
      <div style={{ gridColumn: "1 / -1", textAlign: "center" }}>
        <button type="submit" className={styles.submit}>
          검색하기
        </button>
      </div>
    </form>
  );
};
export default SearchForm;
