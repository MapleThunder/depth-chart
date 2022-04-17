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
import { empty_form_state } from "../util/empties";

export function PlayerForm({ player, mode = "add_player" }: PlayerFormInit) {
  const { addPlayer, closeUpdateModal, updatePlayer, showModal } =
    useContext(GlobalContext);

  let initialValues;
  if (player) {
    initialValues = { ...player };
  } else {
    initialValues = { ...empty_form_state };
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

  function onSubmit(
    values: PlayerFormState,
    actions: FormikHelpers<PlayerFormState>
  ) {
    actions.resetForm({ values: empty_form_state });
    const positions = values.positions.map((pos) => {
      if (typeof pos.weight != "number") {
        return { ...pos, weight: 0 };
      } else return pos;
    });
    switch (mode) {
      case "add_player":
        addPlayer({ ...values, positions, id: uuid() });
        break;

      case "update_player":
        updatePlayer({ ...values, positions, id: player.id });
        break;
    }

    if (showModal) {
      closeUpdateModal();
    }
  }

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
              <SubmitButton>
                {mode == "add_player" ? "Add" : "Update"} Player
              </SubmitButton>
              {mode == "update_player" && (
                <CancelButton onClick={closeUpdateModal} />
              )}
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
