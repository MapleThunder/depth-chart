import { DepthChart } from "./DepthChart";
import { Header } from "./Header";
import { AddPlayer } from "./AddPlayer";
import styled from "@emotion/styled";

export function App() {
  return (
    <>
      <Header />
      <MainStyles>
        <div className="wrapper">
          <AddPlayer />
          <DepthChart />
        </div>
      </MainStyles>
    </>
  );
}

const MainStyles = styled.main`
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: var(--max-width);
  }
`;
