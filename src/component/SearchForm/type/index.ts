export type SearchField = {
  name: string;
  label: string;
  type: "text" | "number" | "date";
};

export type SearchFormProps = {
  fields: SearchField[];
  maxFieldsPerRow: number;
  onSubmit: (values: { [key: string]: string }) => void;
};
