import styled from "@emotion/styled";
import { IconContext } from "react-icons";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { DepthChart } from "./DepthChart";
import { Header } from "./Header";
import { GlobalContext, GlobalProvider } from "../context/GlobalState";
import { Sidebar } from "./Sidebar";
import { Modal } from "./Modal";
import { Player } from "../store/types";
import { byPosition } from "../util/filters";
import { useContext } from "react";
import { resetWeights } from "../util/weightUtils";

export function App() {
  return (
    <GlobalProvider>
      <IconContext.Provider value={{ className: "react-icon" }}>
        <Header />
        <MainStyles>
          <div className="wrapper">
            <Sidebar />
            <DepthChart />
          </div>
        </MainStyles>
        <Modal />
      </IconContext.Provider>
    </GlobalProvider>
  );
}

const MainStyles = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;

  .wrapper {
    display: grid;
    grid-template-columns: 250px auto;
    grid-gap: 10px;
    width: 100%;
    max-width: var(--max-width);

    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
