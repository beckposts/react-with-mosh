import React, { Component } from 'react'; // imrc shorcut

// generate class shortcut: cc
class Counter extends Component {
  state = {
    count: 2,
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;

    // We can also return JSX because eventually it gets compiled to JS
    // return count === 0 ? <h1>Zero</h1> : count;

    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
