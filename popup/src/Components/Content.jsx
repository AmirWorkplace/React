import React from "react";
import "./style.css";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaHeight: 38,
    };
  }

  handleKeyUp(evt) {
    let newHeight = Math.max(Math.min(evt.target.scrollHeight + 2, 3000), 38);
    if (newHeight !== this.state.textareaHeight) {
      this.setState({
        textareaHeight: newHeight,
      });
    }
  }

  render() {
    const { textContnts } = this.props;
    let textareaStyle = { height: this.state.textareaHeight };

    return (
      <>
        <textarea
          readOnly
          className="textArea"
          onMouseEnter={this.handleKeyUp.bind(this)}
          style={textareaStyle}
        >
          {textContnts}
        </textarea>
      </>
    );
  }
}
