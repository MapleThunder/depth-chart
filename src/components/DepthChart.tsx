import styled from "@emotion/styled";
import { useContext } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { GlobalContext } from "../context/GlobalState";
import { boxes } from "../data/boxes";
import { byPosition } from "../util/filters";
import { resetWeights } from "../util/weightUtils";
import { Box } from "./Box";

export function DepthChart() {
  const { players, overwritePlayers } = useContext(GlobalContext);

  function onDragEnd(result: DropResult): void {
    const { source, destination, draggableId } = result;
    const filtered_players = byPosition(players, source.droppableId);
    const moved_player = filtered_players.filter((p) => {
      const pid = draggableId.split("::")[1];
      return p.id == pid;
    })[0];

    if (!destination) {
      return;
    }

    if (source.droppableId != destination.droppableId) {
      return;
    }

    if (destination.index == source.index) {
      return;
    }

    filtered_players.splice(source.index, 1);
    filtered_players.splice(destination.index, 0, moved_player);

    const weighted_players = resetWeights(filtered_players, source.droppableId);

    const new_players = players.map((p) => {
      const possible = weighted_players.find((item) => item.id == p.id);
      if (possible) {
        return possible;
      } else {
        return p;
      }
    });

    overwritePlayers(new_players);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ChartStyles>
        {boxes && boxes.map((box, i) => <Box details={box} key={i} />)}
      </ChartStyles>
    </DragDropContext>
  );
}

const ChartStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  max-width: 900px;
  padding: 20px 10px;

  .striker {
    grid-column: 2/3;
  }

  .left {
    grid-column: 1/2;
  }
  .centre {
    grid-column: 2/3;
  }
  .right {
    grid-column: 3/4;
  }

  .a-mid {
    grid-row: 2/4;
  }
  .mid {
    grid-row: 3/4;
  }
  .def {
    grid-row: 4/5;
  }

  .keeper {
    grid-column: 2/3;
    grid-row: 5/6;
  }

  .centre.a-mid {
    grid-row: 2/3;
  }

  @media screen and (max-width: 700px) {
    padding: 20px 0;
    grid-gap: 2px;
  }
`;
