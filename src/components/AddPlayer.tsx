import styled from "@emotion/styled";
import { useState } from "react";

export function AddPlayer() {
  const [playerName, setPlayerName] = useState("");

  return (
    <FormStyles>
      <input
        type="text"
        name="name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button type="submit">+</button>
    </FormStyles>
  );
}

const FormStyles = styled.form`
  border: var(--debug);
  padding: 10px;
`;
