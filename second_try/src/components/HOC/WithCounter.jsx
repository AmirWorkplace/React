import React from "react";

const WithCounter = (OriginalCounter) => {
  class newComponents extends React.Component {
    state = {
      count: 0,
    };

    IncrementCount = () => {
      this.setState((eventState) => ({ count: eventState.count + 1 }));
    };

    render() {
      const { count } = this.state;

      return (
        <OriginalCounter count={count} IncrementCount={this.IncrementCount} />
      );
    }
  }

  return newComponents;
};

export default WithCounter;
