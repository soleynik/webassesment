import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';


class Login extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>{ this.props.route.title }</h2>
        <h3>Welcome to TEAM3!</h3>
      
        <button type="button" id="upload">Upload</button>
      
        <div className="panel">
        <form className="form-class center-block">

        <input type="text" className="input-form " placeholder="Email" required autofocus/>
        <input type="password" className="input-form" placeholder="Password" required/>
        <input type="password" className="input-form" placeholder="Confirm Password" required/>
        

        </form>
        </div>
        <footer>
          <h1 id="foot"><Link to="intro">NEXT >></Link></h1>
        </footer>
      </div>
  
    );
  }
}

export default Login;