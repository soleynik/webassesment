import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';


class Profile extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>{ this.props.route.title }</h2>


        <div>
          <h2 className="centertext">Lin Park</h2>
          <h4 className="centertext">Product Manager</h4>
          <p className="centertext">About Link Park and profile</p>
          <div className="panel">
            <h2>RESULTS</h2>
          </div>
        </div>





        <footer>
          <h1 id="foot"><Link to="/"> BACK</Link></h1>
        </footer>
      </div>

    );
  }
}

export default Profile ;
