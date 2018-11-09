import React, { Component } from 'react';
import { browserHistory } from 'react-router';
 import { Link } from 'react-router';

class Home extends Component {

  handleSubmit(event) {
    event.preventDefault();
    let teacherName = event.target.elements[0].value;
    let teacherTopic = event.target.elements[1].value;
    let path = `featured/${teacherTopic}/${teacherName}`;
    browserHistory.push(path);
  }

  render() {
    return (
      <div className="main-content home">
        <h2>This is a testing site.</h2>
        <p>This site is a project for <em>COSC 4354</em> course with Venkat.</p>
        <hr />



        <footer >
          <h1 id="home"><Link to="login">GET STARTED!</Link></h1>
        </footer>
      </div>
    );
  }
}

export default Home;
