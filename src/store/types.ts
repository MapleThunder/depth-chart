import { FormikHelpers } from "formik";

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
  GlobalProviderParams,
  ListItemParams,
  ModalParams,
  BoxParams,
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
  submitOverride?: (
    values: PlayerFormState,
    actions: FormikHelpers<PlayerFormState>
  ) => {};
};

// Reducer Types
type PlayerState = {
  players: Array<Player>;
  showModal: boolean;
  editPlayer?: Player;
  addPlayer: (p: Player) => void | undefined;
  updatePlayer: (p: Player) => void | undefined;
  openUpdateModal: (p: Player, e?: boolean) => void | undefined;
  closeUpdateModal: () => void | undefined;
};

type PlayerAction = {
  type: string;
  player: Player;
  open?: boolean;
};

type GlobalProviderParams = {
  children: JSX.Element | JSX.Element[];
};

// Component Types
type ListItemParams = {
  player: Player;
  code: string;
};

type ModalParams = {
  // children: JSX.Element | JSX.Element[];
  show: boolean;
  onClose: () => void;
  // pid: string;
  // toggleModal: (change?: boolean) => void;
};

type BoxParams = {
  details: Box;
  players: Array<Player>;
};
