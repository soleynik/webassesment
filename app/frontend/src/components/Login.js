
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { hashHistory } from 'react-router';
import {Link} from 'react-router';




class Login extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        localStorage.clear();
        this.state={
            warning: ""
        }
        this.state = {file: '',imagePreviewUrl: ''};


    }

    ImageUpdate(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    submit(){
        axios.post("/auth/login",{
            file: ReactDOM.findDOMNode(this.refs['files']).files[0],
            email: ReactDOM.findDOMNode(this.refs['email']).value,
            password: ReactDOM.findDOMNode(this.refs['password']).value
        }).then(res => {
            if(res.data.username) {
            console.log(res.data.username);
            localStorage.setItem('SHRPASTOKEN', res.data.token);
            localStorage.setItem('SHRPASUSERNAME', res.data.username);
            localStorage.setItem('SHRPASUSERID', res.data.userid);




            if(res.data.finished&&res.data.userid != 1) {
                hashHistory.push('/prompt');
            }
            else hashHistory.push('/intro')
        }
    else{
            this.setState({warning: "Wrong Email or Password."})
        }
    }
    );
    }


    render() {

        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        let $imgsmPreview = null;

        if (imagePreviewUrl) {
            $imgsmPreview = (<div className="top-logo"><img src={imagePreviewUrl} className="avatar-image" /></div>); // small avatar
            $imagePreview = (<div className="viewImg"><img src={imagePreviewUrl} className="imgPreview" /></div>);   // big avatar

        } else {
            $imgsmPreview = (<div className="top-logo"><img className="avatar-image"  src="./avatar.png" alt=""/></div>);  // small avatar
            $imagePreview = (<div className="viewImg"><img src="./avatar.png" alt="..." className="img-avatar"/></div>);   // big avatar
        }

        return (
            <div className="cont">

            <div className="header">


            <div className="top-logo"><img className="shrpas-img" src="./shrpas.jpg" alt=""/></div>

            {$imgsmPreview}

            </div>




        <div className="content-login">

            <div className="row row-top-position align-items-center">
            <div className="col col-sm-12 col-md-12 col-lg-6 col-login">



            {$imagePreview}
            <div className="upload-btn-block">
            <label className="btn-fileupload">
            Upload <span className="glyphicon glyphicon-upload"></span><input className="fileInput files" name="upload" type="file" ref="files" onChange={(e)=>this.ImageUpdate(e)} />
    </label>
        </div>

        </div>
        <div className="col col-sm-12 col-md-12 col-lg-6">

            <div className="form-group">
            <input type="email" className="form-controls centered" ref="email" placeholder="Email" required/>
        </div>

        </div>

        <div className="col col-sm-12 col-md-12 col-lg-6">
            <div className="form-group">
            <input type="password" className="form-controls centered" ref="password" id="password" placeholder="Password" required/>
        </div>
        </div>

        <div className="col col-sm-12 col-md-12 col-lg-6">
            <div className="form-group">
            <input type="password" className="form-controls centered" ref="confirm_password" id="confirm_password" placeholder="Confirm Password" required/>

        </div>
        <h6 className="centertext centered">{this.state.warning}</h6>
        </div>



        </div>



        </div>


         <footer className="navbar navbar-default navbar-fixed-bottom nav-footer">

            <div className="footer">
                    <div className="footer-block-next">
                        <button className="footer-section-next" id="submit" onClick={this.submit}>Next<span className="glyphicon glyphicon-menu-right"></span></button>
                    </div>

            </div>
         </footer>



            </div>


    );
    }
}


export default Login;
