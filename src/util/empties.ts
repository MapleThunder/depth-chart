import { Player } from "../store/types";

export { empty_player, empty_position, empty_context };

const empty_player: Player = {
  id: "",
  name: "",
  kit_number: "",
  positions: [],
};

const empty_position = {
  label: "NOT_FOUND",
  value: "",
  weight: 0,
};

const empty_context = { type: "edit", position: "", player_id: "" };
