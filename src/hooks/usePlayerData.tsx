import { useReducer } from "react";
import { Player, PlayerAction, PlayerState } from "../store/types";

function usePlayerData({ reducer = playerReducer }) {
  const local_store = localStorage.getItem("depth-chart.players");
  const default_state: PlayerState = local_store
    ? JSON.parse(local_store)
    : { players: [] };
  const [{ players }, dispatch] = useReducer(reducer, default_state);

  const addPlayer = (player: Player) =>
    dispatch({ type: actionTypes.add, payload: player });

  return { players, addPlayer };
}

function playerReducer(state: PlayerState, action: PlayerAction) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.add: {
      const new_state = { ...state };
      new_state.players.push(payload);
      localStorage.setItem("depth-chart.players", JSON.stringify(new_state));
      return new_state;
    }

    default: {
      return state;
    }
  }
}

const actionTypes = {
  add: "ADD_PLAYER",
  update: "UPDATE_PLAYER",
  delete: "DELETE_PLAYER",
};

export { usePlayerData, actionTypes, playerReducer };
