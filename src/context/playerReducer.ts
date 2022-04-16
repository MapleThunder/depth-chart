import { PlayerAction, PlayerState } from "../store/types";

function playerReducer(state: PlayerState, action: PlayerAction) {
  const { type, player } = action;
  let new_state: PlayerState;

  switch (type) {
    case actionTypes.add: {
      new_state = { ...state };
      new_state.players = [...state.players, action.player];
      localStorage.setItem("depth-chart.players", JSON.stringify(new_state));
      return new_state;
    }

    case actionTypes.update: {
      const { players } = state;
      const plyr = players.find((p) => p.id == player.id);
      if (!plyr) {
        return state;
      }
      const idx = players.indexOf(plyr);
      const upd_players = players.map((p, i) => {
        if (i == idx) {
          return player;
        } else return p;
      });

      new_state = { ...state, players: upd_players };
      return new_state;
    }

    case actionTypes.delete: {
      console.log("Not yet implemented");
    }

    case actionTypes.openModal: {
      new_state = {
        ...state,
        editPlayer: player,
        showModal: true,
      };
      return new_state;
    }

    case actionTypes.closeModal: {
      new_state = {
        ...state,
        editPlayer: undefined,
        showModal: false,
      };
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
  openModal: "OPEN_MODAL",
  closeModal: "CLOSE_MODAL",
};

export { actionTypes, playerReducer };
