import { DepthChart } from "./DepthChart";
import { Header } from "./Header";
import { PlayerForm } from "./PlayerForm";
import styled from "@emotion/styled";

export function App() {
  return (
    <>
      <Header />
      <MainStyles>
        <div className="wrapper">
          <PlayerForm />
          <DepthChart />
        </div>
      </MainStyles>
    </>
  );
}

const MainStyles = styled.main`
  .wrapper {
    display: grid;
    grid-template-columns: 250px auto;
    grid-gap: 10px;
    max-width: var(--max-width);
  }
`;
