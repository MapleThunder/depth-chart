import { Player } from "../store/types";

export { empty_player, empty_context };

const empty_player: Player = {
  id: "",
  name: "",
  kit_number: "",
  positions: [],
};

const empty_context = { type: "edit", position: "", player_id: "" };
