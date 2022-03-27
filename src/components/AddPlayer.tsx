import styled from "@emotion/styled";
import { useState } from "react";

export function AddPlayer() {
  const [playerName, setPlayerName] = useState("");

  return (
    <WrapperStyles>
      <form>
        <h2>Add a Player</h2>
        <input
          type="text"
          name="name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </WrapperStyles>
  );
}

const WrapperStyles = styled.div`
  padding: 20px;
  background-color: var(--grey);
  border-radius: 0 0 5px 5px;

  h2 {
    margin-bottom: 15px;
  }
`;
