import styled from "@emotion/styled";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikHelpers,
} from "formik";
import { v4 as uuid } from "uuid";
import { positions } from "../data/positions";
import { usePlayerData } from "../hooks/usePlayerData";
import { PlayerFormState } from "../store/types";
import CustomSelect from "./CustomSelect";

const initialValues: PlayerFormState = {
  name: "",
  kit_number: "",
  positions: [],
};

export function PlayerForm() {
  const { players, addPlayer } = usePlayerData();

  function validate(values: PlayerFormState) {
    let errors: FormikErrors<PlayerFormState> = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (values.kit_number.length > 2) {
      errors.kit_number = "Shirt number cannot be longer than 2 characters";
    }
    if (values.positions.length < 0) {
      errors.positions = "At least one position is required";
    }

    return errors;
  }

  function onSubmit(
    values: PlayerFormState,
    actions: FormikHelpers<PlayerFormState>
  ) {
    actions.resetForm();
    const positions = values.positions.map((pos) => {
      if (typeof pos.weight != "number") {
        return { ...pos, weight: 0 };
      } else return pos;
    });
    addPlayer({ ...values, positions, id: uuid() });
  }

  return (
    <WrapperStyles>
      <Formik {...{ initialValues, onSubmit, validate }}>
        {({ errors, touched }) => (
          <Form>
            <h2>Player</h2>
            <label>
              Player Name <br />
              <Field
                id="name"
                type="text"
                placeholder="Eustáquio"
                name="name"
                className={`form-control ${
                  touched.name && errors.name ? "error-field" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="name"
                className="error-message"
              />
            </label>
            <label>
              Shirt Number <br />
              <Field
                id="kit_number"
                type="text"
                placeholder="7"
                name="kit_number"
                className={`form-control ${
                  touched.kit_number && errors.kit_number ? "error-field" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="kit_number"
                className="error-message"
              />
            </label>
            <label>
              Positions <br />
              <Field
                id="positions"
                name="positions"
                component={CustomSelect}
                options={positions}
              />
              <ErrorMessage
                component="div"
                name="positions"
                className="error-message"
              />
            </label>
            <button type="submit">Add Player</button>
          </Form>
        )}
      </Formik>
    </WrapperStyles>
  );
}

const WrapperStyles = styled.div`
  padding: 20px;
  background-color: var(--grey);
  border-radius: 0 0 5px 5px;

  h2 {
    margin-bottom: 5px;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  input {
    height: 20px;
    width: 150px;
    border-radius: 5px;
    border: 1px solid var(--grey-dark);
    padding-left: 5px;

    &.error-field {
      border-color: var(--error);
    }
  }

  .error-message {
    color: var(--error);
    padding: 2px;
    font-size: 0.8rem;
  }

  button {
    width: 150px;
    height: 30px;
    background-color: var(--primary);
    color: var(--text-colour-light);
    border: 1px solid transparent;
    border-radius: 5px;

    &:disabled {
      color: var(--grey);
      background-color: var(--blue-dark);
    }
  }
`;
