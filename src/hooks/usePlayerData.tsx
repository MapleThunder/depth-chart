import { useReducer } from "react";
import { actionTypes, playerReducer } from "../context/playerReducer";
import { Player, PlayerState } from "../store/types";

function usePlayerData({ reducer = playerReducer } = {}) {
  const local_store = localStorage.getItem("depth-chart.players");
  const default_state: PlayerState = local_store
    ? JSON.parse(local_store)
    : { players: [] };

  const [state, dispatch] = useReducer(reducer, default_state);

  return { players: state.players };
}

export { usePlayerData };
