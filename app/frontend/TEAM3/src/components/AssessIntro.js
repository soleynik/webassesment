import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';


class AssessIntro extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>{ this.props.route.title }</h2>

        <div className="panel">
          <h2>Product Manager Assessment</h2>
          <h3>12 Multiple Choice Questions</h3>
          <h3 id="hints">30 min         3 hints</h3>
          <ul>
          <li>All questions are of Multiple Choice question type</li>
          <li>Among the options A, B, C, D for each question, only ONE of them is correct.</li>
          <li>Choose the option which you think BEST answers the question.</li>
          <li>Figures are NOT drawn to scale.</li>
          <li>Do not refresh page while taking the assessment.</li>
          </ul>
        </div>


      


        <footer>
          <h1 id="foot"><Link to="/question1">NEXT >></Link></h1>
        </footer>
      </div>

    );
  }
}

export default AssessIntro;
