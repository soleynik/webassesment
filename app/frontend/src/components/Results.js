import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
import { ProgressBar } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';

class Results extends Component {
  render() {
      var data = {
          labels: [
              "Right",
              "Wrong"
          ],
          datasets: [
              {
                  data: [localStorage.getItem('SHRPASSCORE'), 100-localStorage.getItem('SHRPASSCORE')],
                  backgroundColor: [
                      "#36A2EB",
                      "#FF6384"
                  ],
                  hoverBackgroundColor: [
                      "#36A2EB",
                      "#FF6384"

                  ]
              }]
      };
    return (
      <div className="container-fluid">

          <div className="header">


                <div className="top-logo"><img className="shrpas-img" src="./shrpas.jpg" alt=""/></div>

                <div className="top-logo"><img className="avatar-image"  src="./mario.jpg" alt=""/></div>


          </div>


          <div className="content">

          <div className="row row-top-position align-items-center">




          <div className="col col-sm-12 col-md-12 col-lg-6">
          <div className="form-group">
          <h4 className="quiz-header-message">Your score is {localStorage.getItem('SHRPASSCORE')}</h4>
      <div className="big-avatar">
          <Pie data={data} className="img-avatar"/>
          </div>
          </div>

          </div>


          <div className="col col-sm-12 col-md-12 col-lg-6 fixed">

          <div className="form-group">
          <h4 className="quiz-header-message"></h4>
      </div>

      </div>


      <div className="col col-sm-12 col-md-12 col-lg-6">

          <div className="form-group">
          <h4 className="quiz-header-message"></h4>
      </div>

      </div>

      </div>



      </div>


      <div className="footer">

          <div className="footer-block-bar">

                    <ProgressBar className="progressbar" now={65} label={`${"Step 2"}`}  />

            </div>

            <div className="footer-block-start">

                    <Link to="/video"><button className="footer-section-start">Next<span className="glyphicon glyphicon-menu-right"></span></button></Link>

            </div>
          </div>
</div>

    );
  }
}

export default Results ;
