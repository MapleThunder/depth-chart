import styled from "@emotion/styled";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { positions } from "../data/positions";
import { DeleteFormParams, DeleteFormState } from "../store/types";
import { empty_position } from "../util/empties";
import { CancelButton } from "./CancelButton";

export function DeleteForm({ player, position_code }: DeleteFormParams) {
  const { closeUpdateModal, deletePlayerPosition } = useContext(GlobalContext);
  const position =
    positions.find((p) => p.value == position_code) || empty_position;
  const initialValues: DeleteFormState = {
    position,
    player,
  };

  function onSubmit(values: DeleteFormState) {
    const { player, position } = values;
    deletePlayerPosition(player, {
      type: "delete",
      position: position.value,
      player_id: player.id,
    });
  }

  return (
    <DeleteFormStyles>
      <Formik {...{ initialValues, onSubmit }}>
        {() => (
          <Form>
            <p>
              Delete {player.name} from {position.label} position.
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

const DeleteFormStyles = styled.div`
  .form-actions {
    margin-top: 15px;
  }
`;
