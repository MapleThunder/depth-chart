import styled from "@emotion/styled";
import { ListItem } from "./ListItem";
import { Box, Player } from "../store/types";

export function Box({ details, players }: Params) {
  const filtered = players
    .filter((player: Player) => {
      const pos = player.positions;
      for (let i = 0; i < pos.length; i++) {
        if (pos[i].code == details.position) {
          return true;
        }
      }
      return false;
    })
    .sort(function (a: Player, b: Player) {
      let r_a: number = 0,
        r_b: number = 0;
      a.positions.forEach((p) => {
        if (p.code == details.position) {
          r_a = p.weight;
        }
      });
      b.positions.forEach((p) => {
        if (p.code == details.position) {
          r_b = p.weight;
        }
      });
      return r_b - r_a;
    });

  function getFilteredClass(num: number): string {
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
          {filtered.map((player: Player, i: number) => (
            <ListItem key={i} player={player} code={details.position} />
          ))}
        </ul>
      </div>
    </BoxStyles>
  );
}

const BoxStyles = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--black);
  border-radius: var(--br);
  box-shadow: var(--bs);
  text-align: center;
  padding: 5px 0;
  background-color: var(--background);
  min-height: 80px;

  .box-label-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--black);
    border-radius: var(--br) var(--br) 0 0;
    padding: 5px 10px;
    margin: -5px 0 0 0;
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
      box-shadow: var(--bs-inset);
    }
  }

  .box-list-wrapper ul li:nth-child(even) {
    background-color: var(--background-stripe);
  }
`;

type Params = {
  details: Box;
  players: Array<Player>;
};

type StyleProps = {
  filteredClass: string;
};
