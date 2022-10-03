import React from "react";
import "./style.css";

export default class Popup extends React.Component {
  render() {
    return (
      <div className="popup active">
        <div className="container">
          <div className="heading">
            <h1 className="serial-no">01</h1>
            <h2 className="question">About me Who I am ?</h2>
          </div>
          <div className="settings">
            <i className="fas fa-copy copy-btn"></i>
            <i className="fas fa-arrows-up-to-line show-btn"></i>
          </div>
        </div>
        <div className="content">
          <div className="peragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ullam.
            Sunt dolor voluptate eius? Ad, quos, labore cumque tempora
            dignissimos aspernatur quam veritatis eos odit saepe eius molestias
            recusandae praesentium! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam eveniet provident, delectus optio facilis
            in quasi tenetur maiores laborum deleniti nobis iure magni id
            corporis animi exercitationem nesciunt adipisci at.
          </div>
          <div className="connections">
            <div className="contact">
              <a href="#"> Contact Me</a>
            </div>
            <div className="connect">
              <a href="#">Connect Me</a>
            </div>
          </div>
          <div className="serial-num">
            <h1>01</h1>
          </div>
        </div>
      </div>
    );
  }
}
