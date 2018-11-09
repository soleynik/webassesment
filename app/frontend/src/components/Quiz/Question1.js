import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';


class Question1 extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>{ this.props.route.title }</h2>

        <div className="panel">
          <div className="status">
            <p className="quiztext">1/12</p>
            <p className="quiztext">14:38</p>
            <button className="quiztext">Use a hint</button>
            <button className="quiztext">Finish</button>
          </div>
        </div>

        <div className="panel">
          <h4 className="ques">What can be done to compute the hash key
              value of a string?</h4>
          <button className="choice">A. Convert them all to their ASCII values</button>
          <button className="choice">B. Generate random numbers for the letters every time</button>
          <button className="choice">C. Give them each a value according to their place
                  in the alphabet</button>
          <button className="choice">D. None of the above</button>
        </div>




        <footer>
          <h1 id="foot"><Link to="/results">NEXT >></Link></h1>
        </footer>
      </div>

    );
  }
}

export default Question1 ;
