import styled from "@emotion/styled";

const BoxStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--black);
  border-radius: var(--br);
  text-align: center;
  padding: 5px 10px;

  .box-label-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--black);
    margin-bottom: 5px;
    padding-bottom: 5px;

    .box-label {
      font-weight: 700;
      font-size: 1.2rem;
    }
    .count-pill {
      background-color: var(${(props) => props.filteredClass});
      padding: 2px 5px;
      border-radius: 7px;
      margin-left: 10px;
      border: 1px solid var(--black);
    }
  }
`;

export function Box({ details, players }) {
  const filtered = players.filter((player) =>
    player.positions.includes(details.position)
  );

  function getFilteredClass(num) {
    let colour = "--bad";
    if (num >= 2) colour = "--good";
    else if (num > 0) colour = "--okay";

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
      <ul>
        {filtered.map((player, i) => (
          <li key={i}>{player.name}</li>
        ))}
      </ul>
    </BoxStyles>
  );
}
