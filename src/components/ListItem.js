import styled from "@emotion/styled";
import ability from "../data/ability";

export function ListItem({ player, code }) {
  const [position] = player.positions.filter((p) => p.code == code);

  function getAbilityClass(num) {
    let colour = "";

    switch (num) {
      case "5":
        colour = "--great";
        break;
      case "4":
        colour = "--good";
        break;
      case "3":
        colour = "--okay";
        break;
      case "2":
        colour = "--competent";
        break;

      default:
        colour = "--bad";
    }

    return colour;
  }

  return (
    <ListItemStyles abilityColour={getAbilityClass(position.rating)}>
      <span className="player-name">{player.kit_name}</span>
      <span className="ability">{ability[position.rating]}</span>
    </ListItemStyles>
  );
}

const ListItemStyles = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
  padding: 0 10px;

  .player-name {
    margin-right: 10px;
  }

  .ability {
    border: solid 1px var(--black);
    border-radius: var(--br);
    padding: 2px 3px;
    box-shadow: var(--bs-small);
    background-color: var(${(props) => props.abilityColour});
  }
`;
