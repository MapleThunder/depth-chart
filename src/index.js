import { render } from "react-dom";
import { DepthChart } from "./components/DepthChart";
import { Header } from "./components/Header";
import "./styles/base.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <DepthChart />
      </main>
    </>
  );
}

render(<App />, document.getElementById("app"));
