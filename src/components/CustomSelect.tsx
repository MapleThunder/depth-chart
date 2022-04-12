import { FieldProps } from "formik";
import Select from "react-select";

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  label: string;
  options: Array<Option>;
};

export function CustomSelect({
  options,
  field,
  form: { touched, errors, setFieldValue },
  ...props
}: FieldProps & CustomSelectProps) {
  return (
    <Select
      {...field}
      {...props}
      options={options}
      value={
        options ? options.find((option) => option.value == field.value) : ""
      }
      onChange={(option) => {
        setFieldValue(field.name, option);
      }}
      isMulti={true}
      className={`form-control ${
        touched.positions && errors.positions ? "error-field" : ""
      }`}
    />
  );
}

export default CustomSelect;
