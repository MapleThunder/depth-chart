import { Position } from "../store/types";

export function CheckboxList({ list, playerPositions }: Params) {
  return (
    <>
      {list.map((position) => (
        <div className="position-check">
          <input
            className="position-check-input"
            type="checkbox"
            name="position"
            id={position.code}
            value={position.code}
            checked={playerPositions.includes(position.code)}
          />
          <label className="position-check-label" htmlFor={position.code}>
            {position.label}
          </label>
        </div>
      ))}
    </>
  );
}

type Params = {
  list: Array<Position>;
  playerPositions: Array<string>;
};
