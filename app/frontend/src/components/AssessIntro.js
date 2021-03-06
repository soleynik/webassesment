import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
import { ProgressBar } from 'react-bootstrap';

class AssessIntro extends Component {
  render() {
    return (
        <div className="container-fluid">

          <div className="header">


          <div className="top-logo"><img className="shrpas-img" src="./shrpas.jpg" alt=""/></div>

          <div className="top-logo"><img className="avatar-image"  src="./mario.jpg" alt=""/></div>


          </div>




          <div className="content">

            <div className="row row-top-position align-items-center">



                <div className="quiz-header">

                    <h4 className="quiz-header-message">Product Managment Assessment</h4>
                    <p className="quiz-header-message">12 multiple choice questions</p>

                </div>


                <div className="quiz-timeinfo">

                    <p className="quiz-timeinfo-message"><span className="glyphicon glyphicon-time"></span>30 min</p>
                    <p className="quiz-timeinfo-message"><span className="glyphicon glyphicon-question-sign"></span>3 hints</p>


                </div>


                <div className="quiz-info-content">

                    <ul>
                        <li>All questions are of Multiple Choice question type.</li>
                        <li>Among the options A, B, C, D for each question, only ONE of them is correct.</li>
                        <li>Choose the option which you think BEST answers the question.</li>
                        <li>Figure are NOT drawn to scale.</li>
                        <li>Do not refresh page while taking the assessment.</li>
                    </ul>

                </div>

             </div>

          </div>








      <div className="footer">

          <div className="footer-block-bar">

                <ProgressBar className="progressbar" now={35} label={`${"Step 1"}`}  />

          </div>


          <div className="footer-block-start">

                        <Link to="/quiz"><button className="footer-section-start">Start<span className="glyphicon glyphicon-menu-right"></span></button></Link>

          </div>

          </div>
</div>


    );
  }
}

export default AssessIntro;
