import { createContext, FC, ReactNode, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { Player, PlayerState } from "../store/types";
import { actionTypes, playerReducer } from "./playerReducer";

function init(): PlayerState {
  const local_store = localStorage.getItem("depth-chart.players");
  const default_state = local_store ? JSON.parse(local_store) : { players: [] };

  return {
    ...default_state,
    id: uuid(),
    addPlayer: () => {
      console.log("I SHOULDN'T RUN");
    },
  };
}

const GlobalContext = createContext(init());

function GlobalProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [{ players }, dispatch] = useReducer(playerReducer, init());

  const addPlayer = (player: Player) =>
    dispatch({ type: actionTypes.add, player });

  return (
    <GlobalContext.Provider
      value={{
        players,
        addPlayer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
