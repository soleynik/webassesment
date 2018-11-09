import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';


class Prompt extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>{ this.props.route.title }</h2>


        <div className="panel">
          <h2>Increase your chances</h2>
          <p className="paneltext">Update your profile + post your results</p>
          <p className="paneltext">There will be text.</p>
          <button className="quiztext centered">Edit my profile</button>
        </div>





        <footer>
          <h1 id="foot"><Link to="/profile">CLOSE</Link></h1>
        </footer>
      </div>

    );
  }
}

export default Prompt ;
