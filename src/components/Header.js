import styled from "@emotion/styled";

const HeaderStlyes = styled.header`
  background-color: var(--primary);
  padding: 10px;
`;

export function Header() {
  return (
    <HeaderStlyes>
      <h1 className="logo">Depth Chart</h1>
    </HeaderStlyes>
  );
}
