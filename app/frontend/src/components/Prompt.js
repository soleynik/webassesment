import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import axios from 'axios';


class Prompt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formvisible: 'none',
            phone: "",
            address: "",
            homepage: "",
            filepath: null,
            uploadSuccess: false
        }
        this.editProfile = this.editProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.postImage = this.postImage.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    editProfile(){
        this.setState({formvisible: "block"});
    }

    updateProfile(){
        let conf = {
            headers:  {'Authorization': 'Bearer '+localStorage.getItem('SHRPASTOKEN')}
        };
        var data = {
            phone: ReactDOM.findDOMNode(this.refs['Phone']).value,
            address: ReactDOM.findDOMNode(this.refs['Address']).value,
            homepage: ReactDOM.findDOMNode(this.refs['HomePage']).value
        };

        axios.post('/api/userprofile/'+(localStorage.getItem('SHRPASUSERID')), data, conf).then(res=> {
            console.log(res);
            this.postImage();
        })

    }

    postImage(){
        let conf = {
            headers:  {'Authorization': 'Bearer '+localStorage.getItem('SHRPASTOKEN')}
        };
        var fd = new FormData();
        fd.append('file', ReactDOM.findDOMNode(this.refs['File']).files[0]);
        axios.post('/api/userphoto/' + (localStorage.getItem('SHRPASUSERID')),fd,conf).then(res=>{
            console.log(res);
            this.setState({uploadSuccess:true, filepath:'./' + res.data});
        });
    }

    getProfile(){
        let conf = {
            headers:  {'Authorization': 'Bearer '+localStorage.getItem('SHRPASTOKEN')}
        };
        axios.get('/api/userprofile/'+ (localStorage.getItem('SHRPASUSERID')),conf).then(res=>{
            /*this.setState({
                phone: res.data.phone == null ? "" : res.data.phone,
                address: res.data.address == null ? "" : res.data.address,
                homepage: res.data.homepage == null ? "" : res.data.homepage
            });
*/
            ReactDOM.findDOMNode(this.refs['Phone']).value = res.data.phone;
            ReactDOM.findDOMNode(this.refs['Address']).value = res.data.address;
            ReactDOM.findDOMNode(this.refs['HomePage']).value = res.data.homepage;
            this.setState({filepath:'./' + res.data.photopath});

        });
    }

    componentDidMount(){
        this.getProfile();
    }

    render() {
        var formstyle = {display: this.state.formvisible}
        return (
          <div className="container-fluid">

            <div className="header">


                <div className="top-logo"><img className="shrpas-img" src="./shrpas.jpg" alt=""/></div>

                <div className="top-logo"><img className="avatar-image"  src="./mario.jpg" alt=""/></div>


            </div>

               <div className="content">

                    <h2>{ this.props.route.title }</h2>


                        <div className="row row-top-position align-items-center">




                            <div className="col col-sm-12 col-md-12 col-lg-6">

                                <div className="form-group">

                                    <div className="big-avatar">

                                            <img src={this.state.filepath == null ? "./lines.jpg" : this.state.filepath} alt="..." className="img-prompt"/>
                                    </div>
                                </div>

                            </div>


                            <div className="col col-sm-12 col-md-12 col-lg-6 fixed">

                                <div className="form-group">

                                    <h4 className="prompt-header-message">Increase your chances by updating your profile</h4>

                                </div>

                            </div>


                            {/*<div className="col col-sm-12 col-md-12 col-lg-6">*/}

                                {/*<div className="form-group">*/}

                                        {/*<h4 className="prompt-body-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare eget dui scelerisque blandit</h4>*/}

                                {/*</div>*/}

                            {/*</div>*/}

                            <div className="col col-sm-12 col-md-12 col-lg-6">

                                <div className="form-group">



                                        {formstyle.display=='none' ? <button onClick={this.editProfile} className="footer-section-next">Edit<span className="glyphicon glyphicon-menu-right"></span></button> : null}
                                        <form style= {formstyle} >

                                            <div className="form-group field">
                                                    <label htmlFor="phone" className="label-edit">Phone</label>
                                                    <input type="text" name="phone" ref="Phone" className="input-form-edit " />
                                            </div>

                                            <div className="form-group field">

                                                    <label htmlFor="address" className="label-edit">Address</label>
                                                    <input type="text" name="address" ref="Address" className="input-form-edit " />
                                            </div>

                                            <div className="form-group field">

                                                    <label htmlFor="homepage" className="label-edit">Home Page</label>
                                                    <input type="url" name="homepage" ref="HomePage" className="input-form-edit" />

                                            </div>


                                            <div className="form-group">

                                            <div className="upload-btn-block">

                                                <label className="btn-fileupload file">
                                                    Upload <span className="glyphicon glyphicon-upload"></span><input className="fileInput files input-form" name="file" type="file" ref="File" />
                                                </label>
                                            </div>


                                            <button type="button" id="submit" onClick={this.updateProfile} className="button-edit">Update</button>

                                            </div>

                                            {this.state.uploadSuccess ?<span> Update Successfully!</span> : null}

                                        </form>

                                </div>

                            </div>

                        </div>
                </div>











            <div className="footer">

                    <div className="footer-block-next">


                        <Link to="/profile"><button className="footer-section-next" >Close</button></Link>


                    </div>
            </div>

          </div>

        );
    }
}

export default Prompt ;
