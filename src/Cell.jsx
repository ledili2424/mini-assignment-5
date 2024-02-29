import { useState } from "react";

export default function Cell({ setCount }) {
  const [active, setActive] = useState(false);
  function toggleActive() {
    setActive(!active);
    if (!active) {
      setCount((count) => count + 1);
    } else {
      setCount((count) => count - 1);
    }
  }

  const cellColor = {
    backgroundColor: active ? "black" : "white",
  };

  return (
    <div className="cell" onClick={toggleActive} style={cellColor}>
      {active}
    </div>
  );
}
