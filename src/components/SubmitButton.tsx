import styled from "@emotion/styled";
import { ButtonProps } from "../store/types";

export function SubmitButton({ children }: ButtonProps) {
  return <SubmitButtonStyles type="submit">{children}</SubmitButtonStyles>;
}

const SubmitButtonStyles = styled.button`
  width: 150px;
  height: 30px;
  background-color: var(--primary);
  color: var(--text-colour-light);
  border: 1px solid transparent;
  border-radius: 5px;

  &:disabled {
    color: var(--grey);
    background-color: var(--blue-dark);
  }
`;
