import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import sanityClient from "../client.js";
import { boxes } from "../data/boxes";
import { Box } from "./Box.js";

export function DepthChart() {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "player"]{
      name,
      kit_name,
      kit_number,
      positions
    }`
      )
      .then((data) => setPlayers(data));
  }, []);

  if (players == null) return <p>Loading...</p>;
  return (
    <ChartStyles>
      {boxes &&
        boxes.map((box, i) => <Box details={box} players={players} key={i} />)}
    </ChartStyles>
  );
}

const ChartStyles = styled.div`
  border: var(--debug);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 10px;
  max-width: 650px;
  background-color: var(--pitch);
  padding: 20px 10px;
  box-shadow: var(--bs);

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
