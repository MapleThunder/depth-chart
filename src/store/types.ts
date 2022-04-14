export {
  Player,
  Position,
  PlayerAction,
  PlayerState,
  PlayerFormState,
  OptionPayload,
  Options,
  Box,
};

type Player = {
  id: string;
  name: string;
  kit_number: string;
  positions: Array<Position>;
};

type Position = {
  label: string;
  value: string;
  weight: number;
};

type OptionPayload = {
  label: string;
  value: string;
};

type Options = {
  thresholds: {
    okay: number;
    good: number;
  };
};

type Box = {
  label: string;
  classes: string;
  position: string;
  limits: {
    bad: number;
    okay: number;
    good: number;
  };
};

type PlayerFormState = {
  name: string;
  kit_number: string;
  positions: Array<Position>;
};

// Reducer Types
type PlayerState = {
  players: Array<Player>;
  addPlayer: (p: Player) => void | undefined;
};

type PlayerAction = {
  type: string;
  player: Player;
};
