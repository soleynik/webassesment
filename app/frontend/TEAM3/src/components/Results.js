import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';


class Results extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>{ this.props.route.title }</h2>

        <div className="panel">
          <h3 className="results">Congratulations, you passed!</h3>

        </div>



        <footer>
          <h1 id="foot"><Link to="/video">NEXT >></Link></h1>
        </footer>
      </div>

    );
  }
}

export default Results ;
