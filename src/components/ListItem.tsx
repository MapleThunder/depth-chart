import styled from "@emotion/styled";
import { useContext } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { VscGrabber } from "react-icons/vsc";
import { Draggable } from "react-beautiful-dnd";
import { GlobalContext } from "../context/GlobalState";
import { ListItemParams } from "../store/types";

export function ListItem({ player, position, index }: ListItemParams) {
  const { openModal } = useContext(GlobalContext);
  const player_position = player.positions
    .filter((p) => p.value == position)
    .pop();
  let weight = player_position?.weight || 0;

  return (
    <Draggable
      key={`${position}::${player.id}`}
      draggableId={`${position}::${player.id}`}
      index={index}
    >
      {(provided, snapshot) => (
        <ListItemStyles>
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            style={getItemStyle(
              provided.draggableProps.style,
              snapshot.isDragging
            )}
            className="item-wrapper"
          >
            <div>
              <VscGrabber />
            </div>
            <button
              onClick={() =>
                openModal(player, {
                  type: "edit",
                  position: "",
                  player_id: player.id,
                })
              }
              className="player-selector"
            >
              <span className="player-name">{player.name}</span>
              <AiOutlineEdit />
            </button>
          </div>
        </ListItemStyles>
      )}
    </Draggable>
  );
}

function getItemStyle(draggableStyle: any, isDragging: boolean): {} {
  return {
    userSelect: "none",
    background: isDragging ? "lightgreen" : "transparent",
    margin: 0,
    height: "100%",
    ...draggableStyle,
  };
}

const ListItemStyles = styled.li`
  height: 30px;
  border-bottom: 1px solid var(--background-stripe);

  &:last-child {
    border-bottom: 1px solid transparent;
  }

  .item-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 0 0 5px;
    margin: 0 10px;

    button.player-selector {
      border: transparent;
      background: transparent;
      font-family: var(--font-family);
      font-size: 1rem;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover,
      &:focus {
        background-color: var(--highlight);
      }

      .react-icon {
        color: var(--disabled);
        font-size: 1.2rem;
        vertical-align: middle;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .item-wrapper {
      button.player-selector {
        font-size: 0.9rem;

        span.player-name {
          max-width: 75%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        svg.react-icon {
          margin-left: -7px;
        }
      }
    }
  }
`;
