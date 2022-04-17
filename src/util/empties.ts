import { Player, PlayerFormState, Position } from "../store/types";

export { empty_player, empty_position, empty_context, empty_form_state };

const empty_player: Player = {
  id: "",
  name: "",
  kit_number: "",
  positions: [],
};

const empty_position: Position = {
  label: "NOT_FOUND",
  value: "",
  weight: 0,
};

const empty_context = { type: "edit", position: "", player_id: "" };

const empty_form_state: PlayerFormState = {
  name: "",
  kit_number: "",
  positions: [],
};
