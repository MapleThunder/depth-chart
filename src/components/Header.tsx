import styled from "@emotion/styled";
import { ClearButton } from "./ClearButton";

export function Header() {
  return (
    <HeaderStlyes>
      <div className="wrapper">
        <h1 className="logo">Depth Chart</h1>
        <ClearButton />
      </div>
    </HeaderStlyes>
  );
}

const HeaderStlyes = styled.header`
  width: 100%;
  background-color: var(--primary);
  padding: 10px;
  display: flex;
  justify-content: center;

  .wrapper {
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 900px) {
    .wrapper {
      max-width: 600px;
    }
  }
`;
