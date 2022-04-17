import styled from "@emotion/styled";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikHelpers,
} from "formik";
import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../context/GlobalState";
import { positions } from "../data/positions";
import { PlayerFormState, PlayerFormInit } from "../store/types";
import { CancelButton } from "./CancelButton";
import CustomSelect from "./CustomSelect";
import { SubmitButton } from "./SubmitButton";

const initialValues: PlayerFormState = {
  name: "",
  kit_number: "",
  positions: [],
};

export function PlayerForm({ player, submitOverride }: PlayerFormInit) {
  const { addPlayer, showModal, closeUpdateModal } = useContext(GlobalContext);

  if (player) {
    initialValues.name = player.name;
    initialValues.kit_number = player.kit_number;
    initialValues.positions = player.positions;
  }

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

  function submitFunc(
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

  const onSubmit = submitOverride ? submitOverride : submitFunc;

  return (
    <FormStyles className="form-wrapper">
      <Formik {...{ initialValues, onSubmit, validate }}>
        {({ errors, touched }) => (
          <Form>
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
            <div className="form-actions">
              <SubmitButton>Add Player</SubmitButton>
              {showModal && <CancelButton onClick={closeUpdateModal} />}
            </div>
          </Form>
        )}
      </Formik>
    </FormStyles>
  );
}

const FormStyles = styled.div`
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
`;
