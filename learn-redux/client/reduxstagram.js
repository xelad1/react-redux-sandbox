// let's go!

import React from 'react';

import { render } from 'react-dom';

//Import CSS
import css from './styles/style.styl';

//Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//Import React Router Dependencies

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//React routing
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      //choose main component here PhotoGrid is our main page
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));

