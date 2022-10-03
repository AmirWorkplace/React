import React from "react";
import Style from "./simple.module.css";

export default class Clickcounter extends React.Component {
  state = {
    count: 0,
  };

  CounterClick = () => {
    this.setState((event) => ({ count: event.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className={Style.conteiner}>
        <div
          className={`${Style.py_20_10} ${Style.clickBtn}`}
          onClick={this.CounterClick}
        >
          Click to <span className={Style.mark}>{count}</span> Increase Me{" "}
        </div>
      </div>
    );
  }
}
