import styled from "@emotion/styled";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function ClearButton() {
  const { clearPlayers } = useContext(GlobalContext);

  return (
    <ClearButtonStyles
      type="button"
      className="button-clear"
      onClick={clearPlayers}
    >
      Clear
    </ClearButtonStyles>
  );
}

const ClearButtonStyles = styled.button`
  width: 60px;
  height: 30px;
  background-color: var(--error);
  color: var(--text-colour);
  font-weight: 700;
  border: 1px solid transparent;
  border-radius: 5px;

  &:disabled {
    color: var(--grey);
    background-color: var(--blue-dark);
  }
`;
