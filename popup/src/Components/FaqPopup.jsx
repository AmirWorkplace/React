import React from "react";
import "./style.css";
import { useState } from "react";
import Content from "./Content";
import CopyToClipboard from "react-copy-to-clipboard";

const FaqPopup = ({
  Questions,
  Contents,
  Contactslink,
  Connectlink,
  SerialNumber,
}) => {
  const [show, setShow, setCopied] = useState(false);
  const value = useState(Contents);
  const ShowStatus = (
    <div className="content">
      <Content textContnts={Contents} />
      <div className="connections">
        <div className="contact">
          <a href={Contactslink}> Contact Me</a>
        </div>
        <div className="connect">
          <a href={Connectlink}>Connect Me</a>
        </div>
      </div>
      <div className="serial-num">
        <h1>{SerialNumber}</h1>
      </div>
    </div>
  );

  return (
    <div className="popup">
      <div className="container">
        <div className="heading">
          <h1 className="serial-no">{SerialNumber}</h1>
          <h2 className="question">{Questions}</h2>
        </div>
        <div className="settings">
          <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
            <i className="fas fa-copy copy-btn"></i>
          </CopyToClipboard>
          <i
            className={`fas fa-arrows-up-to-line show-btn ${
              show ? "show__roate" : null
            }`}
            onClick={() => setShow(!show)}
          ></i>
        </div>
      </div>
      {show ? ShowStatus : null}
    </div>
  );
};
export default FaqPopup;
