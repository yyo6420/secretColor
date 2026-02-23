import "./stlyles/App.css";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="page">
      <h1 className="pageTitle">מצא את הצבע הסודי</h1>
      <div>
        <Board setCounter={setCounter} />
      </div>
      <h2>
        מספר ניחושים: <span className="counter">{counter}</span>
      </h2>
    </div>
  );
}

export default App;
