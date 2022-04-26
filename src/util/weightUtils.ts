import { positions } from "../data/positions";
import { Player } from "../store/types";
import { byPosition } from "./filters";

export { adjustAllWeights, resetWeights };

function adjustAllWeights(incoming: Player[]): Player[] {
  let outgoing: Player[] = [...incoming];

  // Loop over all positions and arrange weights
  positions.forEach((position) => {
    const { value } = position;
    const filtered_players = byPosition(outgoing, value);
  });

  return outgoing;
}

function resetWeights(incoming: Player[], position: string) {
  const outgoing = incoming.map((p, i) => {
    const new_positions = p.positions.map((pos) => {
      if (pos.value == position) {
        return { ...pos, weight: i };
      } else {
        return pos;
      }
    });
    return { ...p, positions: new_positions };
  });
  return outgoing;
}
