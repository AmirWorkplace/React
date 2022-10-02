import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Form from "./components/Form";
import Clock from "./components/Clock";
import Togle from "./components/toggle";
import Simple from "./components/simple";
import ClockDual from "./components/clockdual";
import ClockList from "./components/ClockList";
import ClockInlineConditions from "./components/ClockInlineConditions";
// import Eventlistener from "./components/reactEventlistener";

function App() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Simple />
      <Togle />
      {/* <Eventlistener /> */}
      <Clock />
      <ClockDual />
      <ClockInlineConditions />
      <ClockList quantities={array} />
      <Form />
    </div>
  );
}

export default App;
