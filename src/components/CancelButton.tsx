import styled from "@emotion/styled";
import { CancelButtonProps } from "../store/types";

export function CancelButton({ onClick, ...props }: CancelButtonProps) {
  return (
    <CancelButtonStyles
      {...{ onClick }}
      type="button"
      className="button-cancel"
    >
      Cancel
    </CancelButtonStyles>
  );
}

const CancelButtonStyles = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  text-decoration: underline;
  color: var(--error);
  cursor: pointer;
`;
