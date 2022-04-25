import { Player } from "../store/types";

export { adjustWeights };

function adjustWeights(incoming: Player[]): Player[] {
  const outgoing = incoming.map((player) => {
    return player;
  });

  return outgoing;
}
