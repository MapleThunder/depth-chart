import styled from "@emotion/styled";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { PlayerForm } from "./PlayerForm";

export function Modal() {
  const { showModal, closeUpdateModal, editPlayer } = useContext(GlobalContext);

  function handleUpdate() {
    // const player = players.find((p) => p.id == pid);
    // get player data
    // dispatch update message
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

  return (
    <ModalStyles
      onClick={() => closeUpdateModal()}
      className={`${showModal ? "show" : ""}`}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Edit Player</h3>
          <span>
            <AiOutlineClose onClick={() => closeUpdateModal()} />
          </span>
        </div>
        <div className="modal-body">
          <PlayerForm id={editPlayer?.id} />
        </div>
        <div className="modal-actions">
          <button className="update-button" onClick={() => handleUpdate()}>
            Update
          </button>
          <button className="cancel-button" onClick={() => closeUpdateModal()}>
            Cancel
          </button>
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
  }
`;
