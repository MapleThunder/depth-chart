import { FormikHelpers } from "formik";
import { MouseEventHandler, ReactNode } from "react";

export {
  Player,
  Position,
  OptionPayload,
  Options,
  Box,
  PlayerFormState,
  PlayerFormInit,
  ModalFormContext,
  DeleteFormParams,
  DeleteFormState,
  PlayerState,
  PlayerAction,
  GlobalProviderParams,
  ListItemParams,
  ModalParams,
  BoxParams,
  CancelButtonProps,
  ButtonProps,
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
  player: Player;
  submitOverride?: (
    values: PlayerFormState,
    actions: FormikHelpers<PlayerFormState>
  ) => {};
};

type ModalFormContext = {
  type: string;
  position: string;
  player_id: string;
};

type DeleteFormParams = {
  player: Player;
  position_code: string;
};

type DeleteFormState = {
  position: Position;
  player: Player;
};
// Reducer Types
type PlayerState = {
  players: Array<Player>;
  showModal: boolean;
  modalContext: ModalFormContext;
  addPlayer: (p: Player) => void | undefined;
  updatePlayer: (p: Player) => void | undefined;
  openModal: (p: Player, context: ModalFormContext) => void | undefined;
  closeUpdateModal: () => void | undefined;
  clearPlayers: () => void | undefined;
};

type PlayerAction = {
  type: string;
  player: Player;
  context?: ModalFormContext;
};

type GlobalProviderParams = {
  children: JSX.Element | JSX.Element[];
};

// Component Types
type ListItemParams = {
  player: Player;
  position: string;
};

type ModalParams = {
  show: boolean;
  onClose: () => void;
};

type BoxParams = {
  details: Box;
  players: Array<Player>;
};

type CancelButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

type ButtonProps = {
  children: ReactNode;
  className?: string;
};
