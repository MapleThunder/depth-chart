import { Box } from "../store/types";

export const boxes: Array<Box> = [
  {
    label: "Striker",
    classes: "striker",
    position: "STK",
    limits: {
      bad: 0,
      okay: 1,
      good: 2,
    },
  },
  {
    label: "Left Wing",
    classes: "left a-mid",
    position: "LAM",
    limits: {
      bad: 0,
      okay: 1,
      good: 2,
    },
  },
  {
    label: "Centre Att-Mid",
    classes: "centre a-mid",
    position: "CAM",
    limits: {
      bad: 0,
      okay: 1,
      good: 2,
    },
  },
  {
    label: "Right Wing",
    classes: "right a-mid",
    position: "RAM",
    limits: {
      bad: 0,
      okay: 1,
      good: 2,
    },
  },
  {
    label: "Centre Mid",
    classes: "centre mid",
    position: "CMD",
    limits: {
      bad: 0,
      okay: 2,
      good: 4,
    },
  },
  {
    label: "Left Fullback",
    classes: "left def",
    position: "LFB",
    limits: {
      bad: 0,
      okay: 1,
      good: 2,
    },
  },
  {
    label: "Centreback",
    classes: "centre def",
    position: "CTB",
    limits: {
      bad: 0,
      okay: 2,
      good: 4,
    },
  },
  {
    label: "Right Fullback",
    classes: "right def",
    position: "RFB",
    limits: {
      bad: 0,
      okay: 1,
      good: 2,
    },
  },
  {
    label: "Goal Keeper",
    classes: "keeper",
    position: "GKP",
    limits: {
      bad: 0,
      okay: 1,
      good: 2,
    },
  },
];
