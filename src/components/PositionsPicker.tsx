import styled from "@emotion/styled";
import { boxes } from "../data/boxes";

export function PositionsPicker({ positions, handleInput }: Params) {
  return (
    <PickerStyles>
      {boxes.map((box) => {
        return (
          <input
            type="checkbox"
            name="position"
            value={box.position}
            key={box.position}
          />
        );
      })}
    </PickerStyles>
  );
}

const PickerStyles = styled.fieldset`
  border: var(--debug);
`;

type Params = {
  positions: Array<string>;
  handleInput: Function;
};
