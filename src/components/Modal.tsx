import styled from "@emotion/styled";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { PlayerForm } from "./PlayerForm";
import { DeleteForm } from "./DeleteForm";
import { PlayerFormState } from "../store/types";
import { FormikHelpers } from "formik";
import { empty_form_state } from "../util/empties";

export function Modal() {
  const { showModal, closeUpdateModal, players, modalContext } =
    useContext(GlobalContext);
  let modal_title;
  const player = players.find((p) => p.id == modalContext.player_id);

  switch (modalContext.type) {
    case "delete":
      modal_title = `Delete Player`;
    case "edit":
    default:
      modal_title = `Edit Player`;
      break;
  }

  function closeOnEscKeyDown(event: KeyboardEvent) {
    if (event.code == "Escape") {
      closeUpdateModal();
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscKeyDown);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscKeyDown);
    };
  }, []);

  if (!player) {
    return <ModalStyles onClick={() => closeUpdateModal()}></ModalStyles>;
  }
  return (
    <ModalStyles
      onClick={() => closeUpdateModal()}
      className={`${showModal ? "show" : ""}`}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{modal_title}</h3>
          <span>
            <AiOutlineClose onClick={() => closeUpdateModal()} />
          </span>
        </div>
        <div className="modal-body">
          {modalContext?.type == "edit" ? (
            <PlayerForm player={player} mode="update_player" />
          ) : (
            <DeleteForm player={player} position_code={modalContext.position} />
          )}
        </div>
      </div>
    </ModalStyles>
  );
}

const ModalStyles = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  &.show {
    opacity: 1;
    pointer-events: visible;

    .modal-content {
      transform: translateY(0);
    }
  }

  .modal-content {
    width: 500px;
    background-color: var(--white);
    transform: translateY(-200px);
    transition: all 0.3s ease-in-out;
    padding: 20px;
    border-radius: 5px;
    box-shadow: var(--bs);

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      h3 {
        font-size: 1.1rem;
        font-weight: bold;
      }
    }

    .modal-body {
      margin-bottom: 15px;
    }
  }
`;
