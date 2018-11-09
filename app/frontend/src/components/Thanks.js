import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';

{/*This class is used to thank the User after completing an assessment*/}
class Thanks extends Component {
  render() {
    return (
      <div className="container-fluid">
          <div className="header">


          <div className="top-logo"><img className="shrpas-img" src="./shrpas.jpg" alt=""/></div>

          <div className="top-logo"><img className="avatar-image"  src="./mario.jpg" alt=""/></div>


          </div>
          <div className="content">

          <div className="row row-top-position align-items-center">




          <div className="col col-sm-12 col-md-12 col-lg-12 fixed col-thanks">

          <h4 className="thanks-header-message">Thank you for completing the Assessment!</h4>


      </div>


      <div className="col col-sm-12 col-md-12 col-lg-12 fixed">


          <h4 className="thanks-main-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare eget dui
      scelerisque blandit.Aenean ac blandit quam, eu hendrerit leo. Cras iaculis interdum leo sed feugiat.
          Suspendisse .
      </h4>


      </div>




      </div>



      </div>



      <div className="footer">
                    <div className="footer-block-next">
                            <Link to="/prompt"><button className="footer-section-next" >Next<span className="glyphicon glyphicon-menu-right"></span></button></Link>
                    </div>
          </div>

              </div>




    );
  }
}

export default Thanks ;
