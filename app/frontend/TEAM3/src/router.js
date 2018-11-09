// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import AssessIntro from './components/AssessIntro';
import Question1 from './components/Quiz/Question1';
import Results from './components/Results';
import Video from './components/Video';
import Thanks from './components/Thanks';
import Prompt from './components/Prompt';
import Profile from './components/Profile';


// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="login" component={Login} />
      <Route path="intro" component={AssessIntro} />
      <Route path="question1" component={Question1} />
      <Route path="results" component={Results} />
      <Route path="video" component={Video} />
      <Route path="thanks" component={Thanks} />
      <Route path="prompt" component={Prompt} />
      <Route path="profile" component={Profile} />
    </Route>
  </Router>
);

export default routes;
