import styled from "@emotion/styled";
import { IconContext } from "react-icons";
import { DragDropContext } from "react-beautiful-dnd";
import { DepthChart } from "./DepthChart";
import { Header } from "./Header";
import { GlobalProvider } from "../context/GlobalState";
import { Sidebar } from "./Sidebar";
import { Modal } from "./Modal";

export function App() {
  function onDragEnd() {}
  return (
    <GlobalProvider>
      <IconContext.Provider value={{ className: "react-icon" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Header />
          <MainStyles>
            <div className="wrapper">
              <Sidebar />
              <DepthChart />
            </div>
          </MainStyles>
          <Modal />
        </DragDropContext>
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
