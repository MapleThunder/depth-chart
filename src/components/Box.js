import styled from "@emotion/styled";
import { ListItem } from "./ListItem";

const BoxStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--black);
  border-radius: var(--br);
  box-shadow: var(--bs);
  text-align: center;
  padding: 5px 10px;
  background-color: var(--background);

  .box-label-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--black);
    border-radius: var(--br) var(--br) 0 0;
    padding: 5px 10px;
    margin: -5px -10px 5px -10px;
    background-color: var(${(props) => props.filteredClass});

    .box-label {
      font-weight: 700;
      font-size: 1.2rem;
    }
    .count-pill {
      padding: 2px 5px;
      border-radius: 7px;
      margin-left: 10px;
      border: 1px solid var(--black);
      box-shadow: var(--bs-small);
    }
  }
`;

export function Box({ details, players }) {
  const filtered = players.filter((player) =>
    player.positions.includes(details.position)
  );

  function getFilteredClass(num) {
    let colour = "--bad";
    if (num >= details.limits.good) colour = "--good";
    else if (num >= details.limits.okay) colour = "--okay";

    return colour;
  }

  return (
    <BoxStyles
      className={details.classes}
      filteredClass={getFilteredClass(filtered.length)}
    >
      <div className="box-label-wrapper">
        <span className="box-label">{details.label}</span>
        <div className="count-pill">{filtered.length}</div>
      </div>
      <div className="box-list-wrapper">
        <ul>
          {filtered.map((player, i) => (
            <ListItem key={i} player={player} />
          ))}
        </ul>
      </div>
    </BoxStyles>
  );
}
