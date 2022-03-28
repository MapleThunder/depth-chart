import styled from "@emotion/styled";
import React, { useState } from "react";
import { PositionsPicker } from "./PositionsPicker";

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
    event.persist();
    setValues((values) => ({
      ...values,
      [label]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    console.log(values);
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
            placeholder="Name"
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
            placeholder="10"
            name="kit_number"
            value={values.kit_number}
            onChange={(e) => handleInput(e, "kit_number")}
          />
        </label>
        <PositionsPicker
          positions={values.positions}
          handleInput={handleInput}
        />
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
  positions: Array<string>;
};
