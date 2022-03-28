import styled from "@emotion/styled";
import { positions as p_list } from "../data/positions";
import { CheckboxList } from "./CheckboxList";

export function PositionsPicker({ positions, handleInput }: Params) {
  return (
    <PickerStyles>
      <div>Position</div>
      <CheckboxList list={p_list} playerPositions={[]} />
    </PickerStyles>
  );
}

const PickerStyles = styled.fieldset`
  border: var(--debug);
  display: flex;
  justify-content: center;
  width: 100%;
`;

type Params = {
  positions: Array<string>;
  handleInput: Function;
};
