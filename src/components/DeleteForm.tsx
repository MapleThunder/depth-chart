import styled from "@emotion/styled";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { positions } from "../data/positions";
import { DeleteFormParams, DeleteFormState } from "../store/types";
import { empty_position } from "../util/empties";
import { CancelButton } from "./CancelButton";

export function DeleteForm({ player, position_code }: DeleteFormParams) {
  const { closeUpdateModal } = useContext(GlobalContext);
  const position =
    positions.find((p) => p.value == position_code) || empty_position;
  const initialValues: DeleteFormState = {
    position,
    player,
  };

  function onSubmit(values: DeleteFormState) {
    // Delete player position
    console.log({ values });
  }

  return (
    <DeleteFormStyles>
      <Formik {...{ initialValues, onSubmit }}>
        {() => (
          <Form>
            <p>
              Delete {position.label} from {player.name}
            </p>
            <div className="form-actions">
              <button type="submit" className="button-delete">
                Delete
              </button>
              <CancelButton onClick={closeUpdateModal} />
            </div>
          </Form>
        )}
      </Formik>
    </DeleteFormStyles>
  );
}

const DeleteFormStyles = styled.div``;
