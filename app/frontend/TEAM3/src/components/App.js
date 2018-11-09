import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1 id="logo">TEAM3</h1>     
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;