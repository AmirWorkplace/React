import React from "react";
import "./App.css";
import MainPopup from "./Components/MainPopup";
import Theme from "./Theme";
import Style from "./style.module.css";

function App() {
  // console.log(document.body.classList.add("darkTheme"));
  return (
    <>
      <section className={Style.PopUpSections}>
        <div className={Style.theme__btn}>
          <Theme />
        </div>
        <div className="left-side">
          <div>
            <MainPopup />
            <MainPopup />
            <MainPopup />
          </div>
        </div>
        <div className="rightt-side">
          <div>
            <MainPopup />
            <MainPopup />
            <MainPopup />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

/* import Button from "./Components/Button";
import FaqPopup from "./Components/FaqPopup";
import Popup from "./Components/Popup";
import Switch from "./Components/ToggleSwitch.jsx";
import ToggleSwitch from "./Components/ToggleSwitch";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */
/* <FontAwesomeIcon icon={faCheckSquare} /> */
/* <Button /> */
/* <FaqPopup /> */
/* <Switch /> */
/* <Popup /> */
/* <ToggleSwitch props="subscribe" /> */
