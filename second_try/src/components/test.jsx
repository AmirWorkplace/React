class Test extends Component() {
  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
  }

  addActiveClass() {
    //not sure what to do here
  }

  render() {
    <div>
      <div onClick={this.addActiveClass}>
        <p>1</p>
      </div>
      <div onClick={this.addActiveClass}>
        <p>2</p>
      </div>
      <div onClick={this.addActiveClass}>
        <p>3</p>
      </div>
    </div>;
  }
}
