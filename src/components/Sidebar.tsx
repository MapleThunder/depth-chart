import styled from "@emotion/styled";
import { empty_player } from "../util/empties";
import { PlayerForm } from "./PlayerForm";

export function Sidebar() {
  return (
    <SidebarStyles>
      <div className="sidebar-wrapper">
        <h2>Add Player</h2>
        <div className="button-wrapper"></div>
        <PlayerForm player={empty_player} />
      </div>
    </SidebarStyles>
  );
}

const SidebarStyles = styled.div`
  max-height: 300px;
  .sidebar-wrapper {
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  background-color: var(--grey);
  border-radius: 0 0 5px 5px;

  @media screen and (max-width: 600px) {
    width: 100vw;
    padding: 0;
    border-radius: 0;
  }

  h2 {
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: solid 1px var(--background-stripe);
  }
`;
