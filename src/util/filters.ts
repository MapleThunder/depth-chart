import { Player } from "../store/types";

export { byPosition };

function byPosition(players: Player[], position: string) {
  return players
    .filter((player: Player) => {
      const pos = player.positions;
      for (let i = 0; i < pos.length; i++) {
        if (pos[i].value == position) {
          return true;
        }
      }
      return false;
    })
    .sort(function (a: Player, b: Player) {
      let r_a: number = 0,
        r_b: number = 0;
      a.positions.forEach((p) => {
        if (p.value == position) {
          r_a = p.weight;
        }
      });
      b.positions.forEach((p) => {
        if (p.value == position) {
          r_b = p.weight;
        }
      });
      return r_a - r_b;
    });
}
