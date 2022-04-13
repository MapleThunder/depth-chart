import { PlayerAction, PlayerState } from "../store/types";

function playerReducer(state: PlayerState, action: PlayerAction) {
  const { type, player } = action;
  let new_state;

  switch (type) {
    case actionTypes.add: {
      new_state = { ...state };
      new_state.players = [...state.players, player];
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

export { actionTypes, playerReducer };
