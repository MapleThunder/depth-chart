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

export function App() {
  const { players } = useContext(GlobalContext);

  function onDragEnd(result: DropResult): void {
    const { source, destination, draggableId, reason } = result;
    const filtered_players = byPosition(players, source.droppableId);

    if (!destination) {
      return;
    }

    if (source.droppableId != destination.droppableId) {
      return;
    }

    console.log({ source, destination, draggableId, reason });
    const reordered_list = reorder(
      filtered_players,
      source.index,
      destination.index
    );
    console.log({ reordered_list });

    // let state: IAppState = { ...this.state };

    // if (source.droppableId === "droppable2") {
    //   state = { ...this.state, selected: items };
    // } else if (source.droppableId === "droppable") {
    //   state = { ...this.state, items };
    // }

    // this.setState(state);
  }

  function reorder(
    list: Player[],
    startIndex: number,
    endIndex: number
  ): Player[] {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

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
