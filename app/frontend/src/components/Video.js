import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
import RecordPage from './RecordPage';
import { ProgressBar } from 'react-bootstrap';


class Video extends Component {
  render() {
    return (
      <div className="container-fluid">


          <div className="header">


                <div className="top-logo"><img className="shrpas-img" src="./shrpas.jpg" alt=""/></div>

                <div className="top-logo"><img className="avatar-image"  src="./mario.jpg" alt=""/></div>


          </div>



          <div className="content">

                <div className="row row-top-position align-items-center">




                    <div className="col col-sm-12 col-md-12 col-lg-12 fixed">

                        <h4 className="quiz-header-message">Tell us why you want this position</h4>


                    </div>

                    <RecordPage/>

                </div>





          </div>


         <div className="footer">

                <div className="footer-block-bar">

                    <ProgressBar className="progressbar" now={100} label={`${"Step 3"}`}  />

                </div>

                <div className="footer-block-start">

                        <Link to="/thanks"><button className="footer-section-start">Next<span className="glyphicon glyphicon-menu-right"></span></button></Link>

                </div>


          </div>

</div>

    );
  }
}

export default Video ;
