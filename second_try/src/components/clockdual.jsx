import React from "react";
import style from "./simple.module.css";
import Button from "./Button";

class ClockDual extends React.Component {
  state = {
    date: new Date(),
    locale: "bn-BD",
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    // console.log("Clock Timer Components Renderd !");

    const { date, locale } = this.state;
    let button;

    if (locale === "bn-BD") {
      button = (
        <div className={`${style.border} ${style.pt_50}`}>
          <h1>
            এই হলো আমাদের বাংলা ঘড়ি :
            <span className={style.mark}>
              {date.toLocaleTimeString(locale)}
            </span>
          </h1>
          <Button change={this.handleClick} locale="en-US">
            Click Me !
          </Button>{" "}
        </div>
      );
    } else {
      button = (
        <div className={`${style.border} ${style.pt_50}`}>
          <h1>
            This is My React Clock :
            <span className={style.mark}>
              {date.toLocaleTimeString(locale)}
            </span>
          </h1>
          <Button change={this.handleClick} locale="bn-BD">
            Click Me !
          </Button>
        </div>
      );
    }
    return button;
  }
}
export default ClockDual;
