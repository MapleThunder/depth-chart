import { createContext, useReducer } from "react";
import { GlobalProviderParams, Player, PlayerState } from "../store/types";
import { actionTypes, playerReducer } from "./playerReducer";

function init(): PlayerState {
  const local_store = localStorage.getItem("depth-chart.players");
  const default_state = local_store ? JSON.parse(local_store) : { players: [] };

  return {
    ...default_state,
    showModal: false,
    editPlayer: undefined,
    addPlayer: () => {},
    updatePlayer: () => {},
    openUpdateModal: () => {},
    closeUpdateModal: () => {},
  };
}

const empty_player: Player = {
  id: "",
  name: "",
  kit_number: "",
  positions: [],
};

const GlobalContext = createContext(init());

function GlobalProvider({ children }: GlobalProviderParams) {
  const [{ players, showModal }, dispatch] = useReducer(playerReducer, init());

  function addPlayer(player: Player) {
    dispatch({ type: actionTypes.add, player });
  }

  function updatePlayer(player: Player) {
    dispatch({ type: actionTypes.update, player });
  }

  function openUpdateModal(player: Player) {
    dispatch({ type: actionTypes.openModal, player });
  }

  function closeUpdateModal() {
    dispatch({
      type: actionTypes.closeModal,
      player: empty_player,
    });
  }

  function clearPlayers() {
    dispatch({
      type: actionTypes.clearPlayers,
      player: empty_player,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        players,
        showModal,
        addPlayer,
        updatePlayer,
        openUpdateModal,
        closeUpdateModal,
        clearPlayers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
