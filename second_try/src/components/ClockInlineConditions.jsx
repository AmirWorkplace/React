import React from "react";
import style from "./simple.module.css";
import Button from "./Button";

class ClockInlineConditions extends React.Component {
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

    return (
      <div className={`${style.border} ${style.pt_50}`}>
        <h1>
          This is My React Clock :
          <span className={style.mark}>{date.toLocaleTimeString(locale)}</span>
        </h1>
        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" show={false} />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" show />
        )}
      </div>
    );
  }
}
export default ClockInlineConditions;
// Array.map by sumit vai Videos Link: https://youtu.be/k_q-SCeYLJU?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr
