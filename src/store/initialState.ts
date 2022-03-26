import { Options, Player } from "./types";

export interface IState {
  options: Options;
  players: Array<Player>;
}

const initialState: IState = {
  options: {
    thresholds: {
      okay: 1,
      good: 2,
    },
  },
  players: [],
};

export default initialState;
