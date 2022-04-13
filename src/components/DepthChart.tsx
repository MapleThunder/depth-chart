import { useState } from "react";
import styled from "@emotion/styled";
import { boxes } from "../data/boxes";
import { Box } from "./Box";
import { Player } from "../store/types";
import {
  playerReducer as reducer,
  usePlayerData,
} from "../hooks/usePlayerData";

export function DepthChart() {
  const { players } = usePlayerData({ reducer });

  return (
    <ChartStyles>
      {boxes &&
        boxes.map((box, i) => <Box details={box} players={players} key={i} />)}
    </ChartStyles>
  );
}

const ChartStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
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
    grid-row: 2/3;
  }
  .mid {
    grid-row: 3/4;
  }
  .d-mid {
    grid-row: 4/5;
  }
  .def {
    grid-row: 5/6;
  }

  .keeper {
    grid-column: 2/3;
    grid-row: 6/7;
  }
`;

const initial_state: Array<Player> = [];
