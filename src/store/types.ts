export type Player = {
  id: string;
  name: string;
  number: string;
  positions: Array<Position>;
};

export type Position = {
  label: string;
  code: string;
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
