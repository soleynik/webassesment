import React, { Component } from 'react';
import { browserHistory } from 'react-router';
 import { Link } from 'react-router';

class Home extends Component {



  render() {
    return (
      <div className="container-fluid">
        <h2>Welcome to SHRPAS.</h2>

        <hr />



          <h1 id="home"><Link to="login">GET STARTED!</Link></h1>

      </div>
    );
  }
}

export default Home;
