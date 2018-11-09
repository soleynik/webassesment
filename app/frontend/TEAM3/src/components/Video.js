import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';


class Video extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>{ this.props.route.title }</h2>


        <div className="panel">
          <div className="status">
            <button className="quiztext">SKIP</button>
          </div>
        </div>

        <div className="panel">
        <h2 className="ques">Tell us why you want this position</h2>
        <div className="mock"></div>
        <div>
          <button className="quiztext record">Record</button>
          <button className="quiztext">M</button>
        </div>
        </div>





        <footer>
          <h1 id="foot"><Link to="/thanks">NEXT >></Link></h1>
        </footer>
      </div>

    );
  }
}

export default Video ;
