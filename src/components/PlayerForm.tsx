import styled from "@emotion/styled";
import { useState } from "react";
import { PositionsPicker } from "./PositionsPicker";

const default_form_state: PlayerFormState = {
  name: "",
  kit_number: "",
  positions: [],
};

export function PlayerForm() {
  const [values, setValues] = useState(default_form_state);

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

  return (
    <WrapperStyles>
      <form>
        <h2>Player</h2>
        <label>
          Player Name
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
          Player Number
          <input
            id="kit_number"
            type="text"
            placeholder="10"
            name="kit_number"
            value={values.kit_number}
            onChange={(e) => handleInput(e, "kit_number")}
          />
        </label>
        <label>
          Positions
          <PositionsPicker
            positions={values.positions}
            handleInput={handleInput}
          />
        </label>
        <button type="submit">+</button>
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
`;

export type PlayerFormState = {
  name: string;
  kit_number: string;
  positions: Array<string>;
};
