import { FieldProps } from "formik";
import Select from "react-select";
import { CustomSelectProps } from "../store/types";

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
      escapeClearsValue={true}
      isClearable={true}
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
