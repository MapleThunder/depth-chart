import { PlayerActionKind, TPlayerAction } from "./actions";
import { IState } from "./initialState";

function reducer(state: IState, action: TPlayerAction): IState {
  const { type, payload } = action;
  const { players } = state;

  switch (type) {
    case PlayerActionKind.ADD_PLAYER:
      const newPayload = [...state.players, payload];
      return { ...state, players: newPayload };

    case PlayerActionKind.UPDATE_PLAYER:
      const updPlayers = players.map((player) => {
        if (player.id == payload.id) {
          return payload;
        } else {
          return player;
        }
      });
      return { ...state, players: updPlayers };

    case PlayerActionKind.REMOVE_PLAYER:
      const rmPlayers = players.filter((player) => {
        return player.id != payload.id;
      });
      return { ...state, players: rmPlayers };

    default:
      return state;
  }
}

export default reducer;
