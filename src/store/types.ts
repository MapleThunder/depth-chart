export {
  Player,
  Position,
  OptionPayload,
  Options,
  Box,
  PlayerFormState,
  PlayerFormInit,
  PlayerState,
  PlayerAction,
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

// Form types

type PlayerFormState = {
  name: string;
  kit_number: string;
  positions: Array<Position>;
  id?: string;
};

type PlayerFormInit = {
  id?: string;
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
