import { MouseEventHandler, ReactNode } from "react";

export type Player = {
  id: string;
  name: string;
  kit_number: string;
  positions: Array<Position>;
};

export type Position = {
  label: string;
  value: string;
  weight: number;
};

export type OptionPayload = {
  label: string;
  value: string;
};

export type Options = {
  thresholds: {
    okay: number;
    good: number;
  };
};

export type Box = {
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

export type PlayerFormState = {
  name: string;
  kit_number: string;
  positions: Array<Position>;
  id?: string;
};

export type PlayerFormInit = {
  player: Player;
  mode?: string;
};

export type ModalFormContext = {
  type: string;
  position: string;
  player_id: string;
};

export type DeleteFormParams = {
  player: Player;
  position_code: string;
};

export type DeleteFormState = {
  position: Position;
  player: Player;
};
// Reducer Types
export type PlayerState = {
  players: Array<Player>;
  showModal: boolean;
  modalContext: ModalFormContext;
  addPlayer: (p: Player) => void | undefined;
  updatePlayer: (p: Player) => void | undefined;
  openModal: (p: Player, context: ModalFormContext) => void | undefined;
  closeUpdateModal: () => void | undefined;
  clearPlayers: () => void | undefined;
  deletePlayerPosition: (
    p: Player,
    context: ModalFormContext
  ) => void | undefined;
  overwritePlayers: (bulk: Player[]) => void | undefined;
};

export type PlayerAction = {
  type: string;
  player: Player;
  context?: ModalFormContext;
  bulk?: Player[];
};

export type GlobalProviderParams = {
  children: JSX.Element | JSX.Element[];
};

// Component Types
export type ListItemParams = {
  player: Player;
  position: string;
  index: number;
};

export type ModalParams = {
  show: boolean;
  onClose: () => void;
};

export type BoxParams = {
  details: Box;
};

export type CancelButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export type Option = {
  label: string;
  value: string;
};

export type CustomSelectProps = {
  label: string;
  options: Array<Option>;
};

export type LinkButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
};
