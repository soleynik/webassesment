import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';


class Profile extends Component {


    render() {
    return (
      <div className="container-fluid">


            <div className="header">


                    <div className="top-logo"><img className="shrpas-img" src="./shrpas.jpg" alt=""/></div>


            </div>



            <div className="content">

                    <div className="row row-top-position align-items-center">


                            <div className="col col-sm-12 col-md-12 col-lg-12 fixed">
                                    <div className="form-group">

                                            <div className="viewImg"><img src="./mario.jpg" alt="..." className="img-avatar"/></div>

                                    </div>

                            </div>

                            <div className="col col-sm-12 col-md-12 col-lg-12 fixed">

                                    <h5 className="thanks-header-message">{localStorage.getItem('SHRPASUSERNAME')}</h5>
                                    <h4>Product Manager</h4>


                            </div>


                            <div className="col col-sm-12 col-md-12 col-lg-12 fixed">


                                <h4 className="thanks-main-message">Thank you for taking the assessment. We will get back to you as soon as possible.</h4>


                            </div>




                    </div>



            </div>





            <div className="footer">


                <div className="footer-block-next">

                        <Link to="/"><button className="footer-section-next"><span className="glyphicon glyphicon-menu-left"></span>Back</button></Link>

                </div>


            </div>


      </div>

    );
  }
}

export default Profile ;
