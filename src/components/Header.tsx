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
  width: 100vw;
  background-color: var(--primary);
  display: flex;
  justify-content: center;

  .wrapper {
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    button {
      vertical-align: middle;
    }
  }

  @media screen and (max-width: 700px) {
    .wrapper {
      max-width: 600px;
      padding: 10px;
    }
  }
`;
