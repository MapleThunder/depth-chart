import styled from "@emotion/styled";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { PlayerForm } from "./PlayerForm";

export function Sidebar() {
  const { clearPlayers } = useContext(GlobalContext);

  return (
    <SidebarStyles>
      <div>
        <button type="button" onClick={clearPlayers}>
          Clear Players
        </button>
      </div>
      <PlayerForm />
    </SidebarStyles>
  );
}

const SidebarStyles = styled.div`
  padding: 20px;
  background-color: var(--grey);
  border-radius: 0 0 5px 5px;

  h2 {
    margin-bottom: 5px;
  }

  button {
    width: 150px;
    height: 30px;
    background-color: var(--primary);
    color: var(--text-colour-light);
    border: 1px solid transparent;
    border-radius: 5px;
    margin-bottom: 10px;

    &:disabled {
      color: var(--grey);
      background-color: var(--blue-dark);
    }
  }
`;
