import { DepthChart } from "./DepthChart";
import { Header } from "./Header";
import styled from "@emotion/styled";
import { GlobalProvider } from "../context/GlobalState";
import { Sidebar } from "./Sidebar";

export function App() {
  return (
    <GlobalProvider>
      <Header />
      <MainStyles>
        <div className="wrapper">
          <Sidebar />
          <DepthChart />
        </div>
      </MainStyles>
    </GlobalProvider>
  );
}

const MainStyles = styled.main`
  display: flex;
  justify-content: center;

  .wrapper {
    display: grid;
    grid-template-columns: 250px auto;
    grid-gap: 10px;
    width: 100%;
    max-width: var(--max-width);
  }
`;
