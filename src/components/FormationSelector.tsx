import { ErrorMessage, Field, Form, Formik } from "formik";
import { formations } from "../data/formations";
import CustomSelect from "./CustomSelect";

export function FormationSelector() {
  let initialValues = { formations: formations[0] };

  function validate(values) {
    // console.log({ validate: values });
    // let errors: { formations?: string } = {};
    // if (values.formations.length < 1) {
    //   errors.formations = "Pick a formation";
    // }
    // return errors;
  }

  function onSubmit(values, actions) {
    console.log({ values, actions });
  }

  return (
    <div>
      <Formik {...{ initialValues, onSubmit, validate }}>
        {({ errors, touched }) => (
          <Form>
            <label>
              Positions <br />
              <Field
                id="formations"
                name="formations"
                component={CustomSelect}
                options={formations}
                isMulti={false}
              />
              <ErrorMessage
                component="div"
                name="formations"
                className="error-message"
              />
            </label>
          </Form>
        )}
      </Formik>
    </div>
  );
}
