import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { Player, PlayerState } from "../store/types";
import { actionTypes, playerReducer } from "./playerReducer";

const initial_state: PlayerState = {
  players: [
    {
      id: uuid(),
      name: "Morelli",
      kit_number: "10",
      positions: [
        {
          label: "Centre Att-Mid",
          value: "CAM",
          weight: 0,
        },
      ],
    },
  ],
};

export const GlobalContext = createContext(initial_state);

export function GlobalProvider({ children }) {
  const [{ players }, dispatch] = useReducer(playerReducer, initial_state);

  const addPlayer = (player: Player) =>
    dispatch({ type: actionTypes.add, player });

  return (
    <GlobalContext.Provider
      value={{
        players: players,
        addPlayer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
