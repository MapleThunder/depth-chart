import styled from "@emotion/styled";

export function ListItem({ player, code }) {
  const [position] = player.positions.filter((p) => p.code == code);

  return (
    <ListItemStyles>
      <span>{player.kit_name}</span>
      <span>{position.rating}</span>
    </ListItemStyles>
  );
}

const ListItemStyles = styled.li`
  display: flex;
  justify-content: space-between;
  height: 27px;
  align-items: center;

  border: var(--debug);
`;
