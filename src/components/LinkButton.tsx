import styled from "@emotion/styled";
import { LinkButtonProps } from "../store/types";

export function LinkButton({ onClick, children, className }: LinkButtonProps) {
  return (
    <LinkButtonStyles {...{ onClick, className }} type="button">
      {children}
    </LinkButtonStyles>
  );
}

const LinkButtonStyles = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  text-decoration: underline;
  cursor: pointer;
`;
