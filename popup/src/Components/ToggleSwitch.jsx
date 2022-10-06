import React from "react";
import "./ToggleSwitch.css";
import { useState } from "react";

const Switch = () => {
  const [show, setShow] = useState(true);
  const Status = (
    <div>
      <h1>My name is Syed Amir Ali.</h1>
      <h2>I am a Web Programmer !</h2>
      <h3>I Have a Gorgious Computer ...!</h3>
    </div>
  );
  return (
    <div>
      {show ? Status : null}

      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};

export default Switch;
/* const ToggleSwitch = ({ label }) => {
  return (
    <div className="container">
      {label}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
}; * /

/ * 
  let text;
  handleClick(){
    if(props){
      text = "Okey"
    }else{
      text = "sorry"
    }onClick={handleClick}
  }
  return (
    <div>
      <button type="button">Click</button>
      <h1>{props}</h1>
    </div>
  ) * /;
/ * class ToggleSwitch extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" />
          <label className="label">
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    );
  }
} * /
/ * import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/fontawesome-free-solid"; */
