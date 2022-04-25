import styled from "@emotion/styled";
import { ListItem } from "./ListItem";
import { Box, BoxParams, Player } from "../store/types";
import { Droppable } from "react-beautiful-dnd";
import { byPosition } from "../util/filters";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export function Box({ details }: BoxParams) {
  const { players } = useContext(GlobalContext);
  const filtered = byPosition(players, details.position);

  function getFilteredClass(num: number): string {
    let colour = "--bad";
    if (num >= details.limits.good) colour = "--good";
    else if (num >= details.limits.okay) colour = "--okay";

    return colour;
  }

  return (
    <BoxStyles
      className={details.classes}
      filteredClass={getFilteredClass(filtered.length)}
    >
      <div className="box-label-wrapper">
        <span className="box-label">{details.label}</span>
        <div className="count-pill">{filtered.length}</div>
      </div>
      <Droppable droppableId={details.position}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="box-list-wrapper"
          >
            <ul>
              {filtered.map((player: Player, i: number) => (
                <ListItem
                  key={`${details.position}-${player.id}`}
                  player={player}
                  position={details.position}
                />
              ))}
              {provided.placeholder}
            </ul>
          </div>
        )}
      </Droppable>
    </BoxStyles>
  );
}

const BoxStyles = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--black);
  border-radius: var(--br);
  box-shadow: var(--bs);
  text-align: center;
  padding: 5px 0;
  background-color: var(--background);
  min-height: 80px;

  .box-label-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--black);
    border-radius: var(--br) var(--br) 0 0;
    padding: 5px 10px;
    margin: -5px 0 0 0;
    background-color: var(${(props) => props.filteredClass});

    .box-label {
      font-size: 1.2rem;
    }
    .count-pill {
      padding: 2px 5px;
      border-radius: 7px;
      margin-left: 10px;
      border: 1px solid var(--black);
      box-shadow: var(--bs-inset);
    }
  }

  @media screen and (max-width: 900px) {
    .box-label-wrapper {
      .box-label {
        font-size: 0.9rem;
      }
    }
  }
`;

type StyleProps = {
  filteredClass: string;
};
