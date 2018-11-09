import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';


class Thanks extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>{ this.props.route.title }</h2>


        <div className="panel">
          <h2>Thank you for completing the assessment</h2>
          <p className="paneltext">There will be text. There will be text.
             There will be text. There will be text.</p>
        </div>





        <footer>
          <h1 id="foot"><Link to="/prompt">NEXT >></Link></h1>
        </footer>
      </div>

    );
  }
}

export default Thanks ;
