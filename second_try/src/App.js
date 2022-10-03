import React from "react";
import "./App.css";
import Clickcounter from "./components/ClickCounter";
import Clickcounters from "./components/Clickcounters";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="App">
      <Clickcounter />
      <Clickcounters />
      <HoverCounter />
    </div>
  );
}

export default App;
