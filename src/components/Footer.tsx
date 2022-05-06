import styled from "@emotion/styled";

export function Footer() {
  return (
    <FooterStyles>
      <div className="wrapper">
        Created by&nbsp;
        <a href="https://github.com/MapleThunder">Niko Bentley</a>
      </div>
    </FooterStyles>
  );
}

const FooterStyles = styled.footer`
  width: 100%;
  height: 60px;
  background-color: var(--primary);
  color: var(--text-colour-light);

  .wrapper {
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`;
