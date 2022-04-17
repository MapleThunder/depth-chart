import styled from "@emotion/styled";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { empty_player } from "../util/empties";
import { PlayerForm } from "./PlayerForm";

export function Sidebar() {
  const { clearPlayers } = useContext(GlobalContext);

  return (
    <SidebarStyles>
      <h2>Add Player</h2>
      <div>
        <button type="button" className="button-clear" onClick={clearPlayers}>
          Clear
        </button>
      </div>
      <PlayerForm player={empty_player} />
    </SidebarStyles>
  );
}

const SidebarStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px auto;
  padding: 20px;
  background-color: var(--grey);
  border-radius: 0 0 5px 5px;

  h2 {
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: solid 1px var(--background-stripe);
  }

  .button-clear {
    width: 60px;
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
