export type SearchField = {
  name: string;
  label: string;
  required: boolean;
  type: "text" | "number" | "date";
  validate?: (value: string) => string | null;
};

export type SearchFormProps = {
  fields: SearchField[];
  maxFieldsPerRow: number;
  onSubmit: (values: { [key: string]: string }) => void;
};
