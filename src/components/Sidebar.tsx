import styled from "@emotion/styled";
import { PlayerForm } from "./PlayerForm";

export function Sidebar() {
  return (
    <SidebarStyles>
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
`;
