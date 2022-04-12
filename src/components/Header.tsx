import styled from "@emotion/styled";

export function Header() {
  return (
    <HeaderStlyes>
      <div className="wrapper">
        <h1 className="logo">Depth Chart</h1>
      </div>
    </HeaderStlyes>
  );
}

const HeaderStlyes = styled.header`
  background-color: var(--primary);
  padding: 10px;
  display: flex;
  justify-content: center;

  .wrapper {
    width: 100%;
    max-width: var(--max-width);
  }
`;
