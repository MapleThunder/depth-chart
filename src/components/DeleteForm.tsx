import { positions } from "../data/positions";
import { DeleteFormParams } from "../store/types";

export function DeleteForm({ player, position_code }: DeleteFormParams) {
  const position = positions.find((p) => p.value == position_code) || {
    label: "NOT_FOUND",
  };
  console.log({ player });

  return (
    <div>
      <p>
        Delete {position.label} from {player.name}
      </p>
    </div>
  );
}
