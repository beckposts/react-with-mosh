import React, { Component } from 'react'; // imrc shorcut

// generate class shortcut: cc
class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  styles = {
    fontSize: '30px',
    fontWeight: 'bold',
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>

        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;

    // We can also return JSX because eventually it gets compiled to JS
    // return count === 0 ? <h1>Zero</h1> : count;

    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
