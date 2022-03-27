import styled from "@emotion/styled";
import { boxes } from "../data/boxes";

export function PositionsPicker({ positions, handleInput }: Params) {
  return (
    <PickerStyles>
      {boxes.map((box) => {
        return (
          <div className="position-input-wrapper" key={box.position}>
            <input
              type="checkbox"
              name="position"
              id={box.position}
              value={box.position}
            />
            {box.label}
          </div>
        );
      })}
    </PickerStyles>
  );
}

const PickerStyles = styled.fieldset`
  border: var(--debug);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .position-input-wrapper {
    padding: 3px;
  }
`;

type Params = {
  positions: Array<string>;
  handleInput: Function;
};
