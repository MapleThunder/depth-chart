import styled from "@emotion/styled";
import { useContext } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Draggable } from "react-beautiful-dnd";
import { GlobalContext } from "../context/GlobalState";
import { ListItemParams } from "../store/types";

export function ListItem({ player, position }: ListItemParams) {
  const { openModal } = useContext(GlobalContext);
  const player_position = player.positions
    .filter((p) => p.value == position)
    .pop();
  let weight = player_position?.weight || 0;

  return (
    <Draggable draggableId={player.id} index={weight}>
      {(provided) => (
        <ListItemStyles
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <button
            // onClick={() =>
            //   openModal(player, {
            //     type: "edit",
            //     position: "",
            //     player_id: player.id,
            //   })
            // }
            className="player-selector"
          >
            {player.name}
            <AiOutlineEdit />
          </button>
        </ListItemStyles>
      )}
    </Draggable>
  );
}

const ListItemStyles = styled.li`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--background-stripe);

  &:last-child {
    border-bottom: 1px solid transparent;
  }

  button.player-selector {
    border: transparent;
    background: transparent;
    font-family: var(--font-family);
    font-size: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    &:hover,
    &:focus {
      background-color: var(--highlight);
    }

    .react-icon {
      color: var(--disabled);
      font-size: 1.2rem;
      vertical-align: middle;
    }

    @media screen and (max-width: 900px) {
      font-size: 0.9rem;
    }
  }
`;
