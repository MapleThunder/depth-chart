import { PlayerAction, PlayerState } from "../store/types";
import { empty_context } from "../util/empties";
import { adjustWeights } from "../util/weightUtils";

function playerReducer(state: PlayerState, action: PlayerAction) {
  const { type, player } = action;
  let new_state: PlayerState;

  switch (type) {
    case actionTypes.add: {
      new_state = { ...state };
      new_state.players = adjustWeights([...state.players, action.player]);
      save(new_state);
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
      let new_players;

      if (player.positions.length > 1) {
        // Remove only the single position
        const filtered_positions = player.positions.filter(
          (pos) => pos.value != action.context?.position
        );
        const updated_player = {
          ...player,
          positions: filtered_positions,
        };
        const filtered_players = state.players.filter((p) => p.id != player.id);
        new_players = [...filtered_players, updated_player];
      } else {
        // Only 1 position remaining, remove entire player object
        new_players = state.players.filter((p) => p.id != player.id);
      }

      new_state = {
        ...state,
        players: new_players,
        showModal: false,
        modalContext: empty_context,
      };
      save(new_state);
      return new_state;
    }

    case actionTypes.openModal: {
      new_state = {
        ...state,
        showModal: true,
        modalContext: action?.context || empty_context,
      };
      return new_state;
    }

    case actionTypes.closeModal: {
      new_state = {
        ...state,
        showModal: false,
        modalContext: empty_context,
      };
      return new_state;
    }

    case actionTypes.clearPlayers: {
      new_state = {
        ...state,
        players: [],
        showModal: false,
      };
      save(new_state);
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
  clearPlayers: "CLEAR_PLAYERS",
};

function save(state: PlayerState) {
  localStorage.setItem("depth-chart.players", JSON.stringify(state));
}

function load(): PlayerState {
  const json_state = localStorage.getItem("depth-chart.players");
  return JSON.parse(json_state || "");
}

export { actionTypes, playerReducer };
