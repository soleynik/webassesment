// Libs
import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import AssessIntro from './components/AssessIntro';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Video from './components/Video';
import Thanks from './components/Thanks';
import Prompt from './components/Prompt';
import Profile from './components/Profile';


// Routes
const routes = (
  <Router history={hashHistory}>
    <Route component={App}>

      <Route path="/" component={Login} />
      <Route path="intro" component={AssessIntro} />
      <Route path="quiz" component={Quiz} />
      <Route path="results" component={Results} />
      <Route path="video" component={Video} />
      <Route path="thanks" component={Thanks} />
      <Route path="prompt" component={Prompt} />
      <Route path="profile" component={Profile} />
    </Route>
  </Router>
);

export default routes;
