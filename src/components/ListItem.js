import styled from "@emotion/styled";

export function ListItem({ player }) {
  return <ListItemStyles>{player.kit_name}</ListItemStyles>;
}

const ListItemStyles = styled.li`
  display: flex;
  border: var(--debug);
  padding-bottom: 7px;

  &:last-child {
    padding-bottom: 0;
  }
`;
