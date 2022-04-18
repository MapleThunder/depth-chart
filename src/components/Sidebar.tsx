import styled from "@emotion/styled";
import { empty_player } from "../util/empties";
import { PlayerForm } from "./PlayerForm";

export function Sidebar() {
  return (
    <SidebarStyles>
      <h2>Add Player</h2>
      <div className="button-wrapper"></div>
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

  @media screen and (max-width: 900px) {
    width: 100%;
    padding-right: 0;
  }

  h2 {
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: solid 1px var(--background-stripe);
  }
`;
