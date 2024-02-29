import { useState } from "react";
import Cell from "./Cell";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>{`Count: ${count}`}</h3>
      <div className="container">
        <Cell setCount={setCount} />
        <Cell setCount={setCount} />
        <Cell setCount={setCount} />
        <Cell setCount={setCount} />
      </div>
      <div className="card"></div>
    </>
  );
}

export default App;
