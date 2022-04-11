import styled from "@emotion/styled";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { positions } from "../data/positions";
import { Position } from "../store/types";

const default_form_state: PlayerFormState = {
  name: "",
  kit_number: "",
  positions: [],
};

export function PlayerForm() {
  const [values, setValues] = useState(default_form_state);
  const [loading, setLoading] = useState(false);

  function handleInput(
    event: React.ChangeEvent<HTMLInputElement>,
    label: string
  ) {
    setValues((values) => ({
      ...values,
      [label]: event.target.value,
    }));
  }

  function handlePositions(parr: Array<Position>) {
    console.log(parr);
    setValues((values) => ({
      ...values,
      positions: parr,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    // console.log(values);
    setValues(default_form_state);
    setLoading(false);
  }

  return (
    <WrapperStyles>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Player</h2>
        <label>
          Player Name <br />
          <input
            id="name"
            type="text"
            placeholder="Eustáquio"
            name="name"
            value={values.name}
            onChange={(e) => handleInput(e, "name")}
          />
        </label>
        <label>
          Player Number <br />
          <input
            id="kit_number"
            type="text"
            placeholder="7"
            name="kit_number"
            value={values.kit_number}
            onChange={(e) => handleInput(e, "kit_number")}
          />
        </label>
        <label>
          Positions <br />
          <MultiSelect
            options={positions}
            value={values.positions}
            onChange={(e: Array<Position>) => handlePositions(e)}
            labelledBy="Select"
          />
        </label>
        <button type="submit" disabled={loading} aria-busy={loading}>
          Submit
        </button>
      </form>
    </WrapperStyles>
  );
}

const WrapperStyles = styled.div`
  padding: 20px;
  background-color: var(--grey);
  border-radius: 0 0 5px 5px;

  h2 {
    margin-bottom: 5px;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  button {
    width: 75px;
    height: 30px;
    background-color: var(--primary);
    color: var(--text-colour-light);
    border: 1px solid transparent;
    border-radius: 5px;

    &:disabled {
      color: var(--grey);
      background-color: var(--blue-dark);
    }
  }
`;

export type PlayerFormState = {
  name: string;
  kit_number: string;
  positions: Array<Position>;
};
