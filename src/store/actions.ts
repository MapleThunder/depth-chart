import { OptionPayload, Player } from "./types";

export enum PlayerActionKind {
  ADD_PLAYER = "ADD_PLAYER",
  UPDATE_PLAYER = "UPDATE_PLAYER",
  REMOVE_PLAYER = "REMOVE_PLAYER",
}

export type TPlayerAction = {
  type: PlayerActionKind;
  payload: Player;
};

export enum OptionActionKind {
  CHANGE_COLOUR = "CHANGE_COLOUR",
  CHANGE_THRESHOLD = "CHANGE_THRESHOLD",
}

export enum ThresholdKind {
  OKAY_THRESHOLD = "OKAY_THRESHOLD",
  GOOD_THRESHOLD = "GOOD_THRESHOLD",
}

export type TOptionAction = {
  type: OptionActionKind;
  payload: OptionPayload;
};

//=====================
//  Helper functions
//=====================

// Player Actions
export function addPlayer(payload: Player): TPlayerAction {
  return {
    payload,
    type: PlayerActionKind.ADD_PLAYER,
  };
}

export function updatePlayer(payload: Player): TPlayerAction {
  return {
    payload,
    type: PlayerActionKind.UPDATE_PLAYER,
  };
}

export function removePlayer(payload: Player): TPlayerAction {
  return {
    payload,
    type: PlayerActionKind.REMOVE_PLAYER,
  };
}

// Option Actions
export function updateLowThreshold(amount: number): TOptionAction {
  return {
    payload: {
      label: ThresholdKind.OKAY_THRESHOLD,
      value: `${amount}`,
    },
    type: OptionActionKind.CHANGE_THRESHOLD,
  };
}

export function updateHighThreshold(amount: number): TOptionAction {
  return {
    payload: {
      label: ThresholdKind.GOOD_THRESHOLD,
      value: `${amount}`,
    },
    type: OptionActionKind.CHANGE_THRESHOLD,
  };
}
