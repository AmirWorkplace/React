import React from "react";
import Style from "./simple.module.css";

export default class Form extends React.Component {
  state = {
    title: "JavaScript",
    texts: "javaScript is Awosome !",
    library: "React.jsx",
    checkit: false,
  };

  handleChange = (event) => {
    if (event.target.type === "text") {
      this.setState({
        title: event.target.value,
      });
    } else if (event.target.type === "textarea") {
      this.setState({
        texts: event.target.value,
      });
    } else if (event.target.type === "select-one") {
      this.setState({
        library: event.target.value,
      });
    } else if (event.target.type === "checkbox") {
      this.setState({
        checkit: event.target.checked,
      });
    } else {
      console.log(this.state.library);
      console.log(event.target.type);
      console.log("Nothing Here!");
    }
  };

  submitHandler = (event) => {
    const { title, texts, library, checkit } = this.state;
    event.preventDefault();
    console.log(title, texts, library, checkit);
  };

  render() {
    const { title, texts, library, checkit } = this.state;
    // const styles = [Style.border, Style.pt_50, Style.lh]

    return (
      <div className={`${Style.border} ${Style.pt_50} ${Style.lh}`}>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="Input">Please fill up the Form : </label>
          <input
            onChange={this.handleChange}
            type="text"
            value={title}
            placeholder="Inter Your MindPurpuse !"
          />
          <h1>{title}</h1>
          <br />
          <br />
          <label htmlFor="textarea">This is TextArea : </label>
          <textarea
            className={`${Style.textarea} ${Style.tmar}`}
            name="texts"
            value={texts}
            onChange={this.handleChange}
          ></textarea>
          <h1 className={Style.h1mar}>{texts}</h1>
          <br />
          <br />
          <br />

          <select value={library} onChange={this.handleChange}>
            <option value="React.jsx">React</option>
            <option value="Tiny.jsu">Tiny</option>
            <option value="Electon.js">Electron</option>
            <option value="Angular.js">Angular</option>
            <option value="Vue.js">Vue</option>
          </select>
          <h1>{library}</h1>

          <br />
          <br />
          <br />

          <label htmlFor="checkbox">This is for Check Mark : </label>
          <input
            type="checkbox"
            checked={checkit}
            onChange={this.handleChange}
          />
          <h1>{checkit ? "Checked Out" : "Not Checked"}</h1>

          <br />
          <br />
          <br />

          <input value="Submit" type="submit" />
        </form>
      </div>
    );
  }
}
