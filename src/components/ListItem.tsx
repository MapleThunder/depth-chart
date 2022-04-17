import styled from "@emotion/styled";
import { useContext } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { GlobalContext } from "../context/GlobalState";
import { ListItemParams } from "../store/types";

export function ListItem({ player, position }: ListItemParams) {
  const { openModal } = useContext(GlobalContext);

  return (
    <ListItemStyles>
      <span className="player-name">{player.name}</span>
      <div className="button-wrapper">
        <button
          className="edit-button"
          onClick={() =>
            openModal(player, {
              type: "edit",
              position: "",
              player_id: player.id,
            })
          }
        >
          <AiOutlineEdit />
        </button>
        <button
          className="delete-button"
          onClick={() =>
            openModal(player, {
              type: "delete",
              position,
              player_id: player.id,
            })
          }
        >
          <AiOutlineDelete />
        </button>
      </div>
    </ListItemStyles>
  );
}

const ListItemStyles = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
  margin: 0 10px;
  padding: 0 5px;
  border-bottom: 1px solid var(--background-stripe);

  &:last-child {
    border-bottom: 1px solid transparent;
  }

  &:hover,
  &:focus {
    div.button-wrapper {
      .react-icon {
        color: var(--grey-dark);
      }
    }
  }

  .player-name {
    margin-right: 10px;
  }

  div.button-wrapper {
    button .react-icon {
      color: var(--disabled);
      font-size: 1.2rem;
      vertical-align: middle;
    }

    button {
      border: none;
      background-color: transparent;
      border-radius: 3px;
      padding: 2px;

      &:hover,
      &:focus {
        background-color: var(--primary-light);
      }
    }
  }
`;
