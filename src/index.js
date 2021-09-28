import { render } from "react-dom";
import "./styles/base.scss";

function App() {
  return (
    <div>
      <h1>Ola Mundo !</h1>
    </div>
  );
}

render(<App />, document.getElementById("app"));
