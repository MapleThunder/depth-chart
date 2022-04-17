import { createContext, useReducer } from "react";
import {
  GlobalProviderParams,
  ModalFormContext,
  Player,
  PlayerState,
} from "../store/types";
import { empty_context, empty_player } from "../util/empties";
import { actionTypes, playerReducer } from "./playerReducer";

function init(): PlayerState {
  const local_store = localStorage.getItem("depth-chart.players");
  const default_state = local_store ? JSON.parse(local_store) : { players: [] };

  return {
    ...default_state,
    showModal: false,
    modalContext: empty_context,
    addPlayer: () => {},
    updatePlayer: () => {},
    openUpdateModal: () => {},
    closeUpdateModal: () => {},
  };
}

const GlobalContext = createContext(init());

function GlobalProvider({ children }: GlobalProviderParams) {
  const [{ players, showModal, modalContext }, dispatch] = useReducer(
    playerReducer,
    init()
  );

  function addPlayer(player: Player) {
    dispatch({ type: actionTypes.add, player });
  }

  function updatePlayer(player: Player) {
    dispatch({ type: actionTypes.update, player });
  }

  function openModal(player: Player, context: ModalFormContext) {
    dispatch({ type: actionTypes.openModal, player, context });
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
        modalContext,
        addPlayer,
        updatePlayer,
        openModal,
        closeUpdateModal,
        clearPlayers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
