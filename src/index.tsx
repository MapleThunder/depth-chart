import { render } from "react-dom";
import { DepthChart } from "./components/DepthChart";
import { Header } from "./components/Header";
import { AddPlayer } from "./components/AddPlayer";
import "./styles/base.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <AddPlayer />
        <DepthChart />
      </main>
    </>
  );
}

render(<App />, document.getElementById("app"));
